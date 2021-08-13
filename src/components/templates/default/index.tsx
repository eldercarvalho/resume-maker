import { useResume } from '@/contexts/Resume';
import { FormattedMessage } from 'react-intl';

import { Sheet, Header } from './styles';

const Default: React.FC = () => {
  const { state } = useResume();

  return (
    <Sheet className="sheet">
      <Header>
        <h1>{state.name}</h1>
        <p>{state.title}</p>
        <p>{state.birthDate}</p>
        <h2>
          <FormattedMessage id="sidebar.form.address.address" />:
        </h2>
        <p>
          {state.address} {state.city} {state.zipCode}
        </p>
      </Header>
    </Sheet>
  );
};

export default Default;
