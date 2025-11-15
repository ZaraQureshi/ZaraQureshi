import React, { useState, useEffect } from "react";
import zara from '../../public/info.json';
import { Linkedin, Mail, Github, LinkedinIcon, ArrowUpRight } from "lucide-react";
function Card() {
  // Track theme in state (default: light)
  const [theme, setTheme] = useState("light");
  const buttonColors = [
    "border-pink-800/30 from-pink-900/30 to-pink-700/30 hover:bg-pink-900/30",
    "border-blue-500 from-pink-900 to-pink-700 hover:bg-blue-500",
    "border-green-500 bg-green-500/20 hover:bg-green-500",

  ];
  const getColorFromString = (str: any) => {
    console.log(str)
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      console.log("hash before:", hash)
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
      console.log("hash after:", hash)

    }
    return buttonColors[Math.abs(hash) % buttonColors.length];
  };
  // On mount, check if user had previously chosen a theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
    }
  }, []);

  // Handle toggle
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme); // persist across refresh
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <div className=" flex items-center justify-center bg-gray-950 ">

      {/* <div className="min-h-screen bg-0 flex items-center justify-center p-10"> */}
      <div className="min-h-screen w-screen 
        grid grid-cols-1 
        md:grid-cols-2 
        lg:grid-cols-4 
        grid-rows-auto
        gap-4 p-4 sm:p-6 grid-rows-[0.5fr_2fr_1fr_1fr_0.7fr] gap-3 p-6 rounded-2xl shadow-lg">
        <div className="row-span-3 rounded-xl p-6 shadow-lg bg-gradient-to-br from-gray-900 to-gray-800 flex flex-col items-center text-center order-1 lg:row-span-3">
          <span className="aspect-square rounded-full overflow-hidden border-4 border-gray-700 shadow-md
          w-24 sm:w-28 md:w-32 lg:w-36 xl:w-40 mb-4">
            <img className="w-full h-full object-cover" src="vite.svg" />
          </span>
          <h3 className="text-white text-xl font-semibold mb-2">{zara.zara.name}</h3>
          <p className="text-gray-300 text-sm">{zara.zara.about}

          </p>
          <span className="flex items-center text-center p-2">
            <LinkedinIcon className="w-8 h-8 p-1  text-white " /><Mail className="w-8 h-8 p-1  text-white " /><Github className="w-8 h-8 p-1  text-white" />
          </span>
        </div>
        <div className="col-span-3 rounded-xl p-6 shadow-lg bg-gradient-to-br from-gray-900 to-gray-800 flex flex-col items-center text-center ">
        </div>


        {/* <div className="col-span-3 ">
          <h2 className="text-white text-2xl font-bold mb-2">Experience</h2>
          <p className="text-gray-300 text-sm">a react and front end developer who likes to build projects that solves real time problems using react and nodejs and also like to explore different database technologies. have worked with different aspects ofreact like Redux, Redux Toolkit, React Hooks, React Router</p>
        </div> */}

        <div className="row-span-3  min-h-auto order-3
  lg:row-span-3">
          <h2 className="text-white text-2xl font-bold  pt-4">Experiance</h2>
          <div className="text-left flex flex-col rounded-xl shadow-lg bg-gradient-to-br from-gray-900 to-gray-800 w-full p-4 sm:p-6">
            {zara.zara.experience.map((exp, index) => {
              return (
                < div key={index} className="">
                  <h2 className="text-left font-bold">{exp.companyName}</h2>
                  <h2 className="pb-2 text-left">{exp.title} | {exp.years}</h2>
                  {exp.description.map((desc) => (

                    <div className="relative pl-6 ">
                      {/* <!-- Vertical line --> */}
                      <div className="absolute left-2 top-0 h-full w-[2px] bg-gray-500"></div>

                      {/* <!-- Bullet --> */}
                      <div className="absolute left-1 top-2 w-3 h-3 rounded-full bg-pink-500 border-2 border-white"></div>

                      {/* <!-- Content --> */}

                      <div className="max-h-20 overflow-hidden">
                        <p className="text-gray-300 text-sm line-clamp-3">
                          {desc}
                        </p>
                      </div>

                    </div>)
                  )}</div>
              )
            })
            }

            <div className="flex flex-row justify-between w-full px-4 py-2 rounded-lg border border-pink-500 bg-pink-500/30 hover:bg-pink-700 text-white font-medium mt-0">
              Know More<ArrowUpRight />
            </div>
          </div>
        </div>

        <div className="row-span-3 col-span-2 mb-6">
          <h2 className="text-white text-2xl font-semibold mb-2">Card D</h2>

          <div className="
            grid 
             
            gap-4 
            sm:grid-cols-2 
            md:grid-cols-2 
            lg:grid-cols-2 
            lg:grid-rows-2 
            items-stretch
            w-full
          ">
            {zara.zara.projects.slice(0, 3).map((proj) => (
              <div
                key={proj.projectName}
                className="
        flex flex-col
        h-full
        shadow-lg
        bg-gradient-to-br from-gray-900 to-gray-800
        rounded-xl
        p-6
      "
              >
                {/* TEXT CONTENT */}
                <div>
                  <p className="text-lg font-semibold text-white">
                    {proj.projectName}
                  </p>
                  <p className="text-sm text-gray-300 mt-2">
                    {proj.projectDescription}
                  </p>
                  <p className="text-xs text-gray-400 mt-2">
                    {proj.techStack}
                  </p>
                </div>

                {/* BUTTON AT BOTTOM */}
                <div
                  className="
          mt-auto
          px-4 py-2
          rounded-lg
          text-white font-medium
          bg-gradient-to-r from-pink-900/40 to-pink-700/40
          hover:bg-pink-900/30
          flex items-center justify-between
          transition
        "
                >
                  Know More <ArrowUpRight />
                </div>
              </div>
            ))}

            {/* 4TH SLOT — “See All Projects” */}
            <button
              className="
      flex flex-col items-center justify-center
      h-full shadow-lg
      rounded-xl border border-pink-500/40
      bg-pink-900/10 hover:bg-pink-900/20
      text-white font-semibold
      text-center p-6
      transition
    "
            >
              Show All Projects
            </button>
          </div>


        </div>
        <div className="row-span-2 rounded-xl p-6 shadow-lg bg-gradient-to-br from-gray-900 to-gray-800 flex flex-col items-center text-center order-5
  lg:row-span-2 ">

          <h2 className="text-white text-2xl font-bold mb-2">Skills</h2>

          <span className="flex items-center text-center p-2">
            <img src="https://img.icons8.com/officel/80/react.png" className="w-8 h-8 p-1  text-white " />
            <img src="https://img.icons8.com/?size=100&id=74402&format=png&color=000000" className="w-8 h-8 p-1 " />
            <img src="https://img.icons8.com/?size=100&id=13406&format=png&color=000000" className="w-8 h-8 p-1  text-white" />
            <img src="https://img.icons8.com/?size=100&id=k0mhEXozIpG1&format=png&color=000000" className="w-8 h-8 p-1 " />
            <img src="https://img.icons8.com/?size=100&id=33039&format=png&color=000000" className="w-8 h-8 p-1 " />
            <img src="https://img.icons8.com/?size=100&id=1BC75jFEBED6&format=png&color=000000" className="w-8 h-8 p-1 " />
            <img src="https://img.icons8.com/?size=100&id=54087&format=png&color=000000" className="w-8 h-8 p-1 " />
          </span>
        </div>
        {/* <div className="col-span-3  "> */}
        <div className="col-span-3 rounded-xl p-6 shadow-lg bg-gradient-to-br from-gray-900 to-gray-800 flex flex-col items-center text-center ">
        </div>
        {/* </div> */}



      </div>
      {/* </div> */}
      {/* <div className='bg-gray-950'>
      <div className="rounded-xl p-6 shadow-lg bg-gradient-to-br from-gray-900 to-gray-800  text-white hover:scale-105 transition-transform duration-300">
  <h2 className="text-xl font-semibold">Professional Card</h2>
  <p className="text-gray-300 text-sm">Minimal gradient with subtle pink accent.</p>
</div> */}

      {/* </div> */}
    </div >

  );
}

export default Card;
