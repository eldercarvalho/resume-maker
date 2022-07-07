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
  institution: yup.string().required('Campo obrigatório'),
  fieldOfStudy: yup.string().required('Campo obrigatório'),
  typeOfDegree: yup.string().required('Campo obrigatório'),
  startDate: yup.string().required('Campo obrigatório'),
});

type FormData = {
  institution: string;
  fieldOfStudy: string;
  typeOfDegree: string;
  gpa: string;
  startDate: string;
  endDate: string;
  summary: string;
};

const EducationForm: React.FC = () => {
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
      name: intl.formatMessage({ id: 'global.education' }).toLowerCase(),
    },
  );

  const handleFormSubmit = (data: FormData) => {
    if (currentId) {
      const updatedEducation = state.education.map((education) => {
        if (education.id === currentId) {
          return { id: education.id, ...data };
        }
        return education;
      });
      updateState({ ...state, education: updatedEducation });
      setCurrentId('');
    } else {
      updateState({
        ...state,
        education: [...state.education, { id: uuid(), ...data }],
      });
    }
    reset();
    setShowModal(false);
  };

  const onEdit = (id: string) => {
    const education = state.education.find((e) => e.id === id);
    if (education) {
      setCurrentId(education.id);
      setValue('institution', education.institution);
      setValue('fieldOfStudy', education.fieldOfStudy);
      setValue('typeOfDegree', education.typeOfDegree);
      setValue('gpa', education.gpa);
      setValue('startDate', education.startDate);
      setValue('endDate', education.endDate);
      setValue('summary', education.summary);
      setShowModal(true);
    }
  };

  const closeModal = () => {
    setShowModal(false);
    reset();
  };

  const handleDelete = (id: string) => {
    updateState({
      ...state,
      education: state.education.filter((education) => education.id !== id),
    });
  };

  const handleDrag = (index: number, newIndex: number) => {
    const { education } = state;
    const item = education.splice(index, 1)[0];
    education.splice(newIndex, 0, item);
    updateState({
      ...state,
      education,
    });
  };

  return (
    <>
      <CrudList
        items={state.education}
        propertyToShow="fieldOfStudy"
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
            <FormattedMessage id="global.education" />
          </Modal.Header>
          <Modal.Content>
            <Input
              label={intl.formatMessage({ id: 'sidebar.form.education.institution' })}
              error={errors.institution?.message}
              {...register('institution')}
            />
            <Input
              marginTop="2.6rem"
              label={intl.formatMessage({ id: 'sidebar.form.education.fieldOfStudy' })}
              error={errors.fieldOfStudy?.message}
              {...register('fieldOfStudy')}
            />
            <Input
              label={intl.formatMessage({ id: 'sidebar.form.education.typeOfDegree' })}
              marginTop="2.6rem"
              error={errors.typeOfDegree?.message}
              {...register('typeOfDegree')}
            />
            <Grid columns="1fr 1fr">
              <Input
                type="date"
                label={intl.formatMessage({ id: 'sidebar.form.education.startDate' })}
                marginTop="2.6rem"
                error={errors.startDate?.message}
                {...register('startDate')}
              />
              <Input
                type="date"
                label={intl.formatMessage({ id: 'sidebar.form.education.endDate' })}
                marginTop="2.6rem"
                error={errors.endDate?.message}
                {...register('endDate')}
              />
            </Grid>
            <Textarea
              label={intl.formatMessage({ id: 'sidebar.form.education.summary' })}
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

export default EducationForm;
