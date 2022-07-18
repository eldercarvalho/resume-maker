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
import Textarea from '@/components/base/Textarea';
import CrudList from '../CrudList';

const schema = yup.object().shape({
  title: yup.string().required('Campo obrigatório'),
  issuer: yup.string().required('Campo obrigatório'),
  date: yup.string().required('Campo obrigatório'),
});

type FormData = {
  title: string;
  issuer: string;
  date: string;
  summary: string;
};

const AwardsForm: React.FC = () => {
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
  const { activeResume, updateActiveResume } = useResume();
  const emptyMessage = intl.formatMessage(
    { id: 'sidebar.crudList.emptyMessage' },
    {
      gender: 'female',
      name: intl.formatMessage({ id: 'global.certification' }).toLowerCase(),
    },
  );

  const closeModal = () => {
    setShowModal(false);
    setCurrentId('');
    reset();
  };

  const handleFormSubmit = (data: FormData) => {
    if (currentId) {
      const updatedItems = activeResume.certifications.map((award) => {
        if (award.id === currentId) {
          return { id: award.id, ...data };
        }
        return award;
      });
      updateActiveResume({ ...activeResume, certifications: updatedItems });
      setCurrentId('');
    } else {
      updateActiveResume({
        ...activeResume,
        certifications: [...activeResume.certifications, { id: uuid(), ...data }],
      });
    }
    closeModal();
  };

  const onEdit = (id: string) => {
    const award = activeResume.certifications.find((certification) => certification.id === id);
    if (award) {
      setCurrentId(award.id);
      setValue('title', award.title);
      setValue('issuer', award.issuer);
      setValue('date', award.date);
      setValue('summary', award.summary);
      setShowModal(true);
    }
  };

  const handleDelete = (id: string) => {
    updateActiveResume({
      ...activeResume,
      certifications: activeResume.certifications.filter(
        (certification) => certification.id !== id,
      ),
    });
  };

  const handleDrag = (index: number, newIndex: number) => {
    const { certifications } = activeResume;
    const item = certifications.splice(index, 1)[0];
    certifications.splice(newIndex, 0, item);
    updateActiveResume({
      ...activeResume,
      certifications,
    });
  };

  return (
    <>
      <CrudList
        items={activeResume.certifications}
        propertyToShow="title"
        emptyMessage={emptyMessage}
        onAdd={() => setShowModal(true)}
        onEdit={onEdit}
        onDelete={handleDelete}
        onDrag={handleDrag}
      />

      <Modal show={showModal} close onCloseModal={closeModal}>
        <form onSubmit={handleSubmit(handleFormSubmit)}>
          <Modal.Header>
            <FormattedMessage id="global.certifications" />
          </Modal.Header>
          <Modal.Content>
            <Input
              label={intl.formatMessage({ id: 'sidebar.form.certifications.title' })}
              error={errors.title?.message}
              {...register('title')}
            />
            <Grid columns="1fr 1fr">
              <Input
                marginTop="2.6rem"
                label={intl.formatMessage({ id: 'sidebar.form.certifications.issuer' })}
                error={errors.issuer?.message}
                {...register('issuer')}
              />
              <Input
                type="date"
                label={intl.formatMessage({ id: 'sidebar.form.certifications.date' })}
                marginTop="2.6rem"
                error={errors.date?.message}
                {...register('date')}
              />
            </Grid>
            <Textarea
              label={intl.formatMessage({ id: 'sidebar.form.certifications.summary' })}
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

export default AwardsForm;
