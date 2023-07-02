import React from "react";
import { TypeAnimation } from "react-type-animation";
import Img from "../assets/Willie.png";
import circle from "../assets/circle.png";
import img2 from "../assets/img2.png";
import resume from "../assets/mehedi-hasan-react-developer.pdf";
import { ArrowDownOnSquareIcon } from "@heroicons/react/24/solid";
const Home = () => {
  return (
    <div className="md:px-10 px-7 my-14 md:h-screen bg-[#1a1a29]" id="home">
      <div>
        <div className="flex flex-col md:flex-row items-center justify-between w-full">
          {/* image & content */}
          {/* text */}
          <div className="text-white">
            <h6 className="text-3xl mt-12">Hello, I'm</h6>
            <h1 className="font-semibold md:text-5xl my-4 text-3xl">
              Mehedi Hasan
            </h1>
            <h4>
              <TypeAnimation
                sequence={[
                  "Full Stack Web Developer",
                  500,
                  "Front-end Developer", //  Continuing previous Text
                  500,
                  "React Developer",
                  500,
                  "Mern Developer",
                  500,
                  
                  "",
                  500,
                ]}
                style={{ fontSize: "1.5em" }}
                repeat={Infinity}
              />
            </h4>
            <p className="md:w-1/2">
               I create innovative and efficient solutions. With
              expertise in JavaScript languages and frameworks, I deliver
              high-quality Web applications. 
            </p>

            <div className="mt-5">
              <a href={resume} download>
                <button className="btn transition-all duration-500 bg-primary py-2 flex px-4 rounded text-white hover:bg-white hover:text-primary">
                  Resume <ArrowDownOnSquareIcon className="w-5" />
                </button>
              </a>
            </div>
          </div>
          {/* img */}
          <div className="order-first md:order-last relative z-40 overflow-hidden">
            <img src={img2}  alt="" />
            <img src={circle} className="absolute top-1/3 -z-10" alt="" />
          </div>
        </div>
      </div>
      {/* <div className="h-24 bg-[#181824] w-full mx-auto absolute left-0 hidden md:block"></div> */}
    </div>
  );
};

export default Home;
