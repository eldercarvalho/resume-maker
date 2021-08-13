import { ChangeEvent, useEffect, useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';

import { useResume } from '@/contexts/Resume';
import Input from '@/components/base/Input';
import Modal from '@/components/base/Modal';
import Button from '@/components/base/Button';

import { Grid } from '@/style/global';
import { FiPlus } from 'react-icons/fi';

const SocialNetworksForm: React.FC = () => {
  const intl = useIntl();
  const [showModal, setShowModal] = useState(false);
  const [state, setState] = useState({
    socialNetworks: [],
  });
  const { state: contextState, updateState } = useResume();

  useEffect(() => {
    updateState({
      ...contextState,
      socialNetworks: state.socialNetworks,
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
      <Button outline small onClick={() => setShowModal(true)}>
        <FiPlus size={16} />
        <FormattedMessage id="global.add" />
      </Button>

      <Modal show={showModal} close onCloseModal={() => setShowModal(false)}>
        <Modal.Header>
          <FormattedMessage id="sidebar.accordion.social" />
        </Modal.Header>
        <Modal.Content>
          <Grid columns="1fr 1fr">
            <Input label={intl.formatMessage({ id: 'sidebar.form.social.network' })} name="city" />
            <Input
              label={intl.formatMessage({ id: 'sidebar.form.social.username' })}
              name="username"
            />
          </Grid>
          <Input
            label={intl.formatMessage({ id: 'sidebar.form.social.url' })}
            marginTop="2.6rem"
            name="url"
          />
        </Modal.Content>
        <Modal.Actions>
          <Button small outline onClick={() => setShowModal(false)}>
            <FormattedMessage id="global.close" />
          </Button>
          <Button small>
            <FormattedMessage id="global.add" />
          </Button>
        </Modal.Actions>
      </Modal>
    </>
  );
};

export default SocialNetworksForm;
