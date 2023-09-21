import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import "./profile.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}
function Avatar() {
  return (
    <div className="img-container">
      <img src="myPic.jpg" />
    </div>
  );
}
function Intro() {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="intro">
      <h1>Mark Angel Papio</h1>
      <h2>Frontend Developer</h2>
      <span>{currentTime}</span>
      <hr />
      <p>
        "A recent Bachelor of Science graduate with a deep passion for web
        development. I'm dedicated to creating dynamic and user-friendly
        websites that blend my scientific background with cutting-edge
        technology."
      </p>
    </div>
  );
}
function SkillList() {
  return (
    <div className="skill-list">
      <Skill skillName={"Html + CSS"} />
      <Skill skillName={"Javascript"} />
      <Skill skillName={"SASS"} />
      <Skill skillName={"NodeJs"} />
      <Skill skillName={"MongoDB"} />
      <Skill skillName={"React"} />
    </div>
  );
}
function Skill(props) {
  return <span className="skill">{props.skillName}</span>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
