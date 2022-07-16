import Default from '@/components/templates/default';
import { Container, ResumeHeader } from './styles';
import ResumesDropdown from './ResumesDropdown';

const templates = {
  default: Default,
};

const template = 'default';

const Resume: React.FC = () => {
  const Template = templates[template];

  return (
    <Container>
      <ResumeHeader>
        <ResumesDropdown />
      </ResumeHeader>

      <Template />
    </Container>
  );
};

export default Resume;
