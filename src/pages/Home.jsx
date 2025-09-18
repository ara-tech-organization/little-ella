import { useState } from "react";

import Hero from "../components/Home/Hero";
import CuriositySection from "../components/Home/CuriositySection";
import ValuesSection from "../components/Home/ValuesSection";
import ApproachSection from "../components/Home/ApproachSection";
function Home() {
  return (
    <>
      {/* Header at the top */}
      {/* <Header /> */}
      <Hero />
      <CuriositySection/>
      <ValuesSection/>
      <ApproachSection/>
    </>
  );
}

export default Home;