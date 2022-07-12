import { ResumeData } from '@/entities';
import { generateResumeData } from '@/support/generateResumeData';
import { useCallback, useContext, useState, createContext, useEffect, useMemo } from 'react';

interface ResumeContextData {
  state: ResumeData;
  updateState(state: ResumeData): void;
}

export const ResumeContext = createContext<ResumeContextData>({} as ResumeContextData);

const emptyResume = generateResumeData('fake');

type ResumeProviderProps = {
  children: React.ReactNode;
};

export const ResumeProvider: React.FC<ResumeProviderProps> = ({ children }) => {
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

  const memoizedState = useMemo(() => state, [state]);

  return (
    <ResumeContext.Provider value={{ state: memoizedState, updateState }}>
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
