import { projects } from "@/data/projects";
import FadeIn from "./FadeIn";

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-6 max-w-4xl mx-auto">
      <FadeIn>
        <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>
      </FadeIn>

      <div className="grid md:grid-cols-2 lg:grid-cols-1 gap-6">
        {projects.map((project) => (
          <FadeIn key={project.name}>
            <div className="border border-border rounded-lg p-6 bg-card hover:border-accent transition-colors h-full flex flex-col">
              <h3 className="text-xl font-bold">{project.name}</h3>
              <div className="flex flex-wrap gap-2 mt-3">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2.5 py-1 rounded-full bg-accent/15 text-accent"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <p className="text-muted text-sm mt-3 leading-relaxed flex-1">
                {project.description}
              </p>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4 text-sm text-accent hover:underline"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                View on GitHub
              </a>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
