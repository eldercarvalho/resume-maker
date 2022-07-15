import { useCallback, useEffect, useRef, useState } from 'react';
import { FiChevronDown, FiX } from 'react-icons/fi';

import Loading from '../Loading';
import Input from '../Input';

import { Container, SelectedOption, Options } from './styles';

interface SelectOption {
  text: string;
  value: string;
}

interface SelectProps {
  name?: string;
  options: SelectOption[];
  value?: string;
  isLoading?: boolean;
  disabled?: boolean;
  placeholder?: string;
  emptyText?: string;
  notFountText?: string;
  onChange?(value: string): void;
}

const Select: React.FC<SelectProps> = ({
  options,
  value,
  isLoading = false,
  placeholder,
  emptyText,
  disabled = false,
  onChange,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isOptionsOpened, setIsOptionsOpened] = useState(false);
  const [currentOption, setCurrentOption] = useState<SelectOption>(() => {
    const current = options.find((option) => option.value === value);
    return current || { value: '', text: placeholder || '' };
  });

  const handleOutsideClick = useCallback(
    (event: globalThis.MouseEvent) => {
      if (containerRef && !containerRef.current?.contains(event.target as Node)) {
        setIsOptionsOpened(false);
      }
    },
    [setIsOptionsOpened],
  );

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []); // eslint-disable-line

  const handleOptionClick = (option: SelectOption) => {
    setCurrentOption(option);
    setIsOptionsOpened(false);

    if (onChange) {
      onChange(option.value);
    }
  };

  const clearOption = () => {
    setCurrentOption({ value: '', text: placeholder || '' });

    if (onChange) {
      onChange('');
    }
  };

  return (
    <Container ref={containerRef} isDisabled={disabled}>
      <SelectedOption>
        <Input
          placeholder={placeholder}
          readOnly
          onClick={() => setIsOptionsOpened((oldValue) => !oldValue)}
          value={currentOption.text}
          disabled={disabled}
        />

        {isLoading && <Loading size={22} thickness={2} />}
        {!isLoading && currentOption.value === '' && <FiChevronDown size={20} />}
        {!isLoading && currentOption.value !== '' && <FiX onClick={clearOption} size={20} />}
      </SelectedOption>

      <Options isOpened={isOptionsOpened}>
        <div>
          {options.length ? (
            options.map((option) => (
              <button key={option.value} type="button" onClick={() => handleOptionClick(option)}>
                {option.text}
              </button>
            ))
          ) : (
            <button type="button">{emptyText}</button>
          )}
        </div>
      </Options>
    </Container>
  );
};

export default Select;
