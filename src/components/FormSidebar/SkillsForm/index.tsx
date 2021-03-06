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
});

type FormData = {
  name: string;
  level: string;
};

const SkillsForm: React.FC = () => {
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
      name: intl.formatMessage({ id: 'global.skill' }).toLowerCase(),
    },
  );

  const handleFormSubmit = (data: FormData) => {
    if (currentId) {
      const updatedItems = activeResume.skills.map((skill) => {
        if (skill.id === currentId) {
          return { id: skill.id, ...data };
        }
        return skill;
      });
      updateActiveResume({ ...activeResume, skills: updatedItems });
      setCurrentId('');
    } else {
      updateActiveResume({
        ...activeResume,
        skills: [...activeResume.skills, { id: uuid(), ...data }],
      });
    }
    reset();
    setShowModal(false);
  };

  const onEdit = (id: string) => {
    const award = activeResume.skills.find((skill) => skill.id === id);
    if (award) {
      setCurrentId(award.id);
      setValue('name', award.name);
      setValue('level', award.level);
      setShowModal(true);
    }
  };

  const closeModal = () => {
    setShowModal(false);
    reset();
  };

  const handleDelete = (id: string) => {
    updateActiveResume({
      ...activeResume,
      skills: activeResume.skills.filter((skill) => skill.id !== id),
    });
  };

  const handleDrag = (index: number, newIndex: number) => {
    const { skills } = activeResume;
    const item = skills.splice(index, 1)[0];
    skills.splice(newIndex, 0, item);
    updateActiveResume({
      ...activeResume,
      skills,
    });
  };

  return (
    <>
      <CrudList
        items={activeResume.skills}
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
            <FormattedMessage id="global.skill" />
          </Modal.Header>
          <Modal.Content>
            <Grid columns="1fr 1fr">
              <Input
                label={intl.formatMessage({ id: 'sidebar.form.skills.name' })}
                error={errors.name?.message}
                {...register('name')}
              />
              <Input
                label={intl.formatMessage({ id: 'sidebar.form.skills.level' })}
                error={errors.level?.message}
                {...register('level')}
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

export default SkillsForm;
