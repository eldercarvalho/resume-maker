import { FC, ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { Theme, Localization } from '@/contexts';

const AllProviders: FC = ({ children }) => (
  <Localization>
    <Theme>{children}</Theme>
  </Localization>
);

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
  render(ui, { wrapper: AllProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };
