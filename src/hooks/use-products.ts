import { useQuery } from '@tanstack/react-query';

import { DataProps } from '../types/data-props';

export const useProducts = () => {
  const fetchProducts = async () => {
    try {
      const response = await fetch(
        'https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=DESC',
      );

      const datas = await response.json();

      return datas;
    } catch (err) {
      console.log('Erro ao buscar os produtos:', (err as Error).message);
    }
  };

  const { data, isPending } = useQuery<DataProps>({
    queryKey: ['products'],
    queryFn: fetchProducts,
  });

  return {
    data,
    isPending,
  };
};
