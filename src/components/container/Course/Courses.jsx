import React, { useRef } from "react";
import { categories } from "../../../Data";
import { courses } from "../../../Data";
import Categories from "./Categories";
import Course from "./Course";
import { motion } from "framer-motion";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../../components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import useIsRTL from "../../../hooks/useIsRTL";

const Courses = () => {
  const isRtl = useIsRTL();
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));
  const container = {
    hidden: {
      opacity: 0,
      scale: 0,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };
  return (
    <div className="section max-w-6xl px-4 py-2" id="courses">
      <div className="text-center">
        <div className="sm:text-3xl text-2xl font-bold mb-5">
          Our Top <span className="text-Teal">Categories</span>
        </div>
        <p className="text-sm text-gray leading-7 max-w-[700px] mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
          tempora illo laborum ex cupiditate tenetur doloribus non velit atque
          amet repudiandae ipsa modi numquam quas odit optio, totam voluptate
          sit! Lorem ipsum dolor sit amet.
        </p>
      </div>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        className="grid md:grid-cols-4 sm:grid-cols-2 mt-12 gap-8"
      >
        {categories.map((category) => {
          return <Categories key={category.id} {...category} />;
        })}
      </motion.div>
      <div className="text-xl font-bold mt-32">Most Popular Courses</div>

      <div className="mt-12 m-auto w-full flex flex-col justify-center items-center px-12 sm:px-24 md:px-2">
        <Carousel
          plugins={[plugin.current]}
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
          opts={{
            align: "start",
            direction: isRtl ? "rtl" : "ltr",
          }}
          className="w-full"
        >
          <CarouselContent>
            {courses.map((course) => {
              return (
                <CarouselItem
                  key={course.id}
                  className="basis-full sm:basis-1/2 md:basis-1/4"
                >
                  <Course {...course} />
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default Courses;
