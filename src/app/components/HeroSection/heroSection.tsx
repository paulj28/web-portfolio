"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-red-600">
              Hello, I&apos;m
            </span>{" "}
            <br />
          </h1>
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold mt-2">
            <TypeAnimation
              sequence={[
                "Paul John Pallickal",
                2000,
                "a Software Developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
          <div>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-700 to-red-600 hover:bg-slate-200 text-white font-semibold">
              Hire Me
            </button>
            <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-700 to-red-600 hover:bg-slate-800 text-white mt-3 font-semibold">
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-white w-[225px] h-[225px] lg:w-[300px] lg:h-[300px] relative">
            <Image
              src="/images/profilephoto.png"
              width={300}
              height={300}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="Profile Alt"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
