import { ChangeEvent } from 'react';
import { useIntl } from 'react-intl';
import { useResume } from '@/contexts/Resume';
import Input from '@/components/base/Input';

const ProfileForm: React.FC = () => {
  const intl = useIntl();
  const { state, updateState } = useResume();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name } = event.target;
    const { value } = event.target;

    updateState({
      ...state,
      [name]: value,
    });
  };

  return (
    <>
      <Input
        label={intl.formatMessage({ id: 'sidebar.form.heading.name' })}
        name="name"
        value={state.name}
        onChange={handleChange}
      />
      <Input
        label={intl.formatMessage({ id: 'sidebar.form.heading.title' })}
        name="title"
        value={state.title}
        marginTop="2.6rem"
        onChange={handleChange}
      />
      <Input
        label={intl.formatMessage({ id: 'sidebar.form.heading.birthDate' })}
        type="date"
        name="birthDate"
        value={state.birthDate}
        marginTop="2.6rem"
        onChange={handleChange}
      />
    </>
  );
};

export default ProfileForm;
