import blogPng from '../assets/wph/blog.png';
import calculatorPng from '../assets/wph/calculator.png';
import indexPng from '../assets/wph/index.png';
import orderPage01Jpg from '../assets/wph/order-page-01.jpg';
import orderPage02Jpg from '../assets/wph/order-page-02.jpg';
import writersPng from '../assets/wph/writers.png';

export interface ProjectImage {
  url: string;
  alt: string;
}

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  techStack: string[];
  images: ProjectImage[];
  featured: boolean;
  githubUrl?: string;
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    id: "wph",
    title: "Writers Per Hour",
    shortDescription: "Academic writing service specializing in custom essays, research papers, and assignments.",
    fullDescription: "Writers Per Hour is a professional academic writing service that helps students with custom essays, research papers, coursework, and assignments. The platform connects clients with expert writers across various subjects, ensuring original, plagiarism-free content delivered on time. With 24/7 support, transparent pricing, and a commitment to confidentiality, Writers Per Hour is trusted by students worldwide for high-quality academic assistance.",
    techStack: ["Next.js", "Node.js", "GraphQL API", "Restful API", "Headless CMS"],
    images: [
      { url: indexPng, alt: "Index Screenshot" },
      { url: blogPng, alt: "Blog Screenshot" },
      { url: calculatorPng, alt: "Calculator Screenshot" },
      { url: orderPage01Jpg, alt: "Order Page 01 Screenshot" },
      { url: orderPage02Jpg, alt: "Order Page 02 Screenshot" },
      { url: writersPng, alt: "Writers Screenshot" },
    ],
    featured: true,
    liveUrl: "https://writersperhour.com"
  },
];