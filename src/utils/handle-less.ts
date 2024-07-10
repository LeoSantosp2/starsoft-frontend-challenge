import { ProductCartProps } from '../types/products-props';

export const handleLess = (id: number, products: ProductCartProps[]) => {
  products.forEach((product) => {
    if (product.id === id) {
      if (product.qtd === 1) return;

      product.qtd -= 1;

      product.price = (
        Number(product.price) - Number(product.originalPrice)
      ).toString();
    }
  });

  localStorage.setItem('cart', JSON.stringify(products));

  window.location.reload();
};
