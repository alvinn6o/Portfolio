export default function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center text-center px-6"
    >
      <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
        Alvin Ngo
      </h1>
      <p className="mt-4 text-lg md:text-xl text-muted max-w-xl">
        Data Science & Analytics &bull; Incoming MISM-BIDA graduate student at Carnegie Mellon University
      </p>
      <a
        href="#about"
        className="mt-10 text-sm text-accent hover:underline transition-colors"
      >
        Learn more &darr;
      </a>
    </section>
  );
}
