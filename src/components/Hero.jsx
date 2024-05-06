import React from "react";
import Heading from "./common/Heading";
import { ArrowBigRightIcon } from "lucide-react";

const Hero = () => {
  return (
    <>
      <section className="banner">
        <div className="container-v">
          <div className="row">
            <Heading
              subtitle="WELCOME TO ACADEMIA"
              title="Best Online Education Expertise"
            />
            {/* <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
            <div className="button">
              <button className="btn-primary">
                GET STARTED NOW <ArrowBigRightIcon className="h-4 w-4" />
              </button>
              <button>
                VIEW COURSE <ArrowBigRightIcon className="h-4 w-4" />
              </button>
            </div> */}
          </div>
        </div>
      </section>
      <div className="mt-[40.3%]"></div>
    </>
  );
};

export default Hero;
