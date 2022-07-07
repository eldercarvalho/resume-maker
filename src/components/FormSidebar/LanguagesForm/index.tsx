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
  fluency: yup.string().required('Campo obrigatório'),
});

type FormData = {
  name: string;
  fluency: string;
};

const LanguagesForm: React.FC = () => {
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
      name: intl.formatMessage({ id: 'global.language' }).toLowerCase(),
    },
  );

  const closeModal = () => {
    setShowModal(false);
    setCurrentId('');
    reset();
  };

  const handleFormSubmit = (data: FormData) => {
    if (currentId) {
      const updatedItems = state.languages.map((item) => {
        if (item.id === currentId) {
          return { id: item.id, ...data };
        }
        return item;
      });
      updateState({ ...state, languages: updatedItems });
      setCurrentId('');
    } else {
      updateState({
        ...state,
        languages: [...state.languages, { id: uuid(), ...data }],
      });
    }
    closeModal();
  };

  const onEdit = (id: string) => {
    const language = state.languages.find((l) => l.id === id);
    if (language) {
      setCurrentId(language.id);
      setValue('name', language.name);
      setValue('fluency', language.fluency);
      setShowModal(true);
    }
  };

  const handleDelete = (id: string) => {
    updateState({
      ...state,
      languages: state.languages.filter((language) => language.id !== id),
    });
  };

  const handleDrag = (index: number, newIndex: number) => {
    const { languages } = state;
    const item = languages.splice(index, 1)[0];
    languages.splice(newIndex, 0, item);
    updateState({
      ...state,
      languages,
    });
  };

  return (
    <>
      <CrudList
        items={state.languages}
        propertyToShow="name"
        emptyMessage={emptyMessage}
        onAdd={() => setShowModal(true)}
        onEdit={onEdit}
        onDelete={handleDelete}
        onDrag={handleDrag}
      />

      <Modal show={showModal} close onCloseModal={closeModal}>
        <form onSubmit={handleSubmit(handleFormSubmit)}>
          <Modal.Header>
            <FormattedMessage id={currentId ? 'global.update' : 'global.add'} />{' '}
            <FormattedMessage id="global.language" />
          </Modal.Header>
          <Modal.Content>
            <Grid columns="1fr 1fr">
              <Input
                label={intl.formatMessage({ id: 'sidebar.form.languages.name' })}
                error={errors.name?.message}
                {...register('name')}
              />
              <Input
                label={intl.formatMessage({ id: 'sidebar.form.languages.fluency' })}
                error={errors.fluency?.message}
                {...register('fluency')}
              />
            </Grid>
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

export default LanguagesForm;
