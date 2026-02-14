export interface Experience {
  title: string;
  company: string;
  date: string;
  description: string;
}

export const experiences: Experience[] = [
  {
    title: "Technology Committee",
    company: "CSULB Association for Information Systems",
    date: "Dec 2025 - Present",
    description: "Oversaw DataCamp and administered technical roadmap for 90+ members with pathways in SQL, Tableau, and Python. Planned and designed three technical workshops in data cleaning, analysis, and visualization to technically prepare members for CSULB Datathon 2026."
  },
  
  {
    title: "Instructional Student Assistant",
    company: "California State University, Long Beach",
    date: "Sept 2025 - Present",
    description:
      "Provided support for ~150 students in CECS328 Algorithms, including technical feedback on data structures, dynamic programming, and complexity analysis. Restructured course material in collaboration with the professor to encourage algorithmic trade-off evaluations and enhance student learning outcomes.",
  },

  {
    title: "Data Science Intern",
    company: "Association for Information Systems CSULB",
    date: "Sept 2025 - Dec 2025",
    description:
      "Used Microsoft Fabric and PySpark to integrate 50,000+ Zillow listings and rent indices through automated ingestion, transformation, and lakehouse modeling. Constructed regression model for housing predictions.",
  },

  {
    title: "Quantitative and Qualitative Analyst Extern",
    company: "Beats by Dre",
    date: "Mar 2024 - Jun 2024",
    description:
      "Visualized actionable intelligence through dashboards, translating complex qualitative data into clear metrics.",
  },

];
