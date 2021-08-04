import {
  forwardRef,
  InputHTMLAttributes,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';

import generateRandomKey from '../../../utils/generateRandomKey';

import { Container, Error } from './styles';

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  id?: string;
  error?: string;
  prependIcon?: string;
  dark?: boolean;
  label?: string;
}

const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  (
    {
      id = generateRandomKey(8),
      type = 'text',
      className,
      error,
      label,
      dark = false,
      ...rest
    },
    forwardedRef,
  ) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [innerType, setInnerType] = useState(type);
    const [isFocused, setIsFocused] = useState(false);
    const [isFilled, setIsFilled] = useState(false);
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    useImperativeHandle(forwardedRef, () =>
      inputRef.current ? inputRef.current : document.createElement('input'),
    );

    const handleFocus = () => {
      setIsFocused(true);
    };

    const handleBlur = () => {
      setIsFocused(false);
      setIsFilled(!!inputRef.current?.value);
    };

    const handlePasswordVisibilityClick = () => {
      const currentType = !isPasswordVisible ? 'text' : 'password';
      setInnerType(currentType);
      setIsPasswordVisible((oldValue) => !oldValue);
    };

    return (
      <Container
        className={className}
        isFocused={isFocused}
        isFilled={isFilled}
        isErrored={!!error}
        dark={dark}
      >
        {label && <label htmlFor={id}>{label}</label>}
        <div>
          <input
            ref={inputRef}
            id={id}
            type={innerType}
            onFocus={handleFocus}
            onBlur={handleBlur}
            {...rest}
          />

          {type === 'password' && (
            <button type="button" onClick={handlePasswordVisibilityClick}>
              {isPasswordVisible ? <FiEyeOff size={20} /> : <FiEye size={20} />}
            </button>
          )}
        </div>
        {error && <Error>{error}</Error>}
      </Container>
    );
  },
);

export default TextField;
