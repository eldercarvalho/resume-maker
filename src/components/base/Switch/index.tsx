import { ChangeEvent } from 'react';
import { Container, FieldControl } from './styles';

interface SwitchProps {
  checked: boolean;
  disabled?: boolean;
  prependIcon?: React.ReactElement | HTMLImageElement | SVGAElement;
  appendIcon?: React.ReactElement | HTMLImageElement | SVGAElement;
  onChange(event: ChangeEvent): void;
}

const Switch: React.FC<SwitchProps> = ({ checked, disabled, onChange }) => (
  <Container aria-disabled={disabled} isChecked={checked}>
    <FieldControl>
      <input type="checkbox" checked={checked} disabled={disabled} onChange={onChange} />
      <span data-testid="thumb" />
    </FieldControl>
  </Container>
);

export default Switch;
