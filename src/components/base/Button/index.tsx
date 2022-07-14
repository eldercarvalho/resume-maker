import React, { ButtonHTMLAttributes, useCallback, MouseEvent } from 'react';
import { useHistory } from 'react-router-dom';

import Loading from '../Loading';

import { S } from './styled';

type LocationObject = {
  pathname: string;
  state?: Record<string, string>;
};

interface StyledNamespace {
  S: typeof S;
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  to?: string | LocationObject;
  iconOnly?: boolean;
  full?: boolean;
  small?: boolean;
  disabled?: boolean;
  textOnly?: boolean;
  light?: boolean;
  outline?: boolean;
  loading?: boolean;
  rounded?: boolean;
  reduced?: boolean;
}

const Button: React.FC<ButtonProps> & StyledNamespace = ({
  variant = 'primary',
  children,
  to,
  onClick,
  iconOnly,
  full,
  small,
  disabled = false,
  textOnly,
  light = false,
  outline,
  loading = false,
  rounded = false,
  reduced = false,
  ...rest
}) => {
  const history = useHistory();

  const handleClick = useCallback(
    (event: MouseEvent<HTMLButtonElement>) => {
      event.stopPropagation();

      if (onClick && !disabled) {
        onClick(event);
      }

      if (to && !disabled) {
        history.push(to);
      }
    },
    [history, onClick, to, disabled],
  );

  return (
    <S.Container
      type="button"
      variant={variant}
      isIconOnly={iconOnly}
      isFull={full}
      isSmall={small}
      isDisabled={disabled}
      isTextOnly={textOnly}
      isLigthed={light}
      isOutlined={outline}
      isLoading={loading}
      isRounded={rounded}
      isReduced={reduced}
      onClick={handleClick}
      {...rest}
    >
      {loading ? <Loading dark size={22} thickness={2} /> : children}
    </S.Container>
  );
};

Button.S = S;

export default Button;
