import React from 'react'

const About = () => {
  return (
    <div name="About" className="w-full h-screen text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1028] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div className=""></div>
        </div>
        <div className="max-w-[1028] w-full grid sm:grid-cols-2 pap-8 px-4">
          <div className="sm:text-right text-4xl">
            <p>
              This is Ava, Welcome to my Webpage.
            </p>
          </div>
          <div className="pl-4 pt-md-5">
            Hi, I'm Ava 👩‍💻 — this is my personal website where I share my coding
            projects, my skills, and a little about me!
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;