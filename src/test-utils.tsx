import { FC, ReactElement, ReactNode } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { Theme, Localization } from '@/contexts';

interface AllProvidersProps {
  children?: ReactNode;
}

const AllProviders: FC<AllProvidersProps> = ({ children = null }) => (
  <Localization>
    <Theme>{children}</Theme>
  </Localization>
);

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
  render(ui, { wrapper: AllProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };
