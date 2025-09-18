import { useState } from "react";

import Hero from "../components/Home/Hero";
import CuriositySection from "../components/Home/CuriositySection";
import ValuesSection from "../components/Home/ValuesSection";
import ApproachSection from "../components/Home/ApproachSection";
import FacilitiesImageSection from "../components/Facilities/FacilitiesHero";
import FacilitiesCards from "../components/Facilities/FacilitiesCards";
import WelcomeSection from "../components/Facilities/WelcomeSection";
function Facilities() {
  return (
    <>
      {/* Header at the top */}
      {/* <Header /> */}
     <FacilitiesImageSection/>
     <FacilitiesCards/>
     <WelcomeSection/>
    </>
  );
}

export default Facilities;