import Image from 'next/image';
import { RiShoppingBag2Line } from 'react-icons/ri';

import HeaderComponent from '../../components/header';
import FooterComponent from '../../components/footer';
import ShoppingCartComponent from '../../components/shopping-cart';

import { useProducts } from '../../hooks/use-products';

import { ProductsProps } from '../../types/products-props';

import * as Styles from './styled';

export default function HomePage() {
  const { products } = useProducts();

  const addToCart = (product: ProductsProps) => {
    const response = localStorage.getItem('cart');

    const products = response ? JSON.parse(response) : [];

    const newProduct = {
      id: product.id,
      name: product.name,
      brand: product.brand,
      description: product.description,
      photo: product.photo,
      originalPrice: product.price,
      price: product.price,
      qtd: 1,
    };

    const newProducs = [...products, newProduct];

    localStorage.setItem('cart', JSON.stringify(newProducs));

    window.location.reload();
  };

  return (
    <Styles.Page>
      <ShoppingCartComponent />

      <HeaderComponent />

      <Styles.Main>
        <Styles.ProductGrid>
          {products.map((product) => (
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
