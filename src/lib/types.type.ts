export class Publication {
  date: Date;
  title: string;
  conference: string;
  notes: string[];
}

export class Project {
  date: Date;
  name: string;
  title: string;
  typeOfProject: string;
  description: string;
  hidden: boolean;
  links: {
    github: string;
    production: string;
  };
  pin?: boolean;
  tags: string[];
}
