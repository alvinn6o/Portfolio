export interface Project {
  name: string;
  technologies: string[];
  description: string;
  github: string;
}

export const projects: Project[] = [
  {
    name: "CineMatch",
    technologies: ["Python", "React", "Next.js", "Scikit-learn"],
    description:
      "A full-stack web application that delivers personalized, explainable movie recommendations and interactive viewing analytics powered by content-based machine learning.",
    github: "https://github.com/alvinn6o/CineMatch",
  },
];
