import { ProductsProps } from '../types/products-props';

export const addToCart = (product: ProductsProps) => {
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
