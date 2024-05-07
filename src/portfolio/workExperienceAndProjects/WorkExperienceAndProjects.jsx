import React, { useState } from "react";

import SectionStructure from "../section-structure/SectionStructure";
import TimeLine from "../timeline/TimeLine";

export default function WorkExperienceAndProjects() {
  const [activeTab, setActiveTab] = useState("WorkExperience");
  return (
    <>
      <SectionStructure
        id={"work-experience-and-projects"}
        title={"Work Experience & Projects"}
      >
        <div role="tablist" className="tabs tabs-boxed w-3/4">
          <a
            role="tab"
            className={`tab ${
              activeTab === "WorkExperience" ? "tab-active" : ""
            } text-xl font-semibold`}
            onClick={() => setActiveTab("WorkExperience")}
          >
            Work Exp.
          </a>
          <a
            role="tab"
            className={`tab ${
              activeTab === "Projects" ? "tab-active" : ""
            } text-xl font-semibold`}
            onClick={() => setActiveTab("Projects")}
          >
            Projects
          </a>
        </div>
        {activeTab === "WorkExperience" && <TimeLine />}

        {activeTab === "Projects" && <TimeLine />}
      </SectionStructure>
      <div className="divider"></div>
    </>
  );
}
