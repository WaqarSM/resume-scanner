import React, { useState } from "react";
import "./feedback.css";
import copy from "./copy";

import ReportSwitcher from "./FeedbackNav/FeedbackNav";
import ParseTable from "./ParseTable/ParseTable";

export default function Feedback({ resumeImageSrc, content, resumeAsJSON, filename }) {
  const [activeFeedback, updateActiveFeedback] = useState("ATS Scan");
  console.log(activeFeedback);
  return (
    <div style={{ position: "relative" }}>
      <div className="report-navigator-container">
        <ReportSwitcher
          activeFeedback={activeFeedback}
          updateActiveFeedback={updateActiveFeedback}
        />
        <ReportContent
          activeFeedback={activeFeedback}
          activeContent={content[toLowerCamelCase(activeFeedback)]}
          resumeAsJSON={resumeAsJSON}
        />
      </div>
      <ResumeImage filename={filename} resumeImageSrc={resumeImageSrc} />
    </div>
  );
}

const toLowerCamelCase = (str) => {
  return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
    return index === 0 ? word.toLowerCase() : word.toUpperCase();
  }).replace(/\s+/g, '');
}

function ReportContent({ activeFeedback, activeContent, resumeAsJSON }) {
  let feedbackComponent;
  if (activeFeedback === "Prechecks") {
    feedbackComponent = Prechecks({ activeContent });
  } else if (activeFeedback === "Required Info") {
    feedbackComponent = RequiredInfo({ activeContent });
  } else if (activeFeedback === "ATS Scan") {
    feedbackComponent = ParseTable({ resumeAsJSON });
  }
  return (
    <div className="report-content-container">
      <h2 className="feedback-active-title">{activeFeedback}</h2>
      <div>
        {feedbackComponent}
      </div>
    </div>
  );
}

function Prechecks({ activeContent }) {
  const options = copy["Prechecks"];
  const componentNames = ["isFilePDF", "isFileScannable", "doesFollowNaming"]
  let components = [];
  componentNames.forEach(key => {
    const checked = activeContent[key];
    components.push(
      <FeedbackComponent
        checked={checked}
        title={options[key][checked.toString()]["title"]}
        subtitle={options[key][checked.toString()]["subtitle"]}
      />
    );
  });
  return (
    <div>
      {components}
    </div>
  )
}

function RequiredInfo({ activeContent }) {
  const checklist = activeContent.checklist;
  const options = copy["Required Info"];
  const booleanChecks = ["name", "phoneNumber", "linkedin", "emails"];
  let components = [];
  booleanChecks.forEach(key => {
    const checked = checklist[key];
    console.log(key);
    components.push(
      <FeedbackComponent
        checked={checked}
        title={options[key][checked.toString()]["title"]}
        subtitle={options[key][checked.toString()]["subtitle"]}
      />
    );
  });
  return (
    <div>
      {components}
    </div>
  )
}

function FeedbackComponent({ checked, title, subtitle }) {
  let img;
  if (checked) {
    img = <img alt="" src="./img/check.png" className="feedback-component-check" />
  } else {
    img = <img alt="" src="./img/dot.png" className="feedback-component-check" />
  }
  return (
    <div className="feedback-component-container">
      {img}
      <p className="feedback-component-title">{title}</p>
      <p className="feedback-component-subtitle">{subtitle}</p>
    </div>
  )
}

function ResumeImage({ filename, resumeImageSrc }) {
  return (
    <div className="report-resume-img-container">
      <img alt="" src={resumeImageSrc} className="report-resume-img" />
      <p className="report-resume-filename">{filename}</p>
    </div>
  )
}