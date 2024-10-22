// import React from "react";
// import Hero from "../Hero/Hero";
// import EducationAndCertification from "../education-and-certifications/EducationAndCertification";
// import WorkExperienceAndProjects from "../workExperienceAndProjects/WorkExperienceAndProjects";
// import Skills from "../skills/Skills";

// export default function MainContent() {
//   return (
//     <>
//       <Hero />
//       <EducationAndCertification />
//       <WorkExperienceAndProjects />
//       <Skills />

//     </>
//   );
// }
import React from "react";
import Hero from "../Hero/Hero";
import EducationAndCertification from "../education-and-certifications/EducationAndCertification";
import WorkExperienceAndProjects from "../workExperienceAndProjects/WorkExperienceAndProjects";
import Skills from "../skills/Skills";
import ContactUs from "../contact-us/ContactUs"; // Importing the ContactUs component

export default function MainContent() {
  return (
    <>
      <Hero />
      <EducationAndCertification />
      <WorkExperienceAndProjects />
      <Skills />
      <ContactUs /> {/* Adding the ContactUs component */}
    </>
  );
}
