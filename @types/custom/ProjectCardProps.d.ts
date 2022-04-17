export interface ProjectCardProps {
  name: string;
  preview: {
    static: string;
    gif: string;
  };
  description: string;
  bulletPoints: string[];
  technologies: string[];
  links?: {
    github: string;
  };
}
