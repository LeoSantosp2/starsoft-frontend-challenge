import { BsCart4 } from 'react-icons/bs';
import { useState, useEffect } from 'react';

import { useShowHidden } from '../../context/show-hidden';

import * as Styles from './styled';

export default function HeaderComponent() {
  const [productQtd, setProductQtd] = useState(0);

  const { handleShowHidden } = useShowHidden();

  useEffect(() => {
    const response = localStorage.getItem('cart');

    const products = response ? JSON.parse(response) : [];

    setProductQtd(products.length);
  }, []);

  return (
    <Styles.Header>
      <h1>
        <span>mks</span> Sistemas
      </h1>

      <button onClick={() => handleShowHidden(0)}>
        <BsCart4 size={22} />
        {productQtd}
      </button>
    </Styles.Header>
  );
}
