import { S } from './Text.styled';

type TextProps = {
  children?: React.ReactNode;
};

const Text = ({ children }: TextProps) => <S.Container>{children}</S.Container>;

export default Text;
