import zara from '../../public/info.json'
export const Projects=()=>{
    console.log("projects")
    return(
        <div>
            <h2 className="text-2xl font-bold mb-2 text-pink-400">Projects</h2>

          <div className="">
            {zara.zara.projects.slice(0, 3).map((proj) => (
              <div
                key={proj.projectName}
                className="flex flex-col justify-between h-full shadow-lg bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6"
              >
                <div>
                  <p className="text-lg font-semibold text-white">{proj.projectName}</p>
                  <p className="text-sm text-gray-300 mt-2">{proj.projectDescription}</p>
                </div><div>
                  <p className="text-xs text-gray-400 my-2">Tech: {proj.techStack.join(", ")}</p>

                 
                </div>
              </div>
            ))}


          </div>
        </div>
    )
}