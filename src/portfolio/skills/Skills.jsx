import React, { useState } from "react";
import SectionStructure from "../section-structure/SectionStructure";
import SkillBadge from "../skill-bagde/SkillBadge";

export default function Skills() {
  const [activeTab, setActiveTab] = useState("Technical");
  return (
    <SectionStructure title={"Skills"} id={"skills"}>
      <SkillBadge />
    </SectionStructure>
  );
}
