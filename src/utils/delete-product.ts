import { ProductCartProps } from '../types/products-props';

export const deleteProduct = (id: number) => {
  const response = localStorage.getItem('cart');

  const products = response ? JSON.parse(response) : [];

  const newProducts = products.filter(
    (product: ProductCartProps) => product.id !== id,
  );

  localStorage.setItem('cart', JSON.stringify(newProducts));

  window.location.reload();
};
