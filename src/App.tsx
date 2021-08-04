import { Localization } from '@/contexts/Localization';

import Layout from '@/components/Layout';

import { GlobalStyle } from './style/global';
import { Theme } from './contexts/Theme';

const App: React.FC = () => (
  <Theme>
    <Localization>
      <Layout />
      <GlobalStyle />
    </Localization>
  </Theme>
);
export default App;
