import React, { useRef } from "react";
import hero_1_circle from "../assets/shape/hero/hero-1-circle.png";
import hero_1_circle_2 from "../assets/shape/hero/hero-1-circle-2.png";
import hero_1_dot from "../assets/shape/hero/hero-1-dot.png";
import hero_1_dot_2 from "../assets/shape/hero/hero-1-dot-2.png";
import yellow_bg from "../assets/shape/yellow-bg.png";
import hero_1_circle_3 from "../assets/shape/hero/hero-1-circle-3.png";
import hero_1_circle_4 from "../assets/shape/hero/hero-1-circle-4.png";
import hero_1 from "../assets/hero/hero-1.jpg";
import hero_sm_1 from "../assets/hero/hero-sm-1.jpg";
import { NextLink } from "./ui/next-link";

import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
} from "../components/ui/carousel-dots";
import Autoplay from "embla-carousel-autoplay";
import { useTranslation } from "react-i18next";
import useIsRTL from "../hooks/useIsRTL";

const Hero = () => {
  const isRtl = useIsRTL();
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));
  const { t } = useTranslation();
  return (
    <section className="min-h-[600px] flex items-center relative" id="home">
      <img
        className={`absolute left-[5%] ${
          isRtl ? "top-[40%]" : "top-[25%]"
        } animate-hero-circle`}
        width={56}
        height={59}
        style={{ width: "56px", height: "59px" }}
        src={hero_1_circle}
        alt=""
      />
      <img
        className="absolute bottom-[29%] left-0"
        width={55}
        height={191}
        style={{ width: "55px", height: "191px" }}
        src={hero_1_circle_2}
        alt=""
      />
      <img
        className={`absolute bottom-[38%] right-0`}
        width={47}
        height={74}
        style={{ width: "47px", height: "74px" }}
        src={hero_1_dot_2}
        alt=""
      />
      <div className="container absolute left-0 right-0 top-24 md:top-3">
        {/* <div className="relative z-10 order-2 md:order-1 mt-7 md:mt-0">
              <h3 className="text-2xl md:text-5xl font-bold space-y-5">
                <span className="block font-normal">{t("site_slogan4")}</span>
                <span className="relative z-10">
                  {t("site_slogan5")}{" "}
                  <img
                    className="absolute bottom-[22px] left-[-8px] -z-10 animate-section-animation"
                    src={yellow_bg}
                    alt="yellow-shape"
                    width={194}
                    height={15}
                    style={{ width: "194px", height: "15px" }}
                  />
                </span>
                {t("site_slogan6")}
              </h3>
              <p className="pr-0 md:pr-5">{t("site_slogan7")}</p>
              <div className="flex gap-3 mt-10">
                <NextLink
                  href="/admission"
                  className="bg-blue-700 h-8 md:h-10 rounded-md px-3 md:px-8 text-xs md:text-base animate-bounce duration-1000"
                >
                  {t("adm_btn")}
                </NextLink>
                <NextLink
                  href="/old"
                  className="h-8 md:h-10 rounded-md px-3 md:px-8 text-xs md:text-base animate-reverse-bounce duration-1000"
                >
                  {t("adm_reenrollment")}
                </NextLink>
              </div>
            </div> */}

        <div className="hero__thumb z-10 flex relative order-1 md:order-2">
          <div className="hero__thumb-shape">
            <img
              className={`absolute -z-10 bottom-[-25px] ${
                isRtl ? "left-[15%]" : "right-[15%]"
              } hero-1-dot animate-hero-dot`}
              src={hero_1_dot}
              alt=""
              width={70}
              height={110}
              style={{ width: "70px", height: "110px" }}
            />
            <img
              className={`absolute -z-10 bottom-[-47px] ${
                isRtl ? "right-[1%]" : "left-[1%]"
              } hero-1-circle-3`}
              src={hero_1_circle_3}
              alt=""
              width={330}
              height={330}
              style={{ width: "330px", height: "330px" }}
            />
            <img
              className="absolute -z-10 right-[10%] top-[-50px] hero-1-circle-4"
              src={hero_1_circle_4}
              alt=""
              width={170}
              height={170}
              style={{ width: "170px", height: "170px" }}
            />
          </div>
          <div className="hero__thumb-big relative mr-[30px]">
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
                {Array.from({ length: 5 }, (_, i) => {
                  return (
                    <CarouselItem key={i}>
                      <img
                        src={hero_1}
                        className="rounded-md shadow sm:mt-[50px] w-full max-h-[460px] max-w-full object-cover"
                        alt=""
                        // width={400}
                        // height={460}
                        // style={{ width: "400px", height: "460px" }}
                      />
                      {/* <div className="p-1 relative w-full h-80 md:h-[430px] max-h-[430px]">
                            <Image
                              src={`/${item}`}
                              className="max-w-full h-auto rounded-md object-fill"
                              alt="discount banner"
                              fill
                            />
                          </div> */}
                    </CarouselItem>
                  );
                })}
              </CarouselContent>
              <CarouselDots className="flex justify-center relative -top-5" />
            </Carousel>
            <div
              className={`hero__quote bg-white shadow px-2 py-2 flex flex-col gap-1 rounded absolute bottom-[-80px] right-[25%] md:right-[40%] animate-wiggle  hero__quote-animation`}
            >
              {/* <span>{t("site_slogan8")}</span>
              <h4>{t("site_slogan8")}</h4> */}
              <NextLink
                href="/admission"
                className="bg-blue-700 w-full h-full rounded"
              >
                {t("adm_btn")}
              </NextLink>
              <NextLink href="/old" className="w-full h-full rounded">
                {t("adm_reenrollment")}
              </NextLink>
            </div>
          </div>
          <div className="hero__thumb-sm mt-[50px] hidden md:block">
            <img
              src={hero_sm_1}
              className="rounded-md shadow w-full md:ml-auto md:mr-[20px] lg:ml-0 lg:mr-[-50px] object-cover max-w-[200px] max-h-[240px]"
              alt=""
              //   width={200}
              //   height={240}
              style={{ width: "200px", height: "240px" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
