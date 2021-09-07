import { useResume } from '@/contexts/Resume';
import { ReactElement } from 'react';
import {
  FiChevronLeft,
  FiFacebook,
  FiGithub,
  FiGlobe,
  FiInstagram,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiPhone,
  FiTwitter,
  FiYoutube,
} from 'react-icons/fi';
import { IconType } from 'react-icons/lib';
import { FormattedMessage, useIntl } from 'react-intl';

import { Sheet, Header, Body, Title, Section, Experience } from './styles';

const networksIcons: Record<string, IconType> = {
  facebook: FiFacebook,
  instagram: FiInstagram,
  twitter: FiTwitter,
  github: FiGithub,
  linkedin: FiLinkedin,
  youtube: FiYoutube,
  other: FiChevronLeft,
};

const renderNetworkIcon = (network: string): ReactElement => {
  const key = Object.keys(networksIcons).includes(network.toLowerCase())
    ? network.toLowerCase()
    : 'other';

  const Icon = networksIcons[key];

  return <Icon size={16} />;
};

const Default: React.FC = () => {
  const intl = useIntl();
  const { state } = useResume();
  const hasContactSection =
    !!state.address ||
    !!state.city ||
    !!state.zipCode ||
    !!state.website ||
    state.socialNetworks.length > 0;

  const adjustDate = (date: string): string => {
    const formattedDate = intl.formatDate(new Date(date), {
      month: 'short',
      year: 'numeric',
    });
    const ajustedDate = formattedDate.replace(/ de /, ' ');
    return ajustedDate.charAt(0).toUpperCase() + ajustedDate.slice(1);
  };

  return (
    <Sheet className="sheet">
      <Header>
        <div className="title">
          {state.name && <h1>{state.name}</h1>}
          {state.title && <p>{state.title}</p>}
        </div>
      </Header>

      <Body>
        <aside>
          {hasContactSection && (
            <Section>
              <Title>
                <FormattedMessage id="global.contact" />
              </Title>
              <ul>
                {(!!state.address || !!state.city) && (
                  <li>
                    {state.address} {state.city} {state.zipCode} <FiMapPin size={16} />
                  </li>
                )}
                {state.phoneNumber && (
                  <li>
                    <a href={`tel:${state.phoneNumber}`} target="_blank" rel="noreferrer">
                      {state.phoneNumber}
                    </a>
                    <FiPhone size={16} />
                  </li>
                )}
                {state.email && (
                  <li>
                    <a href={`mailto:${state.email}`} target="_blank" rel="noreferrer">
                      {state.email}
                    </a>
                    <FiMail size={16} />
                  </li>
                )}
                {state.website && (
                  <li>
                    <a href={state.website} target="_blank" rel="noreferrer">
                      {state.website}
                    </a>
                    <FiGlobe size={16} />
                  </li>
                )}
                {state.socialNetworks.map((network) => (
                  <li key={network.id}>
                    <a className="link" href={network.url} target="_blank" rel="noreferrer">
                      {network.name}
                    </a>
                    {renderNetworkIcon(network.name)}
                  </li>
                ))}
              </ul>
            </Section>
          )}
          {state.education.length > 0 && (
            <Section>
              <Title>
                <FormattedMessage id="global.education" />
              </Title>
              {state.education.map((education) => (
                <ul key={education.id}>
                  <li>
                    <strong>{education.typeOfDegree}</strong>
                  </li>
                  <li>
                    <strong>{education.fieldOfStudy}</strong>
                  </li>
                  <li>{education.institution}</li>
                  <li>
                    {adjustDate(education.startDate)} -{' '}
                    {education.endDate ? (
                      adjustDate(education.endDate)
                    ) : (
                      <FormattedMessage id="global.present" />
                    )}
                  </li>
                  {education.summary && <li>{education.summary}</li>}
                </ul>
              ))}
            </Section>
          )}

          {state.skills.length > 0 && (
            <Section>
              <Title>
                <FormattedMessage id="global.skills" />
              </Title>
              <ul>
                {state.skills.map((skill) => (
                  <li key={skill.id}>
                    {!!skill.level && (
                      <>
                        {skill.name} - {skill.level}
                      </>
                    )}
                    {!skill.level && skill.name}
                  </li>
                ))}
              </ul>
            </Section>
          )}

          {state.languages.length > 0 && (
            <Section>
              <Title>
                <FormattedMessage id="global.languages" />
              </Title>
              <ul>
                {state.languages.map((language) => (
                  <li key={language.id}>
                    {language.name} - {language.fluency}
                  </li>
                ))}
              </ul>
            </Section>
          )}
        </aside>

        <div>
          {!!state.objectiveSummary && (
            <Section>
              <Title>
                <FormattedMessage id="global.objective" />
              </Title>
              <p>{state.objectiveSummary}</p>
            </Section>
          )}

          {state.workExperience.length > 0 && (
            <Section>
              <Title>
                <FormattedMessage id="global.experience" />
              </Title>

              {state.workExperience.map((experience) => (
                <Experience key={experience.id}>
                  <h2>{experience.position}</h2>
                  <div>
                    <span>{experience.company}</span>
                    <span>
                      {adjustDate(experience.startDate)} -{' '}
                      {experience.endDate ? (
                        adjustDate(experience.endDate)
                      ) : (
                        <FormattedMessage id="global.present" />
                      )}
                    </span>
                    {experience.website && (
                      <span>
                        <a href={experience.website} target="_blank" rel="noreferrer">
                          <FiGlobe size={16} />
                        </a>
                      </span>
                    )}
                  </div>
                  <p>{experience.summary}</p>
                </Experience>
              ))}
            </Section>
          )}
        </div>
      </Body>
    </Sheet>
  );
};

export default Default;
