export type ProductsProps = {
  id: number;
  name: string;
  brand: string;
  description: string;
  photo: string;
  price: string;
  createdAt: string;
  updatedAt: string;
};

export type ProductCartProps = {
  id: number;
  name: string;
  brand: string;
  description: string;
  photo: string;
  originalPrice: string;
  price: string;
  qtd: number;
};
