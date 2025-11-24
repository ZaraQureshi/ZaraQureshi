import zara from '../../public/info.json'
import { Header } from './Header';

export const Experience = () => {
    return (
        <div className="min-h-screen w-[100vw] 
            bg-gradient-to-br from-gray-900 to-gray-800 
            p-4 sm:p-4 
            ">
            <div className="m-8">

                <Header />
            </div>
            <div className="flex items-center justify-center">
                <div className="w-full max-w-4xl">
                    <h2 className="text-4xl font-bold mb-6 text-pink-400 text-center">
                        Experience
                    </h2>
                    <span className="  italic 
                                    text-pink-300 
                                    font-medium 
                                    tracking-wide 
                                    bg-gradient-to-r from-pink-600/20 to-purple-600/20 
                                    px-3 py-1 mt-10
                                    rounded-md">“Experience is growth measured in lessons, not years.”</span>
                    {zara.zara.experience.map((exp, index) => (
                        <div key={index} className="text-left m-8 lg:flex md:flex justify-between lg:gap-10 md:gap-10">
                            <div>
                                <h2 className="text-white font-bold text-lg">{exp.companyName}</h2>
                                <h2 className="pb-2 text-gray-300">
                                    {exp.title} | {exp.years}
                                </h2>
                            </div>
                            <div>

                                {/* DESCRIPTIONS */}
                                {exp.description.map((desc, i) => (
                                    <div key={i} className="relative pl-6 pb-3">
                                        <div className="absolute left-2 top-0 h-full w-[2px] bg-gray-600"></div>
                                        <div className="absolute left-1 top-2 w-3 h-3 rounded-full bg-pink-500 border-2 border-white"></div>

                                        <p className="text-gray-300 text-sm ">{desc}</p>
                                    </div>
                                ))}

                                {/* TECH BADGES */}
                                <div className="flex flex-wrap gap-2 mt-2">
                                    {exp.tech.map((tech, i) => (
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

        </div>
    );
};
