import { Localization } from '@/contexts/Localization';

import Layout from '@/components/Layout';

const App: React.FC = () => (
  <Localization>
    <Layout />
  </Localization>
);
export default App;
