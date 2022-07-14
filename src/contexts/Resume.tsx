import { ResumeData } from '@/entities';
import { generateResumeData } from '@/support/generateResumeData';
import { useCallback, useContext, useState, createContext, useEffect, useMemo } from 'react';

interface ResumeContextData {
  state: ResumeData;
  resumes: ResumeData[];
  updateState(state: ResumeData): void;
  createResume(resumename: string, resumeToBeCopiedId?: string): void;
}

export const ResumeContext = createContext<ResumeContextData>({} as ResumeContextData);

const emptyResume = generateResumeData('empty');

type ResumeProviderProps = {
  children: React.ReactNode;
};

export const ResumeProvider: React.FC<ResumeProviderProps> = ({ children }) => {
  const [resumes, setResumes] = useState<ResumeData[]>(() => {
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
    const updatedResumes = resumes.map((resume) => {
      if (resume.id === state.id) return state;
      resume.isActive = false;
      return resume;
    });
    setResumes(updatedResumes);
  }, [state]);

  useEffect(() => {
    localStorage.setItem('@ResumeMaker:resumes', JSON.stringify(resumes));
  }, [resumes]);

  const updateState = useCallback((stateParam: ResumeData) => {
    setState(stateParam);
  }, []);

  const createResume = useCallback((resumename: string, resumeToBeCopiedId?: string) => {
    let newResume = generateResumeData('empty');
    newResume.resumeName = resumename;
    newResume.isActive = true;

    if (resumeToBeCopiedId) {
      const resumeToBeCopied = resumes.find((resume) => resume.id === resumeToBeCopiedId);

      if (resumeToBeCopied) {
        const { id, resumeName, ...rest } = resumeToBeCopied; // eslint-disable-line
        newResume = Object.assign(newResume, rest);
      }
    }

    setResumes((oldResumes) => {
      const updatedResumes = oldResumes.map((resume) => {
        resume.isActive = false;
        return resume;
      });

      updatedResumes.push(newResume);
      return updatedResumes.slice();
    });

    setState(newResume);
  }, []);

  const memoizedState = useMemo(() => state, [state]);

  return (
    <ResumeContext.Provider value={{ state: memoizedState, resumes, updateState, createResume }}>
      {children}
    </ResumeContext.Provider>
  );
};

export const useResume = () => {
  const context = useContext(ResumeContext);

  if (!context) {
    throw new Error('This hook should be used whithin ResumeProvider');
  }

  return context;
};
