import Default from '@/components/templates/default';

import { Container } from './styles';

const templates = {
  default: Default,
};

const template = 'default';

const Resume: React.FC = () => {
  const Template = templates[template];

  return (
    <Container>
      <Template />
    </Container>
  );
};

export default Resume;
