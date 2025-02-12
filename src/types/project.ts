type Project = {
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  links: {
    github?: string;
    demo?: string;
  };
};

export default Project;
