import React, { useEffect, useState } from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, useLocation, useHistory } from "react-router-dom";
import "./index.css";


//component imports
import Nav from "./Nav/Nav";
import Landing from "./Landing/Landing";
import Footer from "./Footer/Footer";
import Report from "./Report/Report";
import Error from "./Error/Error";


function App() {
  const d = {
    "requiredInfo": {
      "checklistScore": 59,
      "checklist": {
        "emails": false,
        "linkedin": false,
        "name": true,
        "phoneNumber": false,
        "positions": {
          "Cratus": {
            "endMonth": true,
            "endYear": true,
            "startMonth": true,
            "startYear": true
          },
          "Delta Mu Kappa": {
            "endMonth": true,
            "endYear": true,
            "startMonth": true,
            "startYear": true
          },
          "First Tee": {
            "endMonth": true,
            "endYear": true,
            "startMonth": true,
            "startYear": true
          },
          "HeadSpin": {
            "endMonth": true,
            "endYear": true,
            "startMonth": true,
            "startYear": true
          },
          "Prudential Financial": {
            "endMonth": true,
            "endYear": true,
            "startMonth": true,
            "startYear": true
          },
          "Sym": {
            "endMonth": true,
            "endYear": true,
            "startMonth": true,
            "startYear": true
          },
          "ThinkTwice": {
            "endMonth": true,
            "endYear": true,
            "startMonth": true,
            "startYear": true
          },
          "Ultron": {
            "endMonth": true,
            "endYear": true,
            "startMonth": true,
            "startYear": true
          }
        },
        "schools": {
          "Purdue University": {
            "degree": true,
            "gpa": false
          }
        }
      }
    },
    "experience": {
      "goodVerbs": {
        "Cratus": [
          "Created",
          "Developed"
        ],
        "Delta Mu Kappa": [],
        "First Tee": [
          "Built",
          "customized"
        ],
        "HeadSpin": [
          "built"
        ],
        "Prudential Financial": [
          "Implemented",
          "Focused",
          "Created"
        ],
        "Sym": [
          "Collaborated"
        ],
        "ThinkTwice": [],
        "Ultron": [
          "Developed",
          "Developed"
        ]
      },
      "positions": [
        {
          "org": "HeadSpin",
          "reason": {
            "company_score": 3,
            "role_score": 9,
            "summary_score": 25
          },
          "score": 15.8,
          "title": "Software Engr Intern"
        },
        {
          "org": "Prudential Financial",
          "reason": {
            "company_score": 3,
            "role_score": 9,
            "summary_score": 0
          },
          "score": 3.3,
          "title": "Software Engr Intern"
        },
        {
          "org": "ThinkTwice",
          "reason": {
            "company_score": 3,
            "role_score": 3,
            "summary_score": 0
          },
          "score": 1.5,
          "title": ""
        },
        {
          "org": "Sym",
          "reason": {
            "company_score": 3,
            "role_score": 7,
            "summary_score": 0
          },
          "score": 2.7,
          "title": "Freelance Web Developer"
        },
        {
          "org": "Ultron",
          "reason": {
            "company_score": 3,
            "role_score": 3,
            "summary_score": 9
          },
          "score": 6.0,
          "title": "Intent-based voice assistant"
        },
        {
          "org": "Cratus",
          "reason": {
            "company_score": 3,
            "role_score": 3,
            "summary_score": 54
          },
          "score": 28.5,
          "title": ""
        },
        {
          "org": "First Tee",
          "reason": {
            "company_score": 3,
            "role_score": 3,
            "summary_score": 8
          },
          "score": 5.5,
          "title": "Golf Coach"
        },
        {
          "org": "Delta Mu Kappa",
          "reason": {
            "company_score": 3,
            "role_score": 3,
            "summary_score": 0
          },
          "score": 1.5,
          "title": "President"
        }
      ],
      "skills": null,
      "verbScore": {
        "Cratus": 100,
        "Delta Mu Kappa": 0,
        "First Tee": 100,
        "HeadSpin": 100,
        "Prudential Financial": 100,
        "Sym": 100,
        "ThinkTwice": 0,
        "Ultron": 100
      }
    },
    "filename": "3L0E7A1E2L.pdf",
    "prechecks": {
      "doesFollowNaming": false,
      "isAPage": true,
      "isFilePDF": true,
      "isFileScannable": true,
      "precheckScore": 85
    },
    "resumeImageSrc": "http://localhost:5000/getResumeImage?filename=2K2P6E4P5X.jpg",
    "resumeJSON": {
      "createdAt": 1610328333750,
      "lastStoryAt": 1610328333750,
      "links": [
        {
          "domain": "symops.com",
          "path": null,
          "url": "https://symops.com"
        },
        {
          "domain": "sahilkapur.com",
          "path": null,
          "url": "sahilkapur.com"
        }
      ],
      "names": [
        "Sahil Kapur"
      ],
      "positions": [
        {
          "end": {
            "month": 1,
            "timestamp": 1577865600000,
            "year": 2020
          },
          "org": "Sym",
          "start": {
            "month": 1,
            "timestamp": 1577865600000,
            "year": 2020
          },
          "summary": "Minor\r\n\n\n\u2022 Collaborated with engineering team to rebuild company\tGraduation: May 2022\r\nwebsite in React (https://symops.com)\tGPA: 3.71",
          "title": "Freelance Web Developer"
        },
        {
          "end": {
            "month": 1,
            "timestamp": 1577865600000,
            "year": 2020
          },
          "org": "HeadSpin",
          "start": {
            "month": 1,
            "timestamp": 1577865600000,
            "year": 2020
          },
          "summary": "Harker High School\r\n\n\n\u2022 Architected and built SWAT (sales weekly app tracker)\tSocieties: Varsity Golf, Red Cross,\r\nusing React.js, Node.js, Python, and SQL\tDECA\r\nGPA: 3.98\r\n\n\n\u2022 SWAT dashboard aggregates worldwide usage data of major mobile apps into actionable visualizations for\t.involvement.\r\nsales/marketing to drive leads",
          "title": "Software Engr Intern"
        },
        {
          "end": {
            "month": 1,
            "timestamp": 1577865600000,
            "year": 2020
          },
          "org": "Delta Mu Kappa",
          "start": {
            "month": 1,
            "timestamp": 1577865600000,
            "year": 2020
          },
          "title": "President"
        },
        {
          "end": {
            "month": 1,
            "timestamp": 1577865600000,
            "year": 2020
          },
          "org": "Ultron",
          "start": {
            "month": 1,
            "timestamp": 1577865600000,
            "year": 2020
          },
          "summary": "schoolers to find unique\r\n\n\n\u2022 Developed cloud-based Node.js system that controls\tvolunteering events\r\nlights, tracks workouts, and automates a majority of my\t\n\n\u2022 Developed in MIT incubator",
          "title": "Intent-based voice assistant"
        },
        {
          "end": {
            "month": 1,
            "timestamp": 1546329600000,
            "year": 2019
          },
          "org": "Prudential Financial",
          "start": {
            "month": 1,
            "timestamp": 1546329600000,
            "year": 2019
          },
          "summary": "\n\n\u2022 Lead planning/development of\r\n\n\n\u2022 Implemented microservice monitoring application\tPurdue's co-ed entrepreneurship\r\n\n\n\u2022 Tracks health metrics/downtime of 800 API services and\tfraternity (50+ members)\r\nupdates health on live status page\t\n\n\u2022 Focused on building community of makers in the Midwest\r\n\r\n.notable projects.\tMIT Launch   Participant\r\n\n\n\u2022 Created platform for high",
          "title": "Software Engr Intern"
        },
        {
          "end": {
            "month": 1,
            "timestamp": 1546329600000,
            "year": 2019
          },
          "org": "Cratus",
          "start": {
            "month": 1,
            "timestamp": 1546329600000,
            "year": 2019
          },
          "summary": ".skills.\r\n\n\n\u2022 Created and deployed AWS production-ready API\tLanguages: JavaScript, Java,\r\nendpoints written in Golang, Node.js, Python, and Java\tC/C++, Python3, Golang, SQL\r\n\n\n\u2022 Developed analysis system to measure execution speed,\tFrameworks: React, Express, Node,\r\nmemory usage, and scalability of endpoints in each\tFlask, Spring boot, MongoDB,\r\nlanguage\tMySQL\r\n\n\n\u2022 Automated verbose test reports for performance\tTechnologies: AWS, bash, git,\r\ncomparison of each endpoint\tApache, Docker, Nginx, Gunicorn,\r\nGoogle Cloud, REST APIs"
        },
        {
          "end": {
            "month": 1,
            "timestamp": 1546329600000,
            "year": 2019
          },
          "org": "ThinkTwice",
          "start": {
            "month": 1,
            "timestamp": 1546329600000,
            "year": 2019
          },
          "summary": "Other: Data structures, Figma, Linux\r\n\n\n\u2022 JS-based web app for users to view philanthropic\tOS, NLP, Raspberry Pi\r\nalternatives to blowing cash\r\n\n\n\u2022 Received 3rd place Product of the Day on Product Hunt\r\nwith over 8,000 pageviews in 2 days"
        },
        {
          "end": {
            "month": 1,
            "timestamp": 1514793600000,
            "year": 2018
          },
          "org": "First Tee",
          "start": {
            "month": 1,
            "timestamp": 1420099200000,
            "year": 2015
          },
          "summary": "\n\n\u2022 Built customized NLP service to parse intents\tShare my love of the game with\r\n\n\n\u2022 Service runs on Siri, Alexa, Google, and uses React.js for   economically and culturally diverse\r\nweb interface\tgrade-school students",
          "title": "Golf Coach"
        }
      ],
      "schools": [
        {
          "degree": "B.S.",
          "end": {
            "month": 1,
            "timestamp": 1609488000000,
            "year": 2021
          },
          "field": "Computer Science",
          "org": "Purdue University",
          "summary": "Amazon   Incoming Software Engr Intern (2021)\tPurdue University\r\nB.S. Computer Science, Economics"
        }
      ],
      "summary": {
        "experience": "Sahil Kapur's experience appears to be strongly concentrated in Information Technology (mostly Programming) and slightly concentrated in Sales (mostly General). Sahil Kapur has 6 years of work experience, with 5 years of management experience, including a high-level position.",
        "management": "Starting on 1/1/2020, the candidate held the following executive-level management position for 12 months:\r\n\tTitle: President for Delta Mu Kappa\r\nStarting on 1/1/2015, the candidate held the following low-level management position for 4 years:\r\n\tTitle: Golf Coach for First Tee",
        "managementTime": {
          "months": 60,
          "years": 5
        },
        "workTime": {
          "months": 77,
          "years": 6
        }
      }
    },
    "score": 10,
    "success": true
  }


  let history = useHistory();
  const location = useLocation();
  const pathName = location.pathname.replace("/", "");

  const initialState = pathName === "report" ? "results" : "landing";
  const initialData = process.env.NODE_ENV !== "production" ? d : { success: false };

  const [appState, updateAppState] = useState(initialState);
  const [sharingOptIn, updateSharingOptIn] = useState(true);
  const [filename, updateFilename] = useState("");
  const [pageData, updatePageData] = useState(initialData);
  const simulateProd = false;
  const isDev = process.env.NODE_ENV !== "production" && !simulateProd;
  const host = isDev ? "http://localhost:5000" : "https://glidecv.com/server";

  function redirect(path) {
    history.push(path);
  }

  useEffect(() => {
    if (pathName === "report") {
      updateAppState("results");
    } else if (pathName === "") {
      updateAppState("landing");
    } else if (pathName != "error") {
      redirect("error");
    } else {
      updateAppState("error");
    }
  }, [pathName]);

  useEffect(() => {
    if (appState === "submitted") {
      const endpoint = host + "/getResumeDetails?filename=" + filename + "&optIn=" + sharingOptIn + "&isDev=" + isDev;
      fetch(endpoint)
        .then(response => response.json())
        .then(data => {
          updatePageData(data);
          if (!data.success) {
            redirect("error");
          } else {
            redirect("report");
          }
        }).catch((e) => {
          console.error(e);
          updatePageData({ success: false });
          redirect("error");
        });
      updateAppState("loading");
    }
  }, [appState]);
  let pageContent;
  if (appState === "landing") {
    pageContent = (
      <>
        <div className="page-content">
          <Landing
            updateAppState={updateAppState}
            updateFilename={updateFilename}
            host={host}
            sharingOptIn={sharingOptIn}
            updateSharingOptIn={updateSharingOptIn}
          />
        </div>
        <Footer host={host} />
      </>
    );
  } else if (appState === "loading") {
    pageContent = <LoadingScreen />
  } else if (appState === "results") {
    pageContent = (
      <>
        <div className="page-content">
          <Nav />
          <Report
            pageData={pageData}
            redirect={redirect}
          />
        </div>
        <Footer host={host} />
      </>
    );
  } else {
    pageContent = Error();
  }
  return pageContent;
}

function BackgroundWave() {
  return (
    <div className="background-wave-container">
      <img alt="" src="./img/wave-vector.svg" className="background-wave" />
    </div>
  )
}

function LoadingScreen() {
  return (
    <div className="loading-screen-container">
      <img alt="" src="./img/loading.gif" className="loading-gif" />
      <p className="loading-screen-text">Finding you a FAANG offer...</p>
    </div>
  );
}

function AppWrapper() {
  return (
    <Router>
      <Route path="/" component={App} />
    </Router>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <AppWrapper />
  </React.StrictMode>,
  document.getElementById('root')
);