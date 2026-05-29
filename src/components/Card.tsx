import zara from "../../public/info.json";
import { Mail, Github, LinkedinIcon, ArrowUpRight, GithubIcon } from "lucide-react";
import { Header } from "./Header";

function Card() {
  return (
    <>
      {/* Injecting a style tag to completely hide scrollbars globally for scroll containers */}
      <style dangerouslySetInnerHTML={{__html: `
        .no-scrollbar::-webkit-scrollbar {
          display: none; /* Safari and Chrome */
        }
        .no-scrollbar {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
      `}} />

      {/* Parent wrapper locks viewport down to exactly 100vh with no external scrollbars */}
      <div className="flex items-center justify-center bg-gray-950 h-screen w-full p-4 overflow-hidden">
        <div
          className="
            w-full
            h-full
            grid
            gap-4
            grid-cols-1
            md:grid-cols-4
            md:grid-rows-[auto_1fr_auto]
          "
        >
          {/* Left Column Container: Houses Profile (top) and Skills (bottom) */}
          <div className="md:col-span-1 md:row-span-3 flex flex-col gap-4 h-full min-h-0">
            
            {/* Profile Card (Fixed Height / Static sizing) */}
            <div className="rounded-xl p-6 shadow-lg bg-gradient-to-br from-gray-900 to-gray-800 flex flex-col items-center text-center shrink-0">
              <span className="aspect-square rounded-full overflow-hidden border-4 border-gray-700 shadow-md w-24 sm:w-28 md:w-32 mb-4">
                <img className="w-full h-full object-cover" src="image.png" alt="Profile" />
              </span>

              <h3 className="text-white text-xl font-semibold mb-2 font-cursive">{zara.zara.name}</h3>
              <p className="text-gray-300 text-sm mb-4">{zara.zara.about}</p>

              <span className="flex items-center text-center p-2 gap-2 mb-4">
                <a
                  href="https://www.linkedin.com/in/zara-qureshi-6720aa1b4/"
                  className="p-2 bg-pink-700/30 rounded-full transition hover:bg-pink-700/50"
                >
                  <LinkedinIcon className="w-6 h-6 text-white" />
                </a>
                <a href="mailto:zaraqureshidev@gmail.com" className="p-2 bg-pink-700/30 rounded-full transition hover:bg-pink-700/50">
                  <Mail className="w-6 h-6 text-white" />
                </a>
                <a href="https://github.com/ZaraQureshi/ZaraQureshi/" className="p-2 bg-pink-700/30 rounded-full transition hover:bg-pink-700/50">
                  <Github className="w-6 h-6 text-white" />
                </a>
              </span>

              <p className="text-gray-300 text-sm leading-relaxed">
                I am passionate about building applications that solve real-world problems with clean UI, scalable APIs, and efficient data models.
              </p>
            </div>

            {/* Skills Card (Added no-scrollbar so it scrolls invisibly if skills overflow) */}
            <div className="rounded-xl p-6 shadow-lg bg-gradient-to-br from-gray-900 to-gray-800 flex flex-col items-center text-center flex-1 min-h-0 overflow-y-auto no-scrollbar">
              <h2 className="text-white text-2xl font-bold mb-3 font-cursive">Skills</h2>
              <span className="flex flex-wrap justify-center gap-2 p-1">
                {zara.zara.skills.map((skill) => (
                  <div key={skill.name} className="badge flex justify-center items-center gap-2 bg-gray-800 text-white p-2 rounded-lg text-sm border border-gray-700">
                    <img
                      src={skill.icon}
                      className="w-5 h-5"
                      alt={skill.name}
                      title={skill.name}
                    />
                    <span>{skill.name}</span>
                  </div>
                ))}
              </span>
            </div>
          </div>

          {/* Right Columns Header Element */}
          <div className="md:col-span-3 text-right rounded-xl p-6 shadow-lg bg-gradient-to-br from-gray-900 to-gray-800 hidden md:flex shrink-0">
            <Header />
          </div>

          {/* Right Columns Center Content: Scrollable layout box with scrollbar hidden via 'no-scrollbar' */}
          <div className="md:col-span-3 h-full min-h-0 overflow-y-auto no-scrollbar flex flex-col gap-6">
            
            {/* Experience Feed Section */}
            <div className="w-full text-left">
              <h2 className="text-2xl font-bold mb-2 text-pink-400 font-cursive">Experience</h2>
              <div className="text-left flex flex-col rounded-xl shadow-lg bg-gradient-to-br from-gray-900 to-gray-800 w-full p-4 sm:p-6 gap-4">
                {zara.zara.experience.map((exp, index) => (
                  <div key={index} className="border-b border-gray-800 last:border-0 pb-4 last:pb-0">
                    <h3 className="text-left font-bold text-white font-cursive text-lg">{exp.companyName}</h3>
                    <h4 className="pb-2 text-left text-pink-300/80 text-sm">
                      {exp.title} | {exp.years}
                    </h4> 

                    {exp.description.map((desc, i) => (
                      <div key={i} className="relative pl-6 pb-2 last:pb-0">
                        <div className="absolute left-2 top-0 h-full w-[2px] bg-gray-800"></div>
                        <div className="absolute left-[5px] top-2 w-2 h-2 rounded-full bg-pink-500"></div>
                        <p className="text-gray-300 text-sm leading-relaxed">{desc}</p>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* Projects Component Feed Grid Section */}
            <div className="w-full text-left">
              <h2 className="text-2xl font-bold mb-2 text-pink-400 font-cursive">Projects</h2>
              <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {zara.zara.projects.map((proj) => (
                  <div
                    key={proj.projectName}
                    className="flex flex-col justify-between h-full shadow-lg bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-5 border border-gray-800/50"
                  >
                    <div>
                      <div className="flex items-center">
                        <span className="text-lg font-semibold text-white font-cursive">{proj.projectName}</span>
                      </div>
                      <p className="text-sm text-gray-300 mt-2 leading-relaxed">{proj.projectDescription}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 my-3 font-mono">Tech: {proj.techStack.join(", ")}</p>
                      <div className="flex justify-between gap-2 mt-2 w-full">
                        <span className="badge w-full bg-gray-800 hover:bg-gray-700 transition rounded-lg p-2 text-center border border-gray-700">
                          <a className="link-btn flex justify-center items-center gap-2 text-xs text-white w-full" href={`${proj.githubLink}`}>
                            <span>Github</span> <GithubIcon className="w-4 h-4" />
                          </a>
                        </span>
                        <span className="badge w-full bg-pink-900/30 hover:bg-pink-900/50 transition rounded-lg p-2 text-center border border-pink-800/30">
                          <a className="link-btn flex justify-center items-center gap-2 text-xs text-pink-300 w-full" href={`${proj.projectLink}`}>
                            <span>Website</span> <ArrowUpRight className="w-4 h-4" />
                          </a>
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Columns Footer Element */}
          <div className="md:col-span-3 rounded-xl p-4 shadow-lg bg-gradient-to-br from-gray-900 to-gray-800 text-gray-400 text-xs flex items-center shrink-0">
            ⚡ Please stay tuned. This dashboard portfolio is actively under development.
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;