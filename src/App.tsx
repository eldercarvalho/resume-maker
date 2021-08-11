import { Localization } from '@/contexts/Localization';

import Layout from '@/components/Layout';

import { GlobalStyle } from './style/global';
import { Theme } from './contexts/Theme';
import { ResumeProvider } from './contexts/Resume';

const App: React.FC = () => (
  <Theme>
    <Localization>
      <ResumeProvider>
        <Layout />
        <GlobalStyle />
      </ResumeProvider>
    </Localization>
  </Theme>
);
export default App;
