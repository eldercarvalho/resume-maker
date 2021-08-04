import { Container } from './styles';

interface LoadingProps {
  dark?: boolean;
  size?: number;
  screenCenter?: boolean;
  thickness?: number;
}

const Loading: React.FC<LoadingProps> = ({
  size = 50,
  dark = false,
  screenCenter = false,
  thickness = 4,
}) => (
  <Container size={size} isDark={dark} screenCenter={screenCenter} thickness={thickness}>
    <span />
  </Container>
);

export default Loading;
