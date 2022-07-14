import { useEffect, useState } from 'react';
import { FiFilePlus } from 'react-icons/fi';
import { FormattedMessage } from 'react-intl';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { Grid } from '@/style/global';
import { useResume } from '@/contexts/Resume';

import Button from '@/components/base/Button';
import Modal from '@/components/base/Modal';
import Input from '@/components/base/Input';
import Select from '@/components/base/Select';
import Tooltip from '@/components/base/Tooltip';

const schema = yup.object().shape({
  resumeName: yup.string().required('Campo obrigatório'),
});

type FormData = {
  resumeName: string;
  resumeToBeCopiedId?: string;
};

const NewResumeForm = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { resumes, createResume } = useResume();
  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
    reset,
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const options = resumes.map((resume) => ({
    text: resume.resumeName,
    value: resume.id,
  }));

  useEffect(() => {
    register('resumeToBeCopiedId');
  }, []);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleFormSubmit = (data: FormData) => {
    createResume(data.resumeName, data.resumeToBeCopiedId);
    reset();
    closeModal();
  };

  return (
    <div>
      <Tooltip text="Novo Currículo">
        <Button iconOnly textOnly onClick={() => setIsModalOpen((value) => !value)}>
          <FiFilePlus size={22} />
        </Button>
      </Tooltip>

      <Modal show={isModalOpen} close onCloseModal={closeModal}>
        <form onSubmit={handleSubmit(handleFormSubmit)}>
          <Modal.Header>Novo Currículo</Modal.Header>
          <Modal.Content>
            <Grid columns="1fr 1fr">
              <Input label="Nome" error={errors?.resumeName?.message} {...register('resumeName')} />

              <Select
                options={options}
                onChange={(value: string) => setValue('resumeToBeCopiedId', value)}
              />
            </Grid>
          </Modal.Content>
          <Modal.Actions>
            <Button type="button" small outline onClick={() => setIsModalOpen(false)}>
              <FormattedMessage id="global.close" />
            </Button>
            <Button type="submit" small>
              Criar
            </Button>
          </Modal.Actions>
        </form>
      </Modal>
    </div>
  );
};

export default NewResumeForm;
