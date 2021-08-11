import Header from '@/components/Header';
import Resume from '@/components/Resume';
import FormSidebar from '@/components/FormSidebar';

import { Container } from './style';

const Layout: React.FC = () => (
  <Container>
    <FormSidebar />

    <Header />

    <Resume />
  </Container>
);

export default Layout;
