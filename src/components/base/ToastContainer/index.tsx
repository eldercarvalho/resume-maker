import { useSelector } from 'react-redux';
import { useTransition } from 'react-spring';

import { RootState } from '../../../store';

import Toast from './Toast';

import { Container } from './styles';

const ToastContainer: React.FC = () => {
  const toasts = useSelector((state: RootState) => state.feedback.toasts);

  const toastsWithTransition = useTransition(toasts, (toast) => toast.id, {
    from: { right: '-110%', opacity: 0 },
    enter: { right: '5px', opacity: 1 },
    leave: { right: '-110%', opacity: 0 },
  });

  return (
    <Container>
      {toastsWithTransition.map(({ item, key, props }) => (
        <Toast key={key} data={item} style={props} />
      ))}
    </Container>
  );
};

export default ToastContainer;
