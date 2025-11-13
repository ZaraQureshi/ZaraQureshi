import React, { useState, useEffect } from "react";
import zara from '../../public/info.json';
import { Linkedin, Mail, Github, LinkedinIcon, ArrowUpRight } from "lucide-react";
function Card() {
  // Track theme in state (default: light)
  const [theme, setTheme] = useState("light");

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
      <div className="min-h-screen w-screen grid grid-cols-4 grid-rows-[0.5fr_1fr_2fr_2fr_1fr] gap-3 p-6 rounded-2xl shadow-lg">
        <div className="col-span-4 rounded-xl p-6 shadow-lg bg-gradient-to-br from-gray-900 to-gray-800 flex flex-col items-center text-center ">
        </div>
        <div className="row-span-2 rounded-xl p-6 shadow-lg bg-gradient-to-br from-gray-900 to-gray-800 flex flex-col items-center text-center ">
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


        <div className="col-span-3 ">
          <h2 className="text-white text-2xl font-bold mb-2">Experience</h2>
          <p className="text-gray-300 text-sm">This card spans two rows.</p>
        </div>

        <div className="row-span-2   rounded-xl  shadow-lg bg-gradient-to-br from-gray-900 to-gray-800  ">
          <div className="flex flex-col ">
            <h2 className="text-white text-2xl font-bold  pt-4">Experiance</h2>
            {zara.zara.experience.map((exp) => {
              return (
              < div className="overflow-hidden sm:64 md:64 lg:h-86 m-4 pt-0">
                <h2 className="text-left font-bold">{exp.companyName}</h2>
                <h2 className="pb-2 text-left">{exp.title} | {exp.years}</h2>
                {exp.description.map((desc) => (

                  <div className="relative pl-6 ">
                    {/* <!-- Vertical line --> */}
                    <div className="absolute left-2 top-0 h-full w-[2px] bg-gray-500"></div>

                    {/* <!-- Bullet --> */}
                    <div className="absolute left-1 top-2 w-3 h-3 rounded-full bg-pink-500 border-2 border-white"></div>

                    {/* <!-- Content --> */}

                    <div className="ml-4">
                      {/* <h3 className="text-white font-semibold">{desc}</h3> */}
                      <p className="text-gray-400 text-sm"></p>
                      <p>{desc}</p>
                    </div>

                  </div>)
                )}</div>
              )
            })
            }

            <div className="flex flex-row justify-between w-full px-4 py-2 rounded-lg bg-pink-500 hover:bg-pink-700 text-white font-medium mt-0">
              Know More<ArrowUpRight />
            </div>
          </div>
        </div>

        <div className="row-span-2 rounded-xl p-6 shadow-lg bg-gradient-to-br from-gray-900 to-gray-800 ">
          <h2 className="text-white text-2xl font-semibold mb-2">Card D</h2>
          <p className="text-gray-300 text-sm">Bottom-middle card.</p>
        </div>
        <div className=" row-span-2 rounded-xl p-6 shadow-lg bg-gradient-to-br from-gray-900 to-gray-800  ">
          <h2 className="text-white text-2xl font-semibold mb-2">Card D</h2>
          <p className="text-gray-300 text-sm">Bottom-middle card.</p>
        </div>
        {/* <div className="rounded-xl p-6 shadow-lg bg-gradient-to-br from-gray-900 to-gray-800  ">
          <h2 className="text-white text-2xl font-semibold mb-2">Card C</h2>
          <p className="text-gray-300 text-sm">Bottom-left card.</p>
        </div>

        <div className="rounded-xl p-6 shadow-lg bg-gradient-to-br from-gray-900 to-gray-800 ">
          <h2 className="text-white text-2xl font-semibold mb-2">Card D</h2>
          <p className="text-gray-300 text-sm">Bottom-middle card.</p>
        </div>
        <div className="rounded-xl p-6 shadow-lg bg-gradient-to-br from-gray-900 to-gray-800  ">
          <h2 className="text-white text-2xl font-semibold mb-2">Card D</h2>
          <p className="text-gray-300 text-sm">Bottom-middle card.</p>
        </div> */}
        <div className="row-span-2 rounded-xl p-6 shadow-lg bg-gradient-to-br from-gray-900 to-gray-800 flex flex-col items-center text-center ">

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
        <div className="col-span-3  ">
          <h2 className="text-white text-2xl font-semibold mb-2">Card C</h2>
          <p className="text-gray-300 text-sm">Bottom-left card.</p>
        </div>



      </div>
      {/* </div> */}
      {/* <div className='bg-gray-950'>
      <div className="rounded-xl p-6 shadow-lg bg-gradient-to-br from-gray-900 to-gray-800  text-white hover:scale-105 transition-transform duration-300">
  <h2 className="text-xl font-semibold">Professional Card</h2>
  <p className="text-gray-300 text-sm">Minimal gradient with subtle pink accent.</p>
</div> */}

      {/* </div> */}
    </div>

  );
}

export default Card;
