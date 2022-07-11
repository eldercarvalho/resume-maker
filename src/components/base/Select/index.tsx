import { useCallback, useEffect, useRef, useState } from 'react';
import { FiChevronDown, FiX } from 'react-icons/fi';

import Loading from '../Loading';
import Input from '../Input';

import { Container, SelectedOption, Options } from './styles';

interface SelectOption {
  id: number;
  text: string;
}

interface SelectProps {
  options: SelectOption[];
  value?: number;
  isLoading?: boolean;
  onChange?(value: number | string): void;
}

const Select: React.FC<SelectProps> = ({ options, value, isLoading = false, onChange }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isOptionsOpened, setIsOptionsOpened] = useState(false);
  const [currentOption, setCurrentOption] = useState<SelectOption>(() => {
    const current = options.find((option) => option.id === value);
    return current || { id: 0, text: 'Selecione uma lista' };
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
      onChange(option.id);
    }
  };

  const clearOption = () => {
    setCurrentOption({ id: 0, text: 'Selecione uma lista' });

    if (onChange) {
      onChange('');
    }
  };

  return (
    <Container ref={containerRef}>
      <SelectedOption>
        <Input
          placeholder="Selecione uma lista"
          readOnly
          onClick={() => setIsOptionsOpened((oldValue) => !oldValue)}
          value={currentOption.text}
        />

        {isLoading && <Loading size={22} thickness={2} />}
        {!isLoading && currentOption.id === 0 && <FiChevronDown size={22} />}
        {!isLoading && currentOption.id !== 0 && <FiX onClick={clearOption} size={22} />}
      </SelectedOption>

      <Options isOpened={isOptionsOpened}>
        <div>
          {options.length ? (
            options.map((option) => (
              <button key={option.id} type="button" onClick={() => handleOptionClick(option)}>
                {option.text}
              </button>
            ))
          ) : (
            <button type="button">Nenhuma opção disponível</button>
          )}
        </div>
      </Options>
    </Container>
  );
};

export default Select;
