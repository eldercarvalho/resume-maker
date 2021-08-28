import { FormattedMessage } from 'react-intl';
import { v4 as uuid } from 'uuid';

import Accordion from '../base/Accordion';
import AddressForm from './AddressForm';
import ContactForm from './ContactForm';
import HeadingForm from './HeadingForm';
import ObjectiveForm from './ObjectiveForm';
import SocialNetworksForm from './SocialNetworksForm';
import WorkExperienceForm from './WorkExperienceForm';
import EducationForm from './EducationForm';

import { Container, Logo } from './style';
import ProjectsForm from './ProjectsForm';
import AwardsForm from './AwardsForm';

const firstId = uuid();

const accordionItems = [
  {
    id: firstId,
    messageId: 'global.heading',
    content: <HeadingForm />,
    values: {},
  },
  {
    id: uuid(),
    messageId: 'global.address',
    values: {},
    content: <AddressForm />,
  },
  {
    id: uuid(),
    messageId: 'global.contact',
    values: {},
    content: <ContactForm />,
  },
  {
    id: uuid(),
    messageId: 'global.socialNetwork',
    values: { social: 2 },
    content: <SocialNetworksForm />,
  },
  {
    id: uuid(),
    messageId: 'global.objective',
    values: {},
    content: <ObjectiveForm />,
  },
  {
    id: uuid(),
    messageId: 'global.experience',
    values: {},
    content: <WorkExperienceForm />,
  },
  {
    id: uuid(),
    messageId: 'global.education',
    values: {},
    content: <EducationForm />,
  },
  {
    id: uuid(),
    messageId: 'global.projects',
    values: {},
    content: <ProjectsForm />,
  },
  {
    id: uuid(),
    messageId: 'global.awards',
    values: {},
    content: <AwardsForm />,
  },
];

const FormSidebar: React.FC = () => (
  <Container>
    <Logo>
      <strong>R</strong>esume <strong>M</strong>aker
    </Logo>

    <Accordion defaultItemKey={firstId}>
      {accordionItems.map((item) => (
        <Accordion.Item key={item.id} itemKey={item.id}>
          <Accordion.Header>
            <FormattedMessage id={item.messageId} values={item.values} />
          </Accordion.Header>
          <Accordion.Content>{item.content}</Accordion.Content>
        </Accordion.Item>
      ))}

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
