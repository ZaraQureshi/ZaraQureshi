import Image from "next/image";
import Card from "./components/Card";
import { title } from "process";
import { CardDetails } from "./model";
import "./styles.css";
import info from "../info.json";
export default function Home() {
  const projects: CardDetails[] = info.zara.projects;
  projects.forEach((prj) => {
    console.log(prj.techStack);
  });

  return (
    <div className="">
      <main className="main-container">
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
