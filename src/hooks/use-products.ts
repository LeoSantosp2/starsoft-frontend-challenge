import { useState, useEffect, useCallback } from 'react';

import { ProductsProps } from '../types/products-props';

export const useProducts = () => {
  const [products, setProducts] = useState<ProductsProps[]>([]);

  const fetchProducts = useCallback(async () => {
    try {
      const response = await fetch(
        'https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=DESC',
      );

      const datas = await response.json();

      setProducts(datas.products);
    } catch (err) {
      console.log('Erro ao buscar os produtos:', (err as Error).message);
    }
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return {
    products,
  };
};
