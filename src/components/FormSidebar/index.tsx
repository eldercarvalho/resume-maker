import { FormattedMessage } from 'react-intl';
import Accordion from '../base/Accordion';
import AddressForm from './AddressForm';
import ContactForm from './ContactForm';
import HeadingForm from './HeadingForm';
import ObjectiveForm from './ObjectiveForm';
import SocialNetworksForm from './SocialNetworksForm';
import WorkExperienceForm from './WorkExperienceForm';

import { Container, Logo } from './style';

const accordionItems = [
  {
    key: '0',
    messageId: 'global.heading',
    content: <HeadingForm />,
    values: {},
  },
  {
    key: '1',
    messageId: 'global.address',
    values: {},
    content: <AddressForm />,
  },
  {
    key: '2',
    messageId: 'global.contact',
    values: {},
    content: <ContactForm />,
  },
  {
    key: '3',
    messageId: 'global.socialNetwork',
    values: { social: 2 },
    content: <SocialNetworksForm />,
  },
  {
    key: '4',
    messageId: 'global.objective',
    values: {},
    content: <ObjectiveForm />,
  },
  {
    key: '5',
    messageId: 'global.experience',
    values: {},
    content: <WorkExperienceForm />,
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
            <FormattedMessage id={item.messageId} values={item.values} />
          </Accordion.Header>
          <Accordion.Content>{item.content}</Accordion.Content>
        </Accordion.Item>
      ))}

      <Accordion.Item itemKey="6">
        <Accordion.Header>
          <FormattedMessage id="global.education" defaultMessage="Formação" />
        </Accordion.Header>
        <Accordion.Content>In progress</Accordion.Content>
      </Accordion.Item>
      <Accordion.Item itemKey="7">
        <Accordion.Header>
          <FormattedMessage id="global.projects" defaultMessage="Projetos" />
        </Accordion.Header>
        <Accordion.Content>In progress</Accordion.Content>
      </Accordion.Item>
      <Accordion.Item itemKey="8">
        <Accordion.Header>
          <FormattedMessage id="global.awards" defaultMessage="Prêmios" />
        </Accordion.Header>
        <Accordion.Content>In progress</Accordion.Content>
      </Accordion.Item>
      <Accordion.Item itemKey="9">
        <Accordion.Header>
          <FormattedMessage id="global.certifications" defaultMessage="Certificações" />
        </Accordion.Header>
        <Accordion.Content>In progress</Accordion.Content>
      </Accordion.Item>
      <Accordion.Item itemKey="10">
        <Accordion.Header>
          <FormattedMessage id="global.skills" defaultMessage="Habilidades" />
        </Accordion.Header>
        <Accordion.Content>In progress</Accordion.Content>
      </Accordion.Item>
      <Accordion.Item itemKey="11">
        <Accordion.Header>
          <FormattedMessage id="global.hobbies" defaultMessage="Hobbies" />
        </Accordion.Header>
        <Accordion.Content>In progress</Accordion.Content>
      </Accordion.Item>
      <Accordion.Item itemKey="12">
        <Accordion.Header>
          <FormattedMessage id="global.languages" defaultMessage="Idiomas" />
        </Accordion.Header>
        <Accordion.Content>In progress</Accordion.Content>
      </Accordion.Item>
      <Accordion.Item itemKey="13">
        <Accordion.Header>
          <FormattedMessage id="global.references" defaultMessage="Referências" />
        </Accordion.Header>
        <Accordion.Content>In progress</Accordion.Content>
      </Accordion.Item>
    </Accordion>
  </Container>
);

export default FormSidebar;
