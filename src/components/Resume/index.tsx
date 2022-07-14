import { FiEdit } from 'react-icons/fi';
import { useResume } from '@/contexts/Resume';
import Default from '@/components/templates/default';
import Button from '@/components/base/Button';

import { Container, ResumeHeader } from './styles';

const templates = {
  default: Default,
};

const template = 'default';

const Resume: React.FC = () => {
  const Template = templates[template];
  const { state } = useResume();

  return (
    <Container>
      <ResumeHeader>
        <Button textOnly small reduced>
          <FiEdit size={16} /> {state.resumeName}
        </Button>
      </ResumeHeader>

      <Template />
    </Container>
  );
};

export default Resume;
