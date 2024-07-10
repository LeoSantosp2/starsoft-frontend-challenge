import Image from 'next/image';
import { RiShoppingBag2Line } from 'react-icons/ri';

import HeaderComponent from '../../components/header';
import FooterComponent from '../../components/footer';
import ShoppingCartComponent from '../../components/shopping-cart';

import { useProducts } from '../../hooks/use-products';

import { addToCart } from '../../utils/add-to-cart';

import { ProductsProps } from '../../types/products-props';

import * as Styles from './styled';

export default function HomePage() {
  const { data, isPending } = useProducts();

  if (isPending) {
    return <p>Carregando...</p>;
  }

  return (
    <Styles.Page>
      <ShoppingCartComponent />

      <HeaderComponent />

      <Styles.Main>
        <Styles.ProductGrid>
          {data?.products.map((product: ProductsProps) => (
            <Styles.ProductContainer key={product.id}>
              <div className="image">
                <Image
                  src={product.photo}
                  alt="Product Photo"
                  width={100}
                  height={100}
                  loader={() => product.photo}
                />
              </div>

              <div className="product-info">
                <h1>{product.name}</h1>
                <p>R${product.price}</p>
              </div>

              <div className="product-description">
                <p>{product.description}</p>
              </div>

              <button onClick={() => addToCart(product)}>
                <RiShoppingBag2Line />
                Comprar
              </button>
            </Styles.ProductContainer>
          ))}
        </Styles.ProductGrid>
      </Styles.Main>

      <FooterComponent />
    </Styles.Page>
  );
}
