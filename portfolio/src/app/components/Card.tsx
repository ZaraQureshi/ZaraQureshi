import { CardDetails } from "../model";
import "../styles.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

interface CardProps {
  params: CardDetails;
}
const Card = ({ params }: CardProps) => {
  return (
    <div className="card">
      <div className="card-title">
        <span>{params.projectName}</span>
        <a href={params.githubLink} className="card-link" target={params.githubLink} rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} /> 
          </a>
          <a href={params.projectLink} className="card-link" target={params.projectLink} rel="noopener noreferrer">
            <FontAwesomeIcon icon={faExternalLinkAlt} /> {" "}
          </a>
      </div>
      <p className="card-description">{params.projectDescription}</p>
      <div className="card-techstack">
        {params.techStack.map((tech: string) => {
          return <span key={tech}>{tech}</span>;
        })}
      </div>
    </div>
  );
};
export default Card;
