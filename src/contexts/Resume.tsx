import { generatefakeData } from '@/support/fakeData';
import { useCallback, useContext, useState, createContext } from 'react';

export interface SocialNetwork {
  id: string;
  name: string;
  username: string;
  url: string;
}

export interface WorkExperience {
  id: string;
  company: string;
  position: string;
  website: string;
  startDate: string;
  endDate: string;
  summary: string;
}

export interface Education {
  id: string;
  institution: string;
  fieldOfStudy: string;
  typeOfDegree: string;
  gpa: string;
  startDate: string;
  endDate: string;
  summary: string;
}

export interface Project {
  id: string;
  title: string;
  website: string;
  startDate: string;
  endDate: string;
  summary: string;
}

export interface Award {
  id: string;
  title: string;
  awarder: string;
  date: string;
  summary: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  summary: string;
}

export interface Skill {
  id: string;
  name: string;
  level: string;
}

export interface Hobbie {
  id: string;
  name: string;
}

export interface Language {
  id: string;
  name: string;
  fluency: string;
}

export interface Reference {
  id: string;
  name: string;
  position: string;
  phoneNumber: string;
  email: string;
  summary: string;
}

export interface ResumeData {
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

interface ResumeContextData {
  state: ResumeData;
  updateState(state: ResumeData): void;
}

export const ResumeContext = createContext<ResumeContextData>({} as ResumeContextData);

export const ResumeProvider: React.FC = ({ children }) => {
  const [state, setState] = useState(generatefakeData());
  // const [state, setState] = useState({
  //   name: '',
  //   title: '',
  //   birthDate: '',
  //   address: '',
  //   city: '',
  //   zipCode: '',
  //   phoneNumber: '',
  //   website: '',
  //   email: '',
  //   socialNetworks: [],
  //   objectiveSummary: '',
  //   workExperience: [],
  //   education: [],
  //   projects: [],
  //   awards: [],
  //   certifications: [],
  //   skills: [],
  //   hobbies: [],
  //   languages: [],
  //   references: [],
  // } as ResumeData);

  const updateState = useCallback((stateParam: ResumeData) => {
    setState(stateParam);
  }, []);

  return <ResumeContext.Provider value={{ state, updateState }}>{children}</ResumeContext.Provider>;
};

export const useResume = () => {
  const context = useContext(ResumeContext);

  if (!context) {
    throw new Error('This component should be used whithin ResumeProvider');
  }

  return context;
};
