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
  website: yup.string().required('Campo obrigatório'),
  startDate: yup.string().required('Campo obrigatório'),
  endDate: yup.string().required('Campo obrigatório'),
});

type FormData = {
  title: string;
  website: string;
  startDate: string;
  endDate: string;
  summary: string;
};

const ProjectsForm: React.FC = () => {
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
      gender: 'male',
      name: intl.formatMessage({ id: 'global.project' }).toLowerCase(),
    },
  );

  const closeModal = () => {
    setShowModal(false);
    setCurrentId('');
    reset();
  };

  const handleFormSubmit = (data: FormData) => {
    if (currentId) {
      const updatedItems = activeResume.projects.map((project) => {
        if (project.id === currentId) {
          return { id: project.id, ...data };
        }
        return project;
      });
      updateActiveResume({ ...activeResume, projects: updatedItems });
      setCurrentId('');
    } else {
      updateActiveResume({
        ...activeResume,
        projects: [...activeResume.projects, { id: uuid(), ...data }],
      });
    }

    closeModal();
  };

  const onEdit = (id: string) => {
    const project = activeResume.projects.find((item) => item.id === id);
    if (project) {
      setCurrentId(project.id);
      setValue('title', project.title);
      setValue('website', project.website);
      setValue('startDate', project.startDate);
      setValue('endDate', project.endDate);
      setValue('summary', project.summary);
      setShowModal(true);
    }
  };

  const handleDelete = (id: string) => {
    updateActiveResume({
      ...activeResume,
      projects: activeResume.projects.filter((certification) => certification.id !== id),
    });
  };

  return (
    <>
      <CrudList
        items={activeResume.projects}
        propertyToShow="title"
        emptyMessage={emptyMessage}
        onAdd={() => setShowModal(true)}
        onEdit={onEdit}
        onDelete={handleDelete}
      />

      <Modal show={showModal} close onCloseModal={closeModal}>
        <form onSubmit={handleSubmit(handleFormSubmit)}>
          <Modal.Header>
            <FormattedMessage id={currentId ? 'global.update' : 'global.add'} />{' '}
            <FormattedMessage id="global.project" />
          </Modal.Header>
          <Modal.Content>
            <Input
              label={intl.formatMessage({ id: 'sidebar.form.projects.title' })}
              error={errors.title?.message}
              {...register('title')}
            />
            <Input
              marginTop="2.6rem"
              label={intl.formatMessage({ id: 'sidebar.form.projects.website' })}
              error={errors.website?.message}
              {...register('website')}
            />
            <Grid columns="1fr 1fr">
              <Input
                type="date"
                label={intl.formatMessage({ id: 'sidebar.form.projects.startDate' })}
                marginTop="2.6rem"
                error={errors.startDate?.message}
                {...register('startDate')}
              />
              <Input
                type="date"
                label={intl.formatMessage({ id: 'sidebar.form.projects.endDate' })}
                marginTop="2.6rem"
                error={errors.endDate?.message}
                {...register('endDate')}
              />
            </Grid>
            <Textarea
              label={intl.formatMessage({ id: 'sidebar.form.projects.summary' })}
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

export default ProjectsForm;
