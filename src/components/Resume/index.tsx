import Default from '@/components/templates/default';
import { Container, ResumeHeader } from './styles';
import ResumesDropdown from './ResumesDropdown';
import EditForm from './EditForm';

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
        <EditForm />
      </ResumeHeader>

      <Template />
    </Container>
  );
};

export default Resume;
