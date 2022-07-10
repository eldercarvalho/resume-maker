import { ReactElement } from 'react';
import ReactMarkdown from 'react-markdown';
import * as Icons from 'react-icons/fi';
import { IconType } from 'react-icons/lib';
import { FormattedMessage, useIntl } from 'react-intl';
import { useResume } from '@/contexts/Resume';

import { S } from './styles';
import { Sheet } from '../Sheet';

const networksIcons: Record<string, IconType> = {
  facebook: Icons.FiFacebook,
  instagram: Icons.FiInstagram,
  twitter: Icons.FiTwitter,
  github: Icons.FiGithub,
  linkedin: Icons.FiLinkedin,
  youtube: Icons.FiYoutube,
  dribbble: Icons.FiDribbble,
  other: Icons.FiChevronLeft,
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
      <S.Header>
        <div className="title">
          {state.name && <h1>{state.name}</h1>}
          {state.title && <p>{state.title}</p>}
        </div>
      </S.Header>

      <S.Body>
        <aside>
          {hasContactSection && (
            <S.Section>
              <S.Title>
                <FormattedMessage id="global.contact" />
              </S.Title>
              <ul>
                {(!!state.address || !!state.city) && (
                  <li>
                    {state.address} {state.city} {state.zipCode} <Icons.FiMapPin size={16} />
                  </li>
                )}
                {state.phoneNumber && (
                  <li>
                    <a href={`tel:${state.phoneNumber}`} target="_blank" rel="noreferrer">
                      {state.phoneNumber}
                    </a>
                    <Icons.FiPhone size={16} />
                  </li>
                )}
                {state.email && (
                  <li>
                    <a href={`mailto:${state.email}`} target="_blank" rel="noreferrer">
                      {state.email}
                    </a>
                    <Icons.FiMail size={16} />
                  </li>
                )}
                {state.website && (
                  <li>
                    <a href={state.website} target="_blank" rel="noreferrer">
                      {state.website}
                    </a>
                    <Icons.FiGlobe size={16} />
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
            </S.Section>
          )}
          {state.education.length > 0 && (
            <S.Section>
              <S.Title>
                <FormattedMessage id="global.education" />
              </S.Title>
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
            </S.Section>
          )}

          {state.skills.length > 0 && (
            <S.Section>
              <S.Title>
                <FormattedMessage id="global.skills" />
              </S.Title>
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
            </S.Section>
          )}

          {state.languages.length > 0 && (
            <S.Section>
              <S.Title>
                <FormattedMessage id="global.languages" />
              </S.Title>
              <ul>
                {state.languages.map((language) => (
                  <li key={language.id}>
                    {language.name} - {language.fluency}
                  </li>
                ))}
              </ul>
            </S.Section>
          )}

          {state.certifications.length > 0 && (
            <S.Section>
              <S.Title>
                <FormattedMessage id="global.certifications" />
              </S.Title>
              {state.certifications.map((certification) => (
                <ul>
                  <li key={certification.id}>
                    <strong>{certification.title}</strong>
                  </li>
                  <li>
                    {certification.issuer} - {adjustDate(certification.date)}
                  </li>
                </ul>
              ))}
            </S.Section>
          )}
        </aside>

        <div>
          {!!state.objectiveSummary && (
            <S.Section>
              <S.Title>
                <FormattedMessage id="global.objective" />
              </S.Title>
              {state.objectiveSummary && (
                <S.SummaryContent>
                  <ReactMarkdown>{state.objectiveSummary}</ReactMarkdown>
                </S.SummaryContent>
              )}
            </S.Section>
          )}

          {state.workExperience.length > 0 && (
            <S.Section>
              <S.Title>
                <FormattedMessage id="global.experience" />
              </S.Title>

              {state.workExperience.map((experience) => (
                <S.Experience key={experience.id}>
                  <h2>{experience.position}</h2>
                  <div className="details">
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
                          <Icons.FiExternalLink size={16} />
                        </a>
                      </span>
                    )}
                  </div>
                  {experience.summary && (
                    <S.SummaryContent>
                      <ReactMarkdown>{experience.summary}</ReactMarkdown>
                    </S.SummaryContent>
                  )}
                </S.Experience>
              ))}
            </S.Section>
          )}
        </div>
      </S.Body>
    </Sheet>
  );
};

export default Default;
