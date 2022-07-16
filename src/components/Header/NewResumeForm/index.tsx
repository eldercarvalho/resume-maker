import { ChangeEvent, useEffect, useState } from 'react';
import { FiFilePlus } from 'react-icons/fi';
import { FormattedMessage, useIntl } from 'react-intl';
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

import { S } from './styled';

const schema = yup.object().shape({
  resumeName: yup.string().required('Campo obrigatório'),
});

type FormData = {
  resumeName: string;
  resumeToBeCopiedId?: string;
  isImporting: boolean;
};

const NewResumeForm = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isImporting, setIsImporting] = useState(false);
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
  const { formatMessage: fm } = useIntl();
  const options = resumes.map((resume) => ({
    text: resume.resumeName,
    value: resume.id,
  }));

  useEffect(() => {
    register('resumeToBeCopiedId');
  }, []); // eslint-disable-line

  const closeModal = () => {
    setIsModalOpen(false);
    setIsImporting(false);
    reset();
  };

  const handleFormSubmit = (data: FormData) => {
    createResume(data.resumeName, data.isImporting ? data.resumeToBeCopiedId : undefined);
    closeModal();
  };

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    setIsImporting(event.target.checked);
  };

  return (
    <div>
      <Tooltip text={fm({ id: 'header.addForm.newResume' })}>
        <Button iconOnly textOnly onClick={() => setIsModalOpen((value) => !value)}>
          <FiFilePlus size={22} />
        </Button>
      </Tooltip>

      <Modal show={isModalOpen} close onCloseModal={closeModal}>
        <form onSubmit={handleSubmit(handleFormSubmit)}>
          <Modal.Header>{fm({ id: 'header.addForm.newResume' })}</Modal.Header>
          <Modal.Content>
            <Grid columns="1fr 1fr">
              <div>
                <Input
                  label={fm({ id: 'global.name' })}
                  error={errors?.resumeName?.message}
                  {...register('resumeName')}
                />

                <S.CheckboxLabel htmlFor="import">
                  <input
                    id="import"
                    type="checkbox"
                    checked={isImporting}
                    {...register('isImporting')}
                    onChange={handleCheckboxChange}
                  />
                  {fm({ id: 'header.addForm.import' })}
                </S.CheckboxLabel>
              </div>
              <div>
                <Select
                  placeholder={fm({ id: 'header.addForm.selectPlaceholder' })}
                  options={options}
                  disabled={!isImporting}
                  onChange={(value: string) => setValue('resumeToBeCopiedId', value)}
                />
              </div>
            </Grid>
          </Modal.Content>
          <Modal.Actions>
            <Button type="button" small outline onClick={() => closeModal()}>
              <FormattedMessage id="global.close" />
            </Button>
            <Button type="submit" small>
              {fm({ id: 'global.create' })}
            </Button>
          </Modal.Actions>
        </form>
      </Modal>
    </div>
  );
};

export default NewResumeForm;
