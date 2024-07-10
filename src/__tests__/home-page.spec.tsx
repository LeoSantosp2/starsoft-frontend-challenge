import { render } from '@testing-library/react';
import '@testing-library/dom';
import 'jest-localstorage-mock';

import HomePage from '../containers/home';
import HeaderComponent from '../components/header';
import FooterComponent from '../components/footer';
import ShoppingCartComponent from '../components/shopping-cart';
import Providers from '../providers';

jest.mock('../hooks/use-products', () => ({
  useProducts: jest.fn().mockReturnValue({
    data: { count: 0, products: [] },
    isPending: false,
    error: {},
  }),
}));

jest.mock('../utils/add-to-cart', () => ({
  addToCart: jest.fn(),
}));

describe('Home Page and Components', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('Should render the Home Page', () => {
    render(
      <Providers>
        <HomePage />
      </Providers>,
    );
  });

  it('Should render Header Component', () => {
    render(
      <Providers>
        <HeaderComponent />
      </Providers>,
    );
  });

  it('Should render Footer Component', () => {
    render(
      <Providers>
        <FooterComponent />
      </Providers>,
    );
  });

  it('Should render Shopping Cart Component', () => {
    render(
      <Providers>
        <ShoppingCartComponent />
      </Providers>,
    );
  });
});
