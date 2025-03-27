import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { About, Link } from "../model";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons/faEnvelope";
import "../styles.css";
interface AboutProps {
  params: About;
}
interface LinkProps {
  link: Link;
}
const AboutUser = ({ params }: AboutProps) => {
  const linkCondition = ({ link }: LinkProps) => {
    if (link.name === "LinkedIn") {
      return <FontAwesomeIcon icon={faLinkedin} />;
    } else if (link.name === "GitHub") {
      return <FontAwesomeIcon icon={faGithub} />;
    } else {
      return <FontAwesomeIcon icon={faEnvelope} />;
    }
  };
  return (
    <div className="about">
      <div className="gradient-bg">htdghd</div> 
      <p className="about-title">Zara Qureshi</p>
      <p>{params.description}</p>
      <div className="about-links-container">
        {params.links.map((link: Link) => {
          return (
            <a
              href={link.link}
              className="about-link"
              target={link.link}
              rel="noopener noreferrer"
            >
              {linkCondition({ link })}
            </a>
          );
        })}
      </div>
    </div>
  );
};
export default AboutUser;
