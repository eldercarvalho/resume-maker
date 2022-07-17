import { useState } from 'react';
import { FiTrash } from 'react-icons/fi';
import { useIntl } from 'react-intl';

import { useResume } from '@/contexts/Resume';
import Button from '@/components/base/Button';
import Modal from '@/components/base/Modal';
import Tooltip from '@/components/base/Tooltip';
import Text from '@/components/base/Text';

const RemoveDialog = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { formatMessage: fm } = useIntl();
  const { state, resumes, removeResume } = useResume();

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleRemove = () => {
    removeResume(state.id);
    closeModal();
  };

  return (
    <>
      {resumes.length > 1 && (
        <Tooltip text={fm({ id: 'resume.removeDialog.tooltip' })}>
          <Button iconOnly reduced textOnly onClick={() => setIsModalOpen(true)}>
            <FiTrash size={16} />
          </Button>
        </Tooltip>
      )}

      <Modal show={isModalOpen} close onCloseModal={closeModal} width={300}>
        <Modal.Header>{fm({ id: 'resume.removeDialog.title' })}</Modal.Header>
        <Modal.Content>
          <Text>
            {fm(
              { id: 'resume.removeDialog.text' },
              { resumeName: <strong>{state.resumeName}</strong> },
            )}
          </Text>
        </Modal.Content>
        <Modal.Actions>
          <Button type="button" small outline onClick={closeModal}>
            {fm({ id: 'global.close' })}
          </Button>
          <Button type="submit" small onClick={handleRemove}>
            {fm({ id: 'global.remove' })}
          </Button>
        </Modal.Actions>
      </Modal>
    </>
  );
};

export default RemoveDialog;
