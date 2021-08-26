import { ChangeEvent, useEffect, useState } from 'react';
import { useResume } from '@/contexts/Resume';
import Textarea from '@/components/base/Textarea';

const ObjectiveForm: React.FC = () => {
  const [state, setState] = useState({
    objective: '',
  });
  const { state: contextState, updateState } = useResume();

  useEffect(() => {
    updateState({
      ...contextState,
      objectiveSummary: state.objective,
    });
  }, [state]);

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const { name } = event.target;
    const { value } = event.target;

    setState({
      ...state,
      [name]: value,
    });
  };

  return (
    <>
      <Textarea name="objective" value={state.objective} onChange={handleChange} />
    </>
  );
};

export default ObjectiveForm;
