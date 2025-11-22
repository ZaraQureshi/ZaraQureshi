import zara from '../../public/info.json'
export const Experience=()=>{
    return (
        <div>
          <h2 className="text-2xl font-bold mb-2 text-pink-400">Experience</h2>

          <div className="text-left flex flex-col rounded-xl shadow-lg bg-gradient-to-br from-gray-900 to-gray-800 w-full p-4 sm:p-6">
            {zara.zara.experience.map((exp, index) => (
              <div key={index} className="mb-4">
                <h2 className="text-left font-bold">{exp.companyName}</h2>
                <h2 className="pb-2 text-left">
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

            
          </div>
        </div>
    )
}