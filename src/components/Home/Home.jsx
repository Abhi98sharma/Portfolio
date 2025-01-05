import React from "react";

export default function Home() {
  return (
    <>
      <main
        id="home"
        className="bg-black flex flex-col lg:flex-row-reverse justify-center items-center px-10 py-14 lg:px-20 lg:py-32 lg:bg-image relative"
      >
        <div className="object-cover">
          <img src="/images/profile-pic.png" alt="profile-pic" />
        </div>
        <div className="flex flex-col justify-center items-start space-y-5">
          <div className="flex items-end">
            <h1 className="text-xl lg:text-2xl font-Kameron font-semibold">
              Abhijeet Sharma
            </h1>
            <img
              className="mb-2 pl-1 lg:pl-2"
              src="/assets/Line 1.svg"
              alt="design-line"
            />
          </div>
          <h1 className="text-[30px] lg:text-[60px] font-Quicksand name-heading">
            Front-end Developer
          </h1>
          <p className="text-[17px] lg:text-[22px] lg:w-[80%] font-light font-Pridi">
            I'm a front-end developer who's fond of learning new technologies.
            passionate about designing and creating products. Currently, I am
            learning Web development.
          </p>
          <div className="btn mt-10">
            <a
              href="https://drive.google.com/file/d/19Q3NLTqAVZJvp3nlcx8n26DmTkOEQj2d/view?usp=sharing"
              target="_blank"
            >
              Resume
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
