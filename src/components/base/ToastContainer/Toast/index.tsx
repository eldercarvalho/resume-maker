import { FiAlertCircle, FiCheckCircle, FiInfo, FiXCircle } from 'react-icons/fi';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Container } from './styles';

import { ToastData, removeToast } from '../../../../store/slices/feedback';

interface ToastProps {
  data: ToastData;
  style: Record<string, unknown>;
}

const icons = {
  info: <FiInfo size={24} />,
  error: <FiAlertCircle size={24} />,
  success: <FiCheckCircle size={24} />,
};

const Toast: React.FC<ToastProps> = ({ data, style }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = window.setTimeout(() => {
      dispatch(removeToast(data.id));
    }, 6000);

    return () => {
      window.clearTimeout(timer);
    };
  }, [data.id, dispatch]);

  return (
    <Container type={data.type} style={style}>
      {icons[data.type] || 'info'}

      <div>
        <h3>{data.title}</h3>
        <p>{data.message}</p>
      </div>

      <button type="button" onClick={() => dispatch(removeToast(data.id))}>
        <FiXCircle size={18} />
      </button>
    </Container>
  );
};

export default Toast;
