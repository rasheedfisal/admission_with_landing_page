import React from "react";

import { About, Teacher, Contact, Courses } from "./index";
import AnimatedPage from "./AnimatedPage";
import Hero from "./Hero-s";

const HomePage = () => {
  return (
    <AnimatedPage>
      <Hero />
      {/* <Home /> */}
      <About />

      <Courses />
      <Teacher />
      <Contact />
    </AnimatedPage>
  );
};

export default HomePage;
