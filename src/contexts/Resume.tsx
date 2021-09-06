import { generateResumeData } from '@/support/generateResumeData';
import { useCallback, useContext, useState, createContext, useEffect } from 'react';

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

interface ResumeContextData {
  state: ResumeData;
  updateState(state: ResumeData): void;
}

export const ResumeContext = createContext<ResumeContextData>({} as ResumeContextData);

const emptyResume = generateResumeData('empty');

export const ResumeProvider: React.FC = ({ children }) => {
  const [resumes, setResumes] = useState(() => {
    const savedResumesString = localStorage.getItem('@ResumeMaker:resumes');

    if (savedResumesString) {
      return JSON.parse(savedResumesString) as ResumeData[];
    }

    return [emptyResume];
  });
  const [state, setState] = useState(() => {
    const savedResumesString = localStorage.getItem('@ResumeMaker:resumes');

    if (savedResumesString) {
      const savedResumes = JSON.parse(savedResumesString) as ResumeData[];
      return savedResumes.find((resume) => resume.isActive) || emptyResume;
    }

    return emptyResume;
  });

  useEffect(() => {
    setResumes(
      resumes.map((resume) => {
        if (resume.id === state.id) {
          state.isActive = true;
          return state;
        }
        resume.isActive = false;
        return resume;
      }),
    );
  }, [state]);

  useEffect(() => {
    localStorage.setItem('@ResumeMaker:resumes', JSON.stringify(resumes));
  }, [resumes]);

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
