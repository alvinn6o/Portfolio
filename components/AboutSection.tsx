import FadeIn from "./FadeIn";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-6 max-w-3xl mx-auto">
      <FadeIn>
        <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
        <p className="text-muted leading-relaxed">
          Hello! I am currently an undergraduate student studying Computer Science at California State University, Long Beach.
          In Fall 2026, I intend to pursue my MS in Applied Data Science at University of Southern California, Los Angeles. 
          I have a passion for data science and analytics, and I hope to ultimately become a data scientist to build
          predictive models and data pipelines. I am always looking for new challenges and opportunities to continue growing.
        </p>
      </FadeIn>
    </section>
  );
}
