import { ChangeEvent } from 'react';
import { useIntl } from 'react-intl';
import { useResume } from '@/contexts/Resume';
import Input from '@/components/base/Input';

const ContactForm: React.FC = () => {
  const intl = useIntl();
  const { activeResume, updateActiveResume } = useResume();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name } = event.target;
    const { value } = event.target;
    updateActiveResume({
      ...activeResume,
      [name]: value,
    });
  };

  return (
    <>
      <Input
        label={intl.formatMessage({ id: 'sidebar.form.contact.phoneNumber' })}
        name="phoneNumber"
        value={activeResume.phoneNumber}
        onChange={handleChange}
      />
      <Input
        label={intl.formatMessage({ id: 'sidebar.form.contact.website' })}
        name="website"
        value={activeResume.website}
        marginTop="2.6rem"
        onChange={handleChange}
      />
      <Input
        label={intl.formatMessage({ id: 'sidebar.form.contact.email' })}
        type="email"
        name="email"
        value={activeResume.email}
        marginTop="2.6rem"
        onChange={handleChange}
      />
    </>
  );
};

export default ContactForm;
