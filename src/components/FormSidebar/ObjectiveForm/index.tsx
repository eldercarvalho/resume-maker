import { ChangeEvent } from 'react';
import { useResume } from '@/contexts/Resume';

import Textarea from '@/components/base/Textarea';

const ObjectiveForm: React.FC = () => {
  const { activeResume, updateActiveResume } = useResume();

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const { name } = event.target;
    const { value } = event.target;

    updateActiveResume({
      ...activeResume,
      [name]: value,
    });
  };

  return (
    <>
      <Textarea
        name="objectiveSummary"
        value={activeResume.objectiveSummary}
        onChange={handleChange}
      />
    </>
  );
};

export default ObjectiveForm;
