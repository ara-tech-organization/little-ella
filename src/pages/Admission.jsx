import { useState } from "react";

import Hero from "../components/Home/Hero";
import CuriositySection from "../components/Home/CuriositySection";
import ValuesSection from "../components/Home/ValuesSection";
import ApproachSection from "../components/Home/ApproachSection";
import ProgrammesSection from "../components/Admission/AdmissionHero";
import AdmissionSteps from "../components/Admission/AdmissionSteps";
import AdmissionHero from "../components/Admission/AdmissionHero";
import RegistrationForm from "../components/Admission/RegistrationForm";
function Admission() {
  return (
    <>
      <AdmissionHero/>
      <AdmissionSteps/>
      <RegistrationForm/>
    </>
  );
}

export default Admission;

