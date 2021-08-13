import { ChangeEvent, useEffect, useState } from 'react';
import { useIntl } from 'react-intl';

import { useResume } from '@/contexts/Resume';
import Input from '@/components/base/Input';

import { Grid } from '@/style/global';

const AddressForm: React.FC = () => {
  const intl = useIntl();
  const [state, setState] = useState({
    address: '',
    city: '',
    zipCode: '',
  });
  const { state: contextState, updateState } = useResume();

  useEffect(() => {
    updateState({
      ...contextState,
      address: state.address,
      city: state.city,
      zipCode: state.zipCode,
    });
  }, [state]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name } = event.target;
    const { value } = event.target;

    setState({
      ...state,
      [name]: value,
    });
  };

  return (
    <>
      <Input
        label={intl.formatMessage({ id: 'sidebar.form.address.address' })}
        name="address"
        value={state.address}
        onChange={handleChange}
      />
      <Grid columns="1.5fr 1fr">
        <Input
          label={intl.formatMessage({ id: 'sidebar.form.address.city' })}
          name="city"
          value={state.city}
          marginTop="2.6rem"
          onChange={handleChange}
        />
        <Input
          label={intl.formatMessage({ id: 'sidebar.form.address.zipcode' })}
          name="zipCode"
          value={state.zipCode}
          marginTop="2.6rem"
          onChange={handleChange}
        />
      </Grid>
    </>
  );
};

export default AddressForm;
