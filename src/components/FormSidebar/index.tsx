import { FormattedMessage } from 'react-intl';
import { v4 as uuid } from 'uuid';

import Accordion from '../base/Accordion';
import AddressForm from './AddressForm';
import ContactForm from './ContactForm';
import ProfileForm from './ProfileForm';
import ObjectiveForm from './ObjectiveForm';
import SocialNetworksForm from './SocialNetworksForm';
import WorkExperienceForm from './WorkExperienceForm';
import EducationForm from './EducationForm';

import { Container, Logo } from './style';
// import ProjectsForm from './ProjectsForm';
// import AwardsForm from './AwardsForm';
import CertificationsForm from './CertificationsForm';
import SkillsForm from './SkillsForm';
// import HobbiesForm from './HobbiesForm';
import LanguagesForm from './LanguagesForm';
// import ReferencesForm from './ReferencesForm';

const firstId = uuid();

const accordionItems = [
  {
    id: firstId,
    messageId: 'global.profile',
    content: <ProfileForm />,
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
    messageId: 'global.skills',
    values: {},
    content: <SkillsForm />,
  },
  {
    id: uuid(),
    messageId: 'global.languages',
    values: {},
    content: <LanguagesForm />,
  },
  {
    id: uuid(),
    messageId: 'global.certifications',
    values: {},
    content: <CertificationsForm />,
  },
  // {
  //   id: uuid(),
  //   messageId: 'global.projects',
  //   values: {},
  //   content: <ProjectsForm />,
  // },
  // {
  //   id: uuid(),
  //   messageId: 'global.awards',
  //   values: {},
  //   content: <AwardsForm />,
  // },
  // {
  //   id: uuid(),
  //   messageId: 'global.hobbies',
  //   values: {},
  //   content: <HobbiesForm />,
  // },
  // {
  //   id: uuid(),
  //   messageId: 'global.references',
  //   values: {},
  //   content: <ReferencesForm />,
  // },
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
    </Accordion>
  </Container>
);

export default FormSidebar;
