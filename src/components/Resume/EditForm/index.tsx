import { useState } from 'react';
import { useIntl } from 'react-intl';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { FiEdit } from 'react-icons/fi';
import * as yup from 'yup';

import { useResume } from '@/contexts/Resume';

import Button from '@/components/base/Button';
import Modal from '@/components/base/Modal';
import Input from '@/components/base/Input';
import Tooltip from '@/components/base/Tooltip';

const schema = yup.object().shape({
  resumeName: yup.string().required('Campo obrigatório'),
});

type FormData = {
  resumeName: string;
};

const fieldsNames: Record<string, keyof FormData> = {
  resumeName: 'resumeName',
};

const EditForm = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { activeResume, updateActiveResume } = useResume();
  const { formatMessage: fm } = useIntl();
  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const openModal = () => {
    setValue(fieldsNames.resumeName, activeResume.resumeName);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleFormSubmit = ({ resumeName }: FormData) => {
    updateActiveResume({
      ...activeResume,
      resumeName,
    });
    closeModal();
  };

  return (
    <>
      <Tooltip text={fm({ id: 'header.editForm.title' })}>
        <Button iconOnly reduced textOnly onClick={openModal}>
          <FiEdit size={16} />
        </Button>
      </Tooltip>

      <Modal show={isModalOpen} close onCloseModal={closeModal}>
        <form onSubmit={handleSubmit(handleFormSubmit)}>
          <Modal.Header>{fm({ id: 'header.editForm.title' })}</Modal.Header>
          <Modal.Content>
            <Input
              label={fm({ id: 'global.name' })}
              error={errors.resumeName?.message}
              {...register(fieldsNames.resumeName)}
            />
          </Modal.Content>
          <Modal.Actions>
            <Button type="button" small outline onClick={closeModal}>
              {fm({ id: 'global.close' })}
            </Button>
            <Button type="submit" small>
              {fm({ id: 'global.update' })}
            </Button>
          </Modal.Actions>
        </form>
      </Modal>
    </>
  );
};

export default EditForm;
