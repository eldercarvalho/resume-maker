import { ResumeData } from '@/entities';
import { generateResumeData } from '@/support/generateResumeData';
import { useCallback, useContext, useState, createContext, useEffect, useMemo } from 'react';
import { useIntl } from 'react-intl';

interface ResumeContextData {
  state: ResumeData;
  resumes: ResumeData[];
  updateState(state: ResumeData): void;
  createResume(resumename: string, resumeToBeCopiedId?: string): void;
  setActiveResume(resumeId: string): void;
  removeResume(resumeId: string): void;
}

export const ResumeContext = createContext<ResumeContextData>({} as ResumeContextData);

const emptyResume = generateResumeData('empty');

type ResumeProviderProps = {
  children: React.ReactNode;
};

export const ResumeProvider: React.FC<ResumeProviderProps> = ({ children }) => {
  const { formatMessage: fm } = useIntl();
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
      const savedActiveResume = savedResumes.find((resume) => resume.isActive) || emptyResume;
      if (!savedActiveResume.resumeName) {
        savedActiveResume.resumeName = fm({ id: 'global.defaultResumeName' });
      }
      return savedActiveResume;
    }

    emptyResume.resumeName = fm({ id: 'global.defaultResumeName' });
    return emptyResume;
  });

  useEffect(() => {
    setResumes((oldResumes) =>
      oldResumes.map((resume) => {
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

  const createResume = useCallback(
    (resumename: string, resumeToBeCopiedId?: string) => {
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
    },
    [resumes],
  );

  const setActiveResume = useCallback(
    (resumeId: string) => {
      const newActiveResume = resumes.find((resume) => resume.id === resumeId);
      setState(newActiveResume!);
    },
    [resumes],
  );

  const removeResume = useCallback(
    (resumeId: string) => {
      const filteredResumes = resumes.filter((resume) => resume.id !== resumeId);
      setActiveResume(filteredResumes[0].id);
      setResumes(filteredResumes);
    },
    [resumes, setActiveResume],
  );

  const memoizedState = useMemo(() => state, [state]);

  return (
    <ResumeContext.Provider
      value={{
        state: memoizedState,
        resumes,
        updateState,
        createResume,
        setActiveResume,
        removeResume,
      }}
    >
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
