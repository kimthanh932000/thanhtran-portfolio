export type TechBrandColor = {
  bg: string;  // Tailwind background color class
  text: string; // Tailwind text color class
  border?: string; // Optional Tailwind border color class
};

export interface Technology {
  name: string;
  category: 'languages' | 'frameworks' | 'databases' | 'tools' | 'cloud';
  proficiency: number;
  brandColor: TechBrandColor;
}


export const technologies: Technology[] = [
  // Languages
  {
    name: 'JavaScript',
    category: 'languages',
    proficiency: 80,
    brandColor: {
      bg: 'bg-yellow-100 dark:bg-yellow-900/20',
      text: 'text-yellow-600 dark:text-yellow-400',
    }
  },
  {
    name: 'TypeScript',
    category: 'languages',
    proficiency: 60,
    brandColor: {
      bg: 'bg-blue-100 dark:bg-blue-900/20',
      text: 'text-blue-600 dark:text-blue-400',
    }
  },

  // Frameworks
  {
    name: 'Next.js',
    category: 'frameworks',
    proficiency: 80,
    brandColor: {
      bg: 'bg-red-100 dark:bg-red-900/20',
      text: 'text-red-600 dark:text-red-400',
    }
  },
  {
    name: 'React.js',
    category: 'frameworks',
    proficiency: 80,
    brandColor: {
      bg: 'bg-blue-100 dark:bg-blue-900/20',
      text: 'text-blue-600 dark:text-blue-400',
    }
  },
  {
    name: 'Vue.js',
    category: 'frameworks',
    proficiency: 65,
    brandColor: {
      bg: 'bg-blue-100 dark:bg-blue-900/20',
      text: 'text-blue-600 dark:text-blue-400',
    }
  },
  {
    name: 'Gastby.js',
    category: 'frameworks',
    proficiency: 80,
    brandColor: {
      bg: 'bg-blue-100 dark:bg-blue-900/20',
      text: 'text-blue-600 dark:text-blue-400',
    }
  },
  {
    name: 'Express.js',
    category: 'frameworks',
    proficiency: 70,
    brandColor: {
      bg: 'bg-gray-100 dark:bg-gray-900/20',
      text: 'text-gray-600 dark:text-gray-400',
    }
  },
  {
    name: 'GraphQL',
    category: 'frameworks',
    proficiency: 80,
    brandColor: {
      bg: 'bg-gray-100 dark:bg-gray-900/20',
      text: 'text-gray-600 dark:text-gray-400',
    }
  },

  // Databases
  {
    name: 'SQL Server',
    category: 'databases',
    proficiency: 65,
    brandColor: {
      bg: 'bg-blue-100 dark:bg-blue-900/20',
      text: 'text-blue-600 dark:text-blue-400',
    }
  },
  {
    name: 'MySQL',
    category: 'databases',
    proficiency: 60,
    brandColor: {
      bg: 'bg-blue-100 dark:bg-blue-900/20',
      text: 'text-blue-600 dark:text-blue-400',
    }
  },

  // Tools
  {
    name: 'Git',
    category: 'tools',
    proficiency: 80,
    brandColor: {
      bg: 'bg-orange-100 dark:bg-orange-900/20',
      text: 'text-orange-600 dark:text-orange-400',
    }
  },
  {
    name: 'VSCode',
    category: 'tools',
    proficiency: 90,
    brandColor: {
      bg: 'bg-blue-100 dark:bg-blue-900/20',
      text: 'text-blue-600 dark:text-blue-400',
    }
  },
  {
    name: 'Visual Studio',
    category: 'tools',
    proficiency: 90,
    brandColor: {
      bg: 'bg-red-100 dark:bg-red-900/20',
      text: 'text-red-600 dark:text-red-400',
    }
  },
  {
    name: 'Contenful CMS',
    category: 'tools',
    proficiency: 80,
    brandColor: {
      bg: 'bg-red-100 dark:bg-red-900/20',
      text: 'text-red-600 dark:text-red-400',
    }
  },
];