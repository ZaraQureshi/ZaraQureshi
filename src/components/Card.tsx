import { Link } from "react-router-dom";
import zara from "../../public/info.json";
import { Mail, Github, LinkedinIcon, ArrowUpRight, GithubIcon } from "lucide-react";
import { Header } from "./Header";

function Card() {
  // const [theme, setTheme] = useState("light");

  // useEffect(() => {
  //   const savedTheme = localStorage.getItem("theme");
  //   if (savedTheme) {
  //     // setTheme(savedTheme);
  //     document.documentElement.classList.toggle("dark", savedTheme === "dark");
  //   }
  // }, []);

  // const toggleTheme = () => {
  //   const newTheme = theme === "light" ? "dark" : "light";
  //   setTheme(newTheme);
  //   localStorage.setItem("theme", newTheme);
  //   document.documentElement.classList.toggle("dark", newTheme === "dark");
  // };

  return (
    <div className="flex items-center justify-center bg-gray-950 min-h-screen overflow-hidden p-4 w-full">
      <div
        className="
          w-full
          
          grid
          gap-4
          grid-cols-1
          md:grid-cols-4
          grid-rows-auto
          md:grid-rows-[auto_1fr_auto]
        "
      >
        {/* Profile */}
        <div className="md:row-span-3 rounded-xl p-6 shadow-lg bg-gradient-to-br from-gray-900 to-gray-800 flex flex-col items-center text-center md:sticky md:top-4 md:h-auto md:self-start">
          {/* <div className=""> */}

          <span className="aspect-square rounded-full overflow-hidden border-4 border-gray-700 shadow-md w-24 sm:w-28 md:w-32 lg:w-36 xl:w-40 mb-4">
            <img className="w-full h-full object-cover" src="image.png" />
          </span>

          <h3 className="text-white text-xl font-semibold mb-2 font-cursive">{zara.zara.name}</h3>
          <p className="text-gray-300 text-sm">{zara.zara.about}</p>

          <span className="flex items-center text-center p-2 gap-2">
            <a href="https://www.linkedin.com/in/zara-qureshi-6720aa1b4/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BF8wYkfwZQeyVmvH9N4ro5w%3D%3D" className="p-2 bg-pink-700/30 rounded-full transition"><LinkedinIcon className="w-7 h-7 text-white" /></a>

            <a href="mailto:zaraqureshidev@gmail.com" className="p-2 bg-pink-700/30 rounded-full transition"><Mail className="w-7 h-7 text-white" /></a>
            <a href="https://github.com/ZaraQureshi/ZaraQureshi/" className="p-2 bg-pink-700/30 rounded-full transition"><Github className="w-7 h-7 text-white" /></a>
          </span>
          <p className="text-gray-300">
            I am passionate about building applications that solve real-world problems with clean UI, scalable APIs, and efficient data models.

          </p>
          {/* <p className="pt-4 text-gray-300">
            What I’m Exploring Now
            Building scalable backend systems with Hono + Node.js

            Working with LLMs & AI automation
          </p> */}
        </div>

        {/* Empty Space - Can be Banner or Summary */}
        <div className="flex justify-end md:col-span-3 rounded-xl p-6 shadow-lg bg-gradient-to-br from-gray-900 to-gray-800 hidden md:flex md:sticky md:top-4 md:self-start z-10">

          <Header />
        </div>
        <div className="md:col-span-3 md:row-span-1 md:overflow-y-auto md:h-[calc(100vh-8.5rem)] pr-1">
          {/* Experience */}
          <div className="md:col-span-3 w-full text-left md:top-4">
            <h2 className="text-2xl font-bold mb-2 text-pink-400 font-cursive">Experience</h2>

            <div className="text-left flex flex-col rounded-xl shadow-lg bg-gradient-to-br from-gray-900 to-gray-800 w-full p-4 sm:p-6">
              {zara.zara.experience.map((exp, index) => (
                <div key={index} className="mb-4">
                  <h2 className="text-left font-bold text-white">{exp.companyName}</h2>
                  <h2 className="pb-2 text-left text-white">
                    {exp.title} | {exp.years}
                  </h2>

                  {exp.description.map((desc, i) => (
                    <div key={i} className="relative pl-6 pb-3">
                      <div className="absolute left-2 top-0 h-full w-[2px] bg-gray-500"></div>
                      <div className="absolute left-1 top-2 w-3 h-3 rounded-full bg-pink-500 border-2 border-white"></div>
                      <p className="text-gray-300 text-sm line-clamp-3">{desc}</p>
                    </div>
                  ))}
                </div>
              ))}

              {/* <Link to="/experience" className="link-btn flex items-center justify-between w-full px-4 py-2 rounded-lg border border-pink-500 bg-pink-500/30 hover:bg-pink-900/30 text-white font-medium mt-0 cursor-pointer">
              Know More <ArrowUpRight className="link-btn" />
            </Link> */}
            </div>
          </div>

          {/* Projects */}
          <div className="md:col-span-3 text-left flex flex-col justify-evenly ">
            <h2 className="text-2xl font-bold mb-2 text-pink-400 font-cursive">Projects</h2>

            <div className="grid auto-rows-[1fr] gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-3 flex-1">
              {zara.zara.projects.map((proj) => (
                <div
                  key={proj.projectName}
                  className="flex flex-col justify-between h-full shadow-lg bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6"
                >
                  <div>
                    <div className="flex items-center"><span className="text-lg font-semibold text-white">{proj.projectName}</span></div>
                    <p className="text-sm text-gray-300 mt-2">{proj.projectDescription}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 my-2">Tech: {proj.techStack.join(", ")}</p>
                    <div className="flex justify-between gap-1 mt-4 w-auto">
                      <span className="badge w-full">
                        <a className="link-btn flex justify-between items-center w-full" text-md href={`${proj.githubLink}`}><span>Github</span> <GithubIcon className="" /></a>
                      </span>
                      <span className="badge w-full">
                        <a className="link-btn flex justify-between items-center w-full" href={`${proj.projectLink}`}>Website <ArrowUpRight /></a>
                      </span>
                    </div>


                  </div>
                </div>
              ))}


            </div>
            {/* <div className="flex items-center justify-center shadow-lg rounded-xl border border-pink-500/40 bg-gradient-to-br from-pink-900/30 to-pink-800/30 hover:bg-pink-900/20 text-white font-semibold text-center px-auto py-5 mt-4 transition">
            <Link className="link-btn" to="/projects">Show All Projects</Link>
          </div> */}
          </div>
        </div>
        {/* Skills */}
        <div className="md:row-span-2 rounded-xl p-6 shadow-lg bg-gradient-to-br from-gray-900 to-gray-800 flex flex-col items-center text-center md:sticky md:bottom-4 md:self-end z-10">
          <h2 className="text-white text-2xl font-bold mb-2 font-cursive">Skills</h2>

          <span className="flex flex-wrap justify-center gap-3 p-2">
            {zara.zara.skills.map((skill, i) => (
              <div className="badge flex justify-center items-center">
                <img
                  key={skill.name}
                  src={skill.icon}
                  className="w-6"
                  alt={skill.name}
                  title={skill.name}
                /> <span>{skill.name}</span>
              </div>
            ))}

          </span>
        </div>

        {/* Bottom Space */}
        <div className="md:col-span-3 rounded-xl p-6 shadow-lg bg-gradient-to-br from-gray-900 to-gray-800  flex md:sticky md:bottom-0 md:self-end z-10">Please stay tuned. This work is under construction.</div>
      </div>
    </div>
  );
}

export default Card;
