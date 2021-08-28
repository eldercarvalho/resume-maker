import { useEffect, useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { v4 as uuid } from 'uuid';

import { SocialNetwork, useResume } from '@/contexts/Resume';
import Input from '@/components/base/Input';
import Modal from '@/components/base/Modal';
import Button from '@/components/base/Button';
import { Grid } from '@/style/global';
import CrudList from '../CrudList';

const schema = yup.object().shape({
  name: yup.string().required('Campo obrigatório'),
  username: yup.string().required('Campo obrigatório'),
  url: yup.string().required('Campo obrigatório'),
});

type FormData = {
  name: string;
  username: string;
  url: string;
};

const SocialNetworksForm: React.FC = () => {
  const intl = useIntl();
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<FormData>({ resolver: yupResolver(schema) });
  const [showModal, setShowModal] = useState(false);
  const [currentNetworkId, setCurrentNetworkId] = useState('');
  const [socialNetworks, setSocialNetworks] = useState<SocialNetwork[]>([]);
  const { state: contextState, updateState } = useResume();
  const emptyMessage = intl.formatMessage(
    { id: 'sidebar.crudList.emptyMessage' },
    {
      gender: 'female',
      name: intl.formatMessage({ id: 'global.socialNetwork' }, { social: 1 }).toLowerCase(),
    },
  );

  useEffect(() => {
    updateState({
      ...contextState,
      socialNetworks,
    });
  }, [socialNetworks]);

  const onSubmit = (data: FormData) => {
    if (currentNetworkId) {
      const updatedNetworks = socialNetworks.map((network) => {
        if (network.id === currentNetworkId) {
          return { id: network.id, ...data };
        }
        return network;
      });
      setSocialNetworks(updatedNetworks);
      setCurrentNetworkId('');
    } else {
      setSocialNetworks([...socialNetworks, { id: uuid(), ...data }]);
    }
    reset();
    setShowModal(false);
  };

  const onEdit = (id: string) => {
    const network = socialNetworks.find((sn) => sn.id === id);
    if (network) {
      setCurrentNetworkId(network.id);
      setValue('name', network.name);
      setValue('username', network.username);
      setValue('url', network.url);
      setShowModal(true);
    }
  };

  const closeModal = () => {
    setShowModal(false);
    reset();
  };

  const deleteNetwork = (id: string) => {
    setSocialNetworks(socialNetworks.filter((network) => network.id !== id));
  };

  return (
    <>
      <CrudList
        items={socialNetworks}
        propertyToShow="name"
        emptyMessage={emptyMessage}
        onAdd={() => setShowModal(true)}
        onEdit={onEdit}
        onDelete={deleteNetwork}
      />

      <Modal show={showModal} close onCloseModal={closeModal}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Modal.Header>
            <FormattedMessage id="global.socialNetwork" values={{ social: 2 }} />
          </Modal.Header>
          <Modal.Content>
            <Grid columns="1fr 1fr">
              <Input
                label={intl.formatMessage({ id: 'sidebar.form.social.network' })}
                error={errors.name?.message}
                {...register('name')}
              />
              <Input
                label={intl.formatMessage({ id: 'sidebar.form.social.username' })}
                error={errors.username?.message}
                {...register('username')}
              />
            </Grid>
            <Input
              label={intl.formatMessage({ id: 'sidebar.form.social.url' })}
              marginTop="2.6rem"
              error={errors.url?.message}
              {...register('url')}
            />
          </Modal.Content>
          <Modal.Actions>
            <Button type="button" small outline onClick={() => closeModal()}>
              <FormattedMessage id="global.close" />
            </Button>
            <Button type="submit" small>
              <FormattedMessage id={currentNetworkId ? 'global.update' : 'global.add'} />
            </Button>
          </Modal.Actions>
        </form>
      </Modal>
    </>
  );
};

export default SocialNetworksForm;
