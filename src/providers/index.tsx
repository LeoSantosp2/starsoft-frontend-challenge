'use client';

import { ThemeProvider } from 'styled-components';

import { ShowHiddenProvider } from '../context/show-hidden';

import { theme } from '../styles/theme';
import { GlobalStyles } from '../styles/global-styles';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <ShowHiddenProvider>{children}</ShowHiddenProvider>
    </ThemeProvider>
  );
}
