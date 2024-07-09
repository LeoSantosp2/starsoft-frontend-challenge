'use client';

import { ThemeProvider } from 'styled-components';
import { Montserrat } from 'next/font/google';

import { GlobalStyles } from '../styles/global-styles';
import { theme } from '../styles/theme';

const montserrant = Montserrat({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <html lang="pt-BR">
        <title>Model Project NextJs</title>
        <body className={montserrant.className}>{children}</body>
      </html>
    </ThemeProvider>
  );
}
