import { Container } from './styles';

interface TooltipProps {
  text: string;
}

const Tooltip: React.FC<TooltipProps> = ({ children, text }) => (
  <Container>
    {children}
    <span>{text}</span>
  </Container>
);

export default Tooltip;
