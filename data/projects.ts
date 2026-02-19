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
    {
    name: "Live E-Commerce Simulator",
    technologies: ["Python", "Kafka", "Redis", "Faust", "MLflow", "Grafana", "Docker", "XGBoost", "FastAPI", "PostgreSQL"],
    description:
      "An end-to-end live e-commerce intelligence simulator encompassing data engineering, data science, and ML engineering (MLOps) to identify high-intent customers.",
    github: "https://github.com/alvinn6o/Live-E-Commerce-Session-Intelligence-Simulator",
  },
];
