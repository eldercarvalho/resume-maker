import Default from '@/components/templates/default';
import { Container, ResumeHeader } from './styles';
import ResumesDropdown from './ResumesDropdown';
import EditForm from './EditForm';
import RemoveDialog from './RemoveDialog';

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
        <RemoveDialog />
      </ResumeHeader>

      <Template />
    </Container>
  );
};

export default Resume;
