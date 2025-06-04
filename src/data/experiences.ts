export interface WorkExperience {
    id: number;
    position: string;
    company: string;
    timeFrame: string;
    technologies: string[];
    description?: string;
}

export const experiences: WorkExperience[] = [
    {
      id: 1,
      position: "Mid-level Frontend Developer",
      company: "KAMORA Digital Studio",
      timeFrame: "2020 - 2024",
      technologies: ["ReactJS", "NextJS", "NodeJS", "GraphQL"],
      description: "Served as a core frontend developer for the company’s main product, driving continuous improvements in performance, scalability, and user experience. Collaborated closely with cross-functional teams to deliver new features, maintain long-term code quality, and ensure the platform’s reliability for thousands of users."
    }
  ];