import { forwardRef, ChangeEvent, TextareaHTMLAttributes } from 'react';

import { Container } from './styles';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  marginTop?: string;
  onChange?(event: ChangeEvent<HTMLTextAreaElement>): void;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ name, label, value, marginTop, onChange, ...props }, forwardedRef) => (
    <Container mt={marginTop}>
      {label && <label htmlFor={name}>{label}</label>}
      <textarea
        ref={forwardedRef}
        id={name}
        name={name}
        value={value}
        {...props}
        onChange={onChange}
      />
    </Container>
  ),
);

export default Textarea;
