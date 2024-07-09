import { Montserrat } from 'next/font/google';

import Providers from '../providers';

const montserrant = Montserrat({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      <html lang="pt-BR">
        <title>MKS Sistemas</title>
        <body className={montserrant.className}>{children}</body>
      </html>
    </Providers>
  );
}
