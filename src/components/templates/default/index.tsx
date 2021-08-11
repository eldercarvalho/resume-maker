import { useResume } from '@/contexts/Resume';

import { Sheet, Header } from './styles';

const Default: React.FC = () => {
  const { state } = useResume();

  return (
    <Sheet className="sheet">
      <Header>
        <h1>{state.name}</h1>
        <p>{state.title}</p>
        <p>{state.birthDate}</p>
      </Header>
    </Sheet>
  );
};

export default Default;
