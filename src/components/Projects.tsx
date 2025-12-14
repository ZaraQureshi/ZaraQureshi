import { ArrowUpRight, Github } from 'lucide-react'
import zara from '../../public/info.json'
import { Header } from './Header'
export const Projects = () => {
    console.log("projects")
    return (
        <>

            <div className="min-h-screen w-[100vw] 
            bg-gradient-to-br from-gray-900 to-gray-800 
            p-4 sm:p-4 
            ">
                <div className="m-3 lg:m-8">

                <Header />
                </div>
                <div className="flex items-center justify-center lg:m-10">
                    <div className="w-full max-w-4xl ">
                        <h2 className="text-4xl font-bold mb-6 text-pink-400 text-center">
                            Projects
                        </h2>
                        <span className="  italic 
                                    text-pink-300 
                                    font-medium 
                                    tracking-wide 
                                    bg-gradient-to-r from-pink-600/20 to-purple-600/20 
                                    px-3 py-1 mt-10
                                    rounded-md">“Built with curiosity. Improved with persistence.”</span>
                        {zara.zara.projects.slice(0, 3).map((proj) => (
                            <div
                                key={proj.projectName}
                                className="text-left h-full lg:m-10 m-5"
                            >
                                <div className="flex items-center"><span className="text-lg font-semibold text-white">{proj.projectName}</span><a className="text-lg font-semibold text-white pl-2 o" href={`${proj.githubLink}`}><Github className="text-pink-500 h-5" /></a>|<a className="text-lg font-semibold text-white" href={`${proj.projectLink}`}><ArrowUpRight className="text-pink-500 h-5" /></a></div>
                                <div>
                                    <p className="text-sm text-gray-300 mt-2 text-left">{proj.projectDescription}</p>
                                    <div className="flex flex-wrap gap-2 mt-2">
                                        {proj.techStack.map((tech, i) => (
                                            <span
                                                key={i}
                                                className="badge"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                            </div>
                        ))}
                    </div>
                </div>







                {/* </div> */}
            </div>
        </>
    )
}