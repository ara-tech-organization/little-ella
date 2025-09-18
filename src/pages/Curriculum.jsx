import { useState } from "react";
import InspireSection from "../components/Curriculum/InspireSection";
import MultipleIntelligence from "../components/Curriculum/MultipleIntelligence";
import Methodology from "../components/Curriculum/Methodology";
import EngagingLearning from "../components/Curriculum/EngagingLearning";


function Curriculum() {
  return (
    <>
      <InspireSection/>
      <MultipleIntelligence/>
      <Methodology/>
      <EngagingLearning/>
    </>
  );
}

export default Curriculum;