import { useCallback, useContext, useState, createContext, useMemo } from 'react';

interface ResumeData {
  name: string;
  title: string;
  birthDate: string;
}

interface ResumeContextData {
  state: ResumeData;
  updateState(state: ResumeData): void;
}

export const ResumeContext = createContext<ResumeContextData>({} as ResumeContextData);

export const ResumeProvider: React.FC = ({ children }) => {
  const [state, setState] = useState({
    name: '',
    title: '',
    birthDate: '',
  });

  const updateState = useCallback((stateParam: ResumeData) => {
    setState(stateParam);
  }, []);

  // const memoizedValue = useMemo(
  //   () => ({
  //     state,
  //     updateState,
  //   }),
  //   [],
  // );

  return <ResumeContext.Provider value={{ state, updateState }}>{children}</ResumeContext.Provider>;
};

export const useResume = () => {
  const context = useContext(ResumeContext);

  if (!context) {
    throw new Error('This component should be used whithin ResumeProvider');
  }

  return context;
};
