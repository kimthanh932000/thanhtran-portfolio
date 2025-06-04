export interface Industry {
    name: string;
    description: string;
    technologies: string[];
    icon?: string;
  }
  
  export const industries: Industry[] = [
    {
      name: "Education",
      description: "Developed a platform for custom academic writing services, enabling students to order essays, research papers, and assignments online. Implemented secure order management, real-time chat with writers, plagiarism checking, and seamless payment integration.",
      technologies: ["Reactjs", "Nextjs", "Nodejs", "GraphQL"]
    },
  ];