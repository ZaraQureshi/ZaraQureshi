export interface CardDetails {
  projectName: string;
  projectDescription: string;
  githubLink: string;
  projectLink: string;
  techStack: string[];
}

export interface Link {
  name: string;
  link: string;
}

export interface About {
  description: string;
  links:Link[];
}