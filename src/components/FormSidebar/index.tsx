import { FormattedMessage } from 'react-intl';
import Accordion from '../base/Accordion';

import { Container, Logo } from './style';

const FormSidebar: React.FC = () => (
  <Container>
    <Logo>Resume Maker</Logo>

    <Accordion>
      <Accordion.Item itemKey="0">
        <Accordion.Header>
          <FormattedMessage id="sidebar.accordion.header.title" defaultMessage="Cabeçalho" />
        </Accordion.Header>
        <Accordion.Content>Content</Accordion.Content>
      </Accordion.Item>
      <Accordion.Item itemKey="1">
        <Accordion.Header>
          <FormattedMessage id="sidebar.accordion.about.title" defaultMessage="Sobre" />
        </Accordion.Header>
        <Accordion.Content>Content</Accordion.Content>
      </Accordion.Item>
    </Accordion>
  </Container>
);

export default FormSidebar;
