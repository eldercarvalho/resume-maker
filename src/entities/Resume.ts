import { Award } from './Award';
import { Certification } from './Certification';
import { Education } from './Education';
import { Hobbie } from './Hobbie';
import { Language } from './Language';
import { Project } from './Project';
import { Reference } from './Reference';
import { Skill } from './Skill';
import { SocialNetwork } from './SocialNetwork';
import { WorkExperience } from './WorkExperience';

export interface ResumeData {
  id: string;
  isActive: boolean;
  name: string;
  title: string;
  birthDate: string;
  address: string;
  city: string;
  zipCode: string;
  phoneNumber: string;
  website: string;
  email: string;
  socialNetworks: SocialNetwork[];
  objectiveSummary: string;
  workExperience: WorkExperience[];
  education: Education[];
  projects: Project[];
  awards: Award[];
  certifications: Certification[];
  skills: Skill[];
  hobbies: Hobbie[];
  languages: Language[];
  references: Reference[];
}
