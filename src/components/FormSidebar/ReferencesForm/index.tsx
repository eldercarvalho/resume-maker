import { useEffect, useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { v4 as uuid } from 'uuid';

import { Reference, useResume } from '@/contexts/Resume';
import Input from '@/components/base/Input';
import Modal from '@/components/base/Modal';
import Button from '@/components/base/Button';
import { Grid } from '@/style/global';
import Textarea from '@/components/base/Textarea';
import CrudList from '../CrudList';

const schema = yup.object().shape({
  name: yup.string().required('Campo obrigatório'),
  position: yup.string().required('Campo obrigatório'),
  phoneNumber: yup.string().required('Campo obrigatório'),
  email: yup.string().required('Campo obrigatório'),
});

type FormData = {
  name: string;
  position: string;
  phoneNumber: string;
  email: string;
  summary: string;
};

const ReferencesForm: React.FC = () => {
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
  const [references, setReference] = useState<Reference[]>([]);
  const { state: contextState, updateState } = useResume();
  const emptyMessage = intl.formatMessage(
    { id: 'sidebar.crudList.emptyMessage' },
    {
      gender: 'male',
      name: intl.formatMessage({ id: 'global.reference' }).toLowerCase(),
    },
  );

  useEffect(() => {
    updateState({
      ...contextState,
      references,
    });
  }, [references]);

  const closeModal = () => {
    setShowModal(false);
    setCurrentId('');
    reset();
  };

  const handleFormSubmit = (data: FormData) => {
    if (currentId) {
      const updatedItems = references.map((item) => {
        if (item.id === currentId) {
          return { id: item.id, ...data };
        }
        return item;
      });
      setReference(updatedItems);
      setCurrentId('');
    } else {
      setReference([...references, { id: uuid(), ...data }]);
    }
    closeModal();
  };

  const onEdit = (id: string) => {
    const reference = references.find((sn) => sn.id === id);
    if (reference) {
      setCurrentId(reference.id);
      setValue('name', reference.name);
      setValue('position', reference.position);
      setValue('phoneNumber', reference.phoneNumber);
      setValue('email', reference.email);
      setValue('summary', reference.summary);
      setShowModal(true);
    }
  };

  const handleDelete = (id: string) => {
    setReference(references.filter((project) => project.id !== id));
  };

  return (
    <>
      <CrudList
        items={references}
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
            <FormattedMessage id="global.reference" />
          </Modal.Header>
          <Modal.Content>
            <Grid columns="1fr 1fr">
              <Input
                label={intl.formatMessage({ id: 'sidebar.form.references.name' })}
                error={errors.name?.message}
                {...register('name')}
              />
              <Input
                label={intl.formatMessage({ id: 'sidebar.form.references.position' })}
                error={errors.position?.message}
                {...register('position')}
              />
            </Grid>
            <Grid columns="1fr 1fr">
              <Input
                marginTop="2.6rem"
                label={intl.formatMessage({ id: 'sidebar.form.references.phoneNumber' })}
                error={errors.phoneNumber?.message}
                {...register('phoneNumber')}
              />
              <Input
                marginTop="2.6rem"
                label={intl.formatMessage({ id: 'sidebar.form.references.email' })}
                error={errors.email?.message}
                {...register('email')}
              />
            </Grid>
            <Textarea
              label={intl.formatMessage({ id: 'sidebar.form.references.summary' })}
              marginTop="2.6rem"
              {...register('summary')}
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

export default ReferencesForm;
