import { ProductCartProps } from '../types/products-props';

export const handleMore = (id: number, products: ProductCartProps[]) => {
  products.forEach((product) => {
    if (product.id === id) {
      product.qtd += 1;
      product.price = (
        Number(product.originalPrice) * Number(product.qtd)
      ).toString();
    }
  });

  localStorage.setItem('cart', JSON.stringify(products));

  window.location.reload();
};
