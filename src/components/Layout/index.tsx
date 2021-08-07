import Header from '@/components/Header';
import FormSidebar from '../FormSidebar';

import { Container } from './style';

const Layout: React.FC = () => (
  <Container>
    <FormSidebar />

    <Header>teste</Header>
    <div />
  </Container>
);

export default Layout;
