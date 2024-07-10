import Image from 'next/image';
import { IoMdClose } from 'react-icons/io';
import { useState, useEffect } from 'react';

import { useShowHidden } from '../../context/show-hidden';

import { handleMore } from '../../utils/handle-more';
import { handleLess } from '../../utils/handle-less';
import { deleteProduct } from '../../utils/delete-product';

import { ProductCartProps } from '../../types/products-props';

import * as Styles from './styled';

export default function ShoppingCartComponent() {
  const [products, setProducts] = useState<ProductCartProps[]>([]);
  const [total, setTotal] = useState(0);

  const { showHidden, handleShowHidden } = useShowHidden();

  useEffect(() => {
    const response = localStorage.getItem('cart');

    const newProducts = response ? JSON.parse(response) : [];

    setProducts(newProducts);

    if (newProducts.length > 0) {
      let sum = 0;

      newProducts.forEach((product: ProductCartProps) => {
        sum = sum + Number(product.price);
      });

      setTotal(sum);
    }
  }, []);

  return (
    <Styles.Container style={{ right: showHidden }}>
      <div className="header">
        <h1>Carrinho de compras</h1>

        <button onClick={() => handleShowHidden(-999)}>
          <IoMdClose size={22} />
        </button>
      </div>

      <div className="products">
        {products.map((product) => (
          <div className="product" key={product.id}>
            <div className="photo">
              <Image
                src={product.photo}
                alt="Product Photo"
                width={80}
                height={80}
                loader={() => product.photo}
              />

              <p>{product.name}</p>
            </div>

            <div className="qtd">
              <p>Qtd</p>
              <div>
                <button
                  className="less"
                  onClick={() => handleLess(product.id, products)}
                >
                  -
                </button>
                <p>{product.qtd}</p>
                <button
                  className="more"
                  onClick={() => handleMore(product.id, products)}
                >
                  +
                </button>
              </div>
            </div>

            <div className="price">
              <p>R${product.price}</p>
            </div>

            <button
              className="delete-product"
              onClick={() => deleteProduct(product.id)}
            >
              <IoMdClose size={22} />
            </button>
          </div>
        ))}
      </div>

      <div className="footer">
        <div className="total">
          <p>Total:</p>
          <p>R${total}</p>
        </div>

        <button>Finalizar Compra</button>
      </div>
    </Styles.Container>
  );
}
