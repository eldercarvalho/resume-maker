import { FiChevronDown } from 'react-icons/fi';

import { useResume } from '@/contexts/Resume';
import Dropdown from '@/components/base/Dropdown';

const ResumesDropdown = () => {
  const { activeResume, resumes, setActiveResumeById } = useResume();

  return (
    <Dropdown>
      <Dropdown.Toggle textOnly reduced>
        <span>{activeResume.resumeName}</span> <FiChevronDown />
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {resumes.map((resume) => (
          <Dropdown.Item key={resume.id} onClick={() => setActiveResumeById(resume.id)}>
            {resume.resumeName}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default ResumesDropdown;
