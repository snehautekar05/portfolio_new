import React, { useState } from "react";
import SectionStructure from "../section-structure/SectionStructure";
import TimeLine from "../timeline/TimeLine";

export default function EducationAndCertification() {
  const [activeTab, setActiveTab] = useState("Education");

  return (
    <>
      <SectionStructure
        id={"education-and-certification"}
        title={`Education & Certification`}
      >
        <div role="tablist" className="tabs tabs-boxed lg:w-3/4">
          <a
            role="tab"
            className={`tab ${
              activeTab === "Education" ? "tab-active" : ""
            } text-xl font-semibold`}
            onClick={() => setActiveTab("Education")}
          >
            Education
          </a>
          <a
            role="tab"
            className={`tab ${
              activeTab === "Certification" ? "tab-active" : ""
            } text-xl font-semibold`}
            onClick={() => setActiveTab("Certification")}
          >
            Certification
          </a>
        </div>
        {activeTab === "Education" && <TimeLine />}

        {activeTab === "Certification" && <TimeLine />}
      </SectionStructure>
      <div className="divider"></div>
    </>
  );
}
