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
  const { activeResume } = useResume();
  const hasContactSection =
    !!activeResume.phoneNumber ||
    !!activeResume.address ||
    !!activeResume.city ||
    !!activeResume.zipCode ||
    !!activeResume.website ||
    activeResume.socialNetworks.length > 0;

  const toShortDate = (date: string): string => {
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
          {activeResume.name && <h1>{activeResume.name}</h1>}
          {activeResume.title && <p>{activeResume.title}</p>}
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
                {(activeResume.address || activeResume.city || activeResume.zipCode) && (
                  <li>
                    {activeResume.address} {activeResume.city} {activeResume.zipCode}
                    <Icons.FiMapPin size={16} />
                  </li>
                )}
                {activeResume.phoneNumber && (
                  <li>
                    <a href={`tel:${activeResume.phoneNumber}`} target="_blank" rel="noreferrer">
                      {activeResume.phoneNumber}
                    </a>
                    <Icons.FiPhone size={16} />
                  </li>
                )}
                {activeResume.email && (
                  <li>
                    <a href={`mailto:${activeResume.email}`} target="_blank" rel="noreferrer">
                      {activeResume.email}
                    </a>
                    <Icons.FiMail size={16} />
                  </li>
                )}
                {activeResume.website && (
                  <li>
                    <a href={activeResume.website} target="_blank" rel="noreferrer">
                      {activeResume.website}
                    </a>
                    <Icons.FiGlobe size={16} />
                  </li>
                )}
                {activeResume.socialNetworks.map((network) => (
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
          {activeResume.education.length > 0 && (
            <S.Section>
              <S.Title>
                <FormattedMessage id="global.education" />
              </S.Title>
              {activeResume.education.map((education) => (
                <ul key={education.id}>
                  <li>
                    <strong>{education.typeOfDegree}</strong>
                  </li>
                  <li>
                    <strong>{education.fieldOfStudy}</strong>
                  </li>
                  <li>{education.institution}</li>
                  <li>
                    {toShortDate(education.startDate)} -{' '}
                    {education.endDate ? (
                      toShortDate(education.endDate)
                    ) : (
                      <FormattedMessage id="global.present" />
                    )}
                  </li>
                  {education.summary && <li>{education.summary}</li>}
                </ul>
              ))}
            </S.Section>
          )}

          {activeResume.skills.length > 0 && (
            <S.Section>
              <S.Title>
                <FormattedMessage id="global.skills" />
              </S.Title>
              <ul>
                {activeResume.skills.map((skill) => (
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

          {activeResume.languages.length > 0 && (
            <S.Section>
              <S.Title>
                <FormattedMessage id="global.languages" />
              </S.Title>
              <ul>
                {activeResume.languages.map((language) => (
                  <li key={language.id}>
                    {language.name} - {language.fluency}
                  </li>
                ))}
              </ul>
            </S.Section>
          )}

          {activeResume.certifications.length > 0 && (
            <S.Section>
              <S.Title>
                <FormattedMessage id="global.certifications" />
              </S.Title>
              {activeResume.certifications.map((certification) => (
                <ul key={certification.id}>
                  <li key={certification.id}>
                    <strong>{certification.title}</strong>
                  </li>
                  <li>
                    {certification.issuer} - {toShortDate(certification.date)}
                  </li>
                </ul>
              ))}
            </S.Section>
          )}
        </aside>

        <div>
          {!!activeResume.objectiveSummary && (
            <S.Section>
              <S.Title>
                <FormattedMessage id="global.objective" />
              </S.Title>
              {activeResume.objectiveSummary && (
                <S.SummaryContent>
                  <ReactMarkdown>{activeResume.objectiveSummary}</ReactMarkdown>
                </S.SummaryContent>
              )}
            </S.Section>
          )}

          {activeResume.workExperience.length > 0 && (
            <S.Section>
              <S.Title>
                <FormattedMessage id="global.experience" />
              </S.Title>

              {activeResume.workExperience.map((experience) => (
                <S.Experience key={experience.id}>
                  <h2>{experience.position}</h2>
                  <div className="details">
                    <span>{experience.company}</span>
                    <span>
                      {toShortDate(experience.startDate)} -{' '}
                      {experience.endDate ? (
                        toShortDate(experience.endDate)
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
