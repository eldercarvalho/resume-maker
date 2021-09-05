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
import CrudList from '../CrudList';

const schema = yup.object().shape({
  name: yup.string().required('Campo obrigatório'),
});

type FormData = {
  name: string;
};

const HobbiesForm: React.FC = () => {
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
      gender: 'male',
      name: intl.formatMessage({ id: 'global.hobbie' }).toLowerCase(),
    },
  );

  const closeModal = () => {
    setShowModal(false);
    setCurrentId('');
    reset();
  };

  const handleFormSubmit = (data: FormData) => {
    if (currentId) {
      const updatedItems = state.hobbies.map((item) => {
        if (item.id === currentId) {
          return { id: item.id, ...data };
        }
        return item;
      });
      updateState({ ...state, hobbies: updatedItems });
      setCurrentId('');
    } else {
      updateState({
        ...state,
        hobbies: [...state.hobbies, { id: uuid(), ...data }],
      });
    }
    closeModal();
  };

  const onEdit = (id: string) => {
    const award = state.hobbies.find((hobbie) => hobbie.id === id);
    if (award) {
      setCurrentId(award.id);
      setValue('name', award.name);
      setShowModal(true);
    }
  };

  const handleDelete = (id: string) => {
    updateState({
      ...state,
      certifications: state.certifications.filter((certification) => certification.id !== id),
    });
  };

  return (
    <>
      <CrudList
        items={state.hobbies}
        propertyToShow="name"
        emptyMessage={emptyMessage}
        onAdd={() => setShowModal(true)}
        onEdit={onEdit}
        onDelete={handleDelete}
      />

      <Modal show={showModal} close onCloseModal={closeModal}>
        <form onSubmit={handleSubmit(handleFormSubmit)}>
          <Modal.Header>
            <FormattedMessage id={currentId ? 'global.update' : 'global.add'} />{' '}
            <FormattedMessage id="global.hobbie" />
          </Modal.Header>
          <Modal.Content>
            <Input
              label={intl.formatMessage({ id: 'sidebar.form.hobbies.name' })}
              error={errors.name?.message}
              {...register('name')}
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

export default HobbiesForm;
