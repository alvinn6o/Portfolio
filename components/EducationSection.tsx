import Image from "next/image";
import FadeIn from "./FadeIn";

export default function EducationSection() {
  return (
    <section id="education" className="py-24 px-6 max-w-3xl mx-auto">
      <FadeIn>
        <h2 className="text-3xl font-bold mb-8 text-center">Education</h2>
        <div className="space-y-5">

          <div className="border border-border rounded-lg p-6 bg-card flex gap-5 items-start">
            <div className="shrink-0 w-20 h-20 rounded-lg bg-border overflow-hidden flex items-center justify-center">
              <Image src="/usc_seal.jpeg" alt="USC" width={80} height={80} className="object-cover w-full h-full" />
            </div>
            <div>
              <h3 className="text-xl font-semibold">University of Southern California, Los Angeles</h3>
              <p className="text-accent text-sm mt-1">
                M.S. in Applied Data Science
              </p>
              <p className="text-muted text-sm mt-0">Expected May 2028</p>
            </div>
          </div>

          <div className="border border-border rounded-lg p-6 bg-card flex gap-5 items-start">
            <div className="shrink-0 w-20 h-20 rounded-lg bg-border overflow-hidden flex items-center justify-center">
              <Image src="/csulb_seal.webp" alt="CSULB" width={80} height={80} className="object-cover w-full h-full" />
            </div>
            <div>
              <h3 className="text-xl font-semibold">California State University, Long Beach</h3>
              <p className="text-accent text-sm mt-1">
                B.S. in Computer Science
              </p>
              <p className="text-muted text-sm mt-0">Expected May 2026</p>
              <p className="text-muted text-sm mt-2">4.0 GPA | President&apos;s List</p>
              <p className="text-muted text-sm mt-0">
                Relevant coursework: Machine Learning, Deep Learning, Networks & Distributed Computing, Computer Architecture
              </p>
            </div>
          </div>

          <div className="border border-border rounded-lg p-6 bg-card flex gap-5 items-start">
            <div className="shrink-0 w-20 h-20 rounded-lg bg-border overflow-hidden flex items-center justify-center">
              <Image src="/gwc_seal.png" alt="Golden West College" width={80} height={80} className="object-cover w-full h-full" />
            </div>
            <div>
              <h3 className="text-xl font-semibold">Golden West College, Huntington Beach</h3>
              <p className="text-accent text-sm mt-1">
                A.S. in Computer Science
              </p>
              <p className="text-muted text-sm mt-0">June 2024</p>
              <p className="text-muted text-sm mt-2">
                4.0 GPA | President&apos;s List
              </p>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
