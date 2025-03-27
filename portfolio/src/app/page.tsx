import Image from "next/image";
import Card from "./components/Card";
import { title } from "process";
import { About, CardDetails } from "./model";
import "./styles.css";
import info from "../info.json";
import AboutUser from "./components/About";
import WorkExperience from "./components/WorkExperience";
export default function Home() {
  const projects: CardDetails[] = info.zara.projects;
  const about:About = info.zara.about;
  projects.forEach((prj) => {
    console.log(prj.techStack);
  });

  return (
    <div className="">
      <main className="main-container">
        <div className="about-container">
          <AboutUser params={about}/>
        </div>
        <div className="work-experience-container">
          <WorkExperience />
        </div>
        <div className="projects-container">
          {projects.map((project: CardDetails) => {
            return <Card key={project.projectName} params={project}></Card>;
          })}
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer>
    </div>
  );
}
