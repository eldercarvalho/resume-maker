import { FiChevronDown } from 'react-icons/fi';

import { useResume } from '@/contexts/Resume';
import Dropdown from '@/components/base/Dropdown';

const ResumesDropdown = () => {
  const { state, resumes, setActiveResume } = useResume();

  return (
    <Dropdown>
      <Dropdown.Toggle textOnly reduced>
        <span>{state.resumeName}</span> <FiChevronDown />
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {resumes.map((resume) => (
          <Dropdown.Item key={resume.id} onClick={() => setActiveResume(resume.id)}>
            {resume.resumeName}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default ResumesDropdown;
