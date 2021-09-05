import { ChangeEvent } from 'react';
import { useResume } from '@/contexts/Resume';
import Textarea from '@/components/base/Textarea';

const ObjectiveForm: React.FC = () => {
  const { state, updateState } = useResume();

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const { name } = event.target;
    const { value } = event.target;

    updateState({
      ...state,
      [name]: value,
    });
  };

  return (
    <>
      <Textarea name="objectiveSummary" value={state.objectiveSummary} onChange={handleChange} />
    </>
  );
};

export default ObjectiveForm;
