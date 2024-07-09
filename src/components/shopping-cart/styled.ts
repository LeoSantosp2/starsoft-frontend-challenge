import styled from 'styled-components';

export const Container = styled.div`
  width: 30%;
  height: 100vh;
  box-shadow: -0.5rem 0 0.6rem rgba(0, 0, 0, 0.13);
  transition: all 0.3s ease;
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: scroll;
  overflow-x: hidden;
  background-color: ${({ theme }) => theme.colors.secondary};

  .header {
    width: 100%;
    padding: 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .header h1 {
    font-size: 2.5rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.white};
  }

  .header button {
    width: 3.8rem;
    height: 3.8rem;
    border-radius: 50%;
    border: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.white};
  }

  .products {
    width: 100%;
  }

  .products .product {
    width: 80%;
    height: 9.5rem;
    margin: 1rem auto;
    padding: 0 0.5rem;
    border-radius: 0.8rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    background-color: ${({ theme }) => theme.colors.white};
  }

  .products .product .photo {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .products .product .photo p {
    font-size: 1.3rem;
    font-weight: 400;
  }

  .products .product .qtd {
    margin: 0 0.5rem;
  }

  .products .product .qtd div {
    display: flex;
  }

  .products .product .qtd div button {
    width: 2rem;
    height: 2rem;
    border: 0.1rem solid #bfbfbf;
    cursor: pointer;
    background-color: transparent;
  }

  .products .product .qtd div .less {
    border-radius: 0.4rem 0 0 0.4rem;
  }

  .products .product .qtd div .more {
    border-radius: 0 0.4rem 0.4rem 0;
  }

  .products .product .qtd div p {
    width: 2rem;
    height: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 0.1rem solid #bfbfbf;
    border-bottom: 0.1rem solid #bfbfbf;
  }

  .products .product .price p {
    font-size: 1.4rem;
    font-weight: 700;
  }

  .products .product .delete-product {
    width: 1.8rem;
    height: 1.8rem;
    border-radius: 50%;
    border: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: -0.5rem;
    right: -0.5rem;
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.white};
  }

  .footer .total {
    width: 100%;
    margin: 1rem 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .footer .total p {
    font-size: 2.8rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.white};
  }

  .footer button {
    width: 100%;
    height: 6rem;
    font-size: 2.8rem;
    font-weight: 700;
    border: 0;
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.white};
  }
`;
