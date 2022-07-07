import { useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { v4 as uuid } from 'uuid';

import { useResume } from '@/contexts/Resume';
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
  const [currentId, setCurrentId] = useState('');
  const { state, updateState } = useResume();
  const emptyMessage = intl.formatMessage(
    { id: 'sidebar.crudList.emptyMessage' },
    {
      gender: 'female',
      name: intl.formatMessage({ id: 'global.socialNetwork' }, { social: 1 }).toLowerCase(),
    },
  );

  const onSubmit = (data: FormData) => {
    if (currentId) {
      const updatedNetworks = state.socialNetworks.map((network) => {
        if (network.id === currentId) {
          return { id: network.id, ...data };
        }
        return network;
      });
      updateState({ ...state, socialNetworks: updatedNetworks });
      setCurrentId('');
    } else {
      updateState({
        ...state,
        socialNetworks: [...state.socialNetworks, { id: uuid(), ...data }],
      });
    }
    reset();
    setShowModal(false);
  };

  const onEdit = (id: string) => {
    const network = state.socialNetworks.find((sn) => sn.id === id);
    if (network) {
      setCurrentId(network.id);
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
    updateState({
      ...state,
      socialNetworks: state.socialNetworks.filter((network) => network.id !== id),
    });
  };

  const handleDrag = (index: number, newIndex: number) => {
    const { socialNetworks } = state;
    const item = socialNetworks.splice(index, 1)[0];
    socialNetworks.splice(newIndex, 0, item);
    updateState({
      ...state,
      socialNetworks,
    });
  };

  return (
    <>
      <CrudList
        items={state.socialNetworks}
        propertyToShow="name"
        emptyMessage={emptyMessage}
        onAdd={() => setShowModal(true)}
        onEdit={onEdit}
        onDelete={deleteNetwork}
        onDrag={handleDrag}
      />

      <Modal show={showModal} close onCloseModal={closeModal}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Modal.Header>
            <FormattedMessage id={currentId ? 'global.update' : 'global.add'} />{' '}
            <FormattedMessage id="global.socialNetwork" values={{ social: 1 }} />
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
              <FormattedMessage id={currentId ? 'global.update' : 'global.add'} />
            </Button>
          </Modal.Actions>
        </form>
      </Modal>
    </>
  );
};

export default SocialNetworksForm;
