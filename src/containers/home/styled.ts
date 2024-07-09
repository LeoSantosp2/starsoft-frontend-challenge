import styled from 'styled-components';

export const Page = styled.section`
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const Main = styled.main`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ProductGrid = styled.div`
  margin: 3rem 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 2rem;
  row-gap: 2rem;
`;

export const ProductContainer = styled.div`
  width: 22rem;
  border-radius: 1rem;
  box-shadow: 0 0.2rem 0.8rem rgba(0, 0, 0, 0.1352);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.productContainerBg};

  .image {
    text-align: center;
  }

  .product-info {
    padding: 0 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .product-info h1 {
    font-size: 1.6rem;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.text};
  }

  .product-info p {
    padding: 0.5rem;
    border-radius: 0.5rem;
    font-size: 1.2rem;
    font-weight: 700;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.priceBg};
    color: ${({ theme }) => theme.colors.priceText};
  }

  .product-description {
    padding: 1rem;
  }

  .product-description p {
    font-weight: 300;
    text-align: justify;
    color: ${({ theme }) => theme.colors.text};
  }

  button {
    width: 100%;
    height: 3.1rem;
    border-radius: 0 0 0.8rem 0.8rem;
    border: 0;
    font-weight: 600;
    font-size: 1.4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.buttonText};
  }

  button svg {
    margin-right: 0.5rem;
  }
`;
