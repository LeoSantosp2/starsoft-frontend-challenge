'use client';

import { ThemeProvider } from 'styled-components';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

import { ShowHiddenProvider } from '../context/show-hidden';

import { theme } from '../styles/theme';
import { GlobalStyles } from '../styles/global-styles';

const queryClient = new QueryClient();

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <GlobalStyles />
        <ShowHiddenProvider>{children}</ShowHiddenProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}
