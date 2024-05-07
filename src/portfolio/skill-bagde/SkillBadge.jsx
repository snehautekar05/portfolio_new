import React from "react";
import { skillData } from "./skillData";

const SkillBadge = () => {
  return (
    <div className="flex flex-wrap gap-3">
      {skillData.map((skill, index) => (
        <div key={index} className="badge badge-outline">
          {skill.name}
        </div>
      ))}
    </div>
  );
};

export default SkillBadge;
