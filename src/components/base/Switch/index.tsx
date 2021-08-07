import { ChangeEvent } from 'react';
import { IconType } from 'react-icons/lib';
import { Container, FieldControl } from './styles';

interface SwitchProps {
  checked: boolean;
  disabled?: boolean;
  prependIcon?: IconType;
  appendIcon?: IconType;
  onChange(event: ChangeEvent): void;
}

const Switch: React.FC<SwitchProps> = ({
  checked,
  disabled,
  prependIcon: PrependIcon,
  appendIcon: AppendIcon,
  onChange,
}) => (
  <Container aria-disabled={disabled} isChecked={checked}>
    {PrependIcon && <PrependIcon size={18} className="prepend-icon" />}
    <FieldControl>
      <input type="checkbox" checked={checked} disabled={disabled} onChange={onChange} />
      <span data-testid="thumb" />
    </FieldControl>
    {AppendIcon && <AppendIcon size={18} className="append-icon" />}
  </Container>
);

export default Switch;
