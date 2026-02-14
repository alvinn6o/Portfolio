"use client";

import { useState } from "react";
import { experiences } from "@/data/experience";
import FadeIn from "./FadeIn";

export default function ExperienceSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="experience" className="py-24 px-6 max-w-4xl mx-auto">
      <FadeIn>
        <h2 className="text-3xl font-bold mb-12 text-center">Experience</h2>
      </FadeIn>

      <div className="relative">
        {/* Center line */}
        <div className="absolute left-1/2 -translate-x-0.5 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

        {experiences.map((exp, i) => {
          const isLeft = i % 2 === 0;
          return (
            <FadeIn key={i}>
              <div
                className="relative mb-12 md:mb-16"
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Dot on the line */}
                <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-4 w-3 h-3 rounded-full bg-accent z-10" />

                {/* Card */}
                <div
                  className={`md:w-[45%] ${
                    isLeft ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
                  }`}
                >
                  <div className="border border-border rounded-lg p-5 bg-card hover:border-accent transition-colors cursor-default">
                    <h3 className="text-lg font-semibold">{exp.title}</h3>
                    <p className="text-accent text-sm">{exp.company}</p>
                    <p className="text-muted text-xs mt-1">{exp.date}</p>

                    {/* Description on hover */}
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        hoveredIndex === i
                          ? "max-h-40 opacity-100 mt-3"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <p className="text-muted text-sm leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          );
        })}
      </div>
    </section>
  );
}
