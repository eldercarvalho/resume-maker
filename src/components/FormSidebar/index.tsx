import { FormattedMessage } from 'react-intl';
import Accordion from '../base/Accordion';
import AddressForm from './AddressForm';
import ContactForm from './ContactForm';
import HeadingForm from './HeadingForm';

import { Container, Logo } from './style';

const accordionItems = [
  {
    key: '0',
    messageId: 'sidebar.accordion.heading',
    defaultMessage: 'Cabeçalho',
    content: <HeadingForm />,
  },
  {
    key: '1',
    messageId: 'sidebar.accordion.address',
    defaultMessage: 'Endereço',
    content: <AddressForm />,
  },
  {
    key: '2',
    messageId: 'sidebar.accordion.contact',
    defaultMessage: 'Contato',
    content: <ContactForm />,
  },
];

const FormSidebar: React.FC = () => (
  <Container>
    <Logo>
      <strong>R</strong>esume <strong>M</strong>aker
    </Logo>

    <Accordion defaultItemKey="0">
      {accordionItems.map((item) => (
        <Accordion.Item key={item.key} itemKey={item.key}>
          <Accordion.Header>
            <FormattedMessage id={item.messageId} defaultMessage={item.defaultMessage} />
          </Accordion.Header>
          <Accordion.Content>{item.content}</Accordion.Content>
        </Accordion.Item>
      ))}

      <Accordion.Item itemKey="3">
        <Accordion.Header>
          <FormattedMessage id="sidebar.accordion.social" defaultMessage="Redes Sociais" />
        </Accordion.Header>
        <Accordion.Content>In progress</Accordion.Content>
      </Accordion.Item>
      <Accordion.Item itemKey="4">
        <Accordion.Header>
          <FormattedMessage id="sidebar.accordion.objective" defaultMessage="Objetivo" />
        </Accordion.Header>
        <Accordion.Content>In progress</Accordion.Content>
      </Accordion.Item>
      <Accordion.Item itemKey="5">
        <Accordion.Header>
          <FormattedMessage id="sidebar.accordion.experience" defaultMessage="Experiência" />
        </Accordion.Header>
        <Accordion.Content>In progress</Accordion.Content>
      </Accordion.Item>
      <Accordion.Item itemKey="6">
        <Accordion.Header>
          <FormattedMessage id="sidebar.accordion.education" defaultMessage="Formação" />
        </Accordion.Header>
        <Accordion.Content>In progress</Accordion.Content>
      </Accordion.Item>
      <Accordion.Item itemKey="7">
        <Accordion.Header>
          <FormattedMessage id="sidebar.accordion.projects" defaultMessage="Projetos" />
        </Accordion.Header>
        <Accordion.Content>In progress</Accordion.Content>
      </Accordion.Item>
      <Accordion.Item itemKey="8">
        <Accordion.Header>
          <FormattedMessage id="sidebar.accordion.awards" defaultMessage="Prêmios" />
        </Accordion.Header>
        <Accordion.Content>In progress</Accordion.Content>
      </Accordion.Item>
      <Accordion.Item itemKey="9">
        <Accordion.Header>
          <FormattedMessage id="sidebar.accordion.certifications" defaultMessage="Certificações" />
        </Accordion.Header>
        <Accordion.Content>In progress</Accordion.Content>
      </Accordion.Item>
      <Accordion.Item itemKey="10">
        <Accordion.Header>
          <FormattedMessage id="sidebar.accordion.skills" defaultMessage="Habilidades" />
        </Accordion.Header>
        <Accordion.Content>In progress</Accordion.Content>
      </Accordion.Item>
      <Accordion.Item itemKey="11">
        <Accordion.Header>
          <FormattedMessage id="sidebar.accordion.hobbies" defaultMessage="Hobbies" />
        </Accordion.Header>
        <Accordion.Content>In progress</Accordion.Content>
      </Accordion.Item>
      <Accordion.Item itemKey="12">
        <Accordion.Header>
          <FormattedMessage id="sidebar.accordion.languages" defaultMessage="Idiomas" />
        </Accordion.Header>
        <Accordion.Content>In progress</Accordion.Content>
      </Accordion.Item>
      <Accordion.Item itemKey="13">
        <Accordion.Header>
          <FormattedMessage id="sidebar.accordion.references" defaultMessage="Referências" />
        </Accordion.Header>
        <Accordion.Content>In progress</Accordion.Content>
      </Accordion.Item>
    </Accordion>
  </Container>
);

export default FormSidebar;
