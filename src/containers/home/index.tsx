import Image from 'next/image';
import { RiShoppingBag2Line } from 'react-icons/ri';

import HeaderComponent from '../../components/header';
import FooterComponent from '../../components/footer';

import { useProducts } from '../../hooks/use-products';

import * as Styles from './styled';

export default function HomePage() {
  const { products } = useProducts();

  return (
    <Styles.Page>
      <HeaderComponent />

      <Styles.Main>
        <Styles.ProductGrid>
          {products.map((product) => (
            <Styles.ProductContainer key={product.id}>
              <div className="image">
                <Image
                  src={product.photo}
                  alt="Product Photo"
                  width={150}
                  height={150}
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

              <button>
                <RiShoppingBag2Line size={18} /> Comprar
              </button>
            </Styles.ProductContainer>
          ))}
        </Styles.ProductGrid>
      </Styles.Main>

      <FooterComponent />
    </Styles.Page>
  );
}
