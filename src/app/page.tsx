'use client';

import HomePage from '../containers/home';

type Props = {
  count: number;
  products: Producst[];
};

export default function Home() {
  return <HomePage />;
}
