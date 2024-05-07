import {
  faGit,
  faGitAlt,
  faGithub,
  faGitlab,
  faJs,
  faSass,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function OtherSkills() {
  return (
    <div className="flex flex-col py-10">
      <div className="flex gap-5 w-full items-center justify-center py-5">
        <div className="">
          <FontAwesomeIcon className="h-11 w-11" icon={faJs} bounce />
        </div>
        <div className="">
          <FontAwesomeIcon
            className="h-11 w-11"
            icon={faGit}
            size="2xl"
            bounce
          />
        </div>
        <div className="">
          <FontAwesomeIcon
            className="h-11 w-11"
            icon={faGitAlt}
            size="2xl"
            bounce
          />
        </div>
      </div>
      <div className="flex gap-5 w-full items-center justify-center py-5">
        <div className="">
          <FontAwesomeIcon
            className="h-11 w-11"
            icon={faGithub}
            size="2xl"
            bounce
          />
        </div>
        <div className="">
          <FontAwesomeIcon
            className="h-11 w-11"
            icon={faGitlab}
            size="2xl"
            bounce
          />
        </div>
      </div>
      <div className="flex gap-5 w-full items-center justify-center py-1">
        <div className="">
          <FontAwesomeIcon
            className="h-11 w-11"
            icon={faSass}
            size="2xl"
            bounce
          />
        </div>
      </div>
    </div>
  );
}
