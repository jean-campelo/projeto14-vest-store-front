import styled from "styled-components";
import product from "./productExemple.js";

export default function ViewProduct() {
  return (
    <Container>
      <Product>
        <img src={product.image} alt={product.description} />

        <Informations>
          <h1> {product.name} </h1>
          <h2>Descrição</h2>
          <h3> {product.description} </h3>
        </Informations>
      </Product>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #fff;
  display: flex;
  justify-content: center;
`;

const Product = styled.div`
  background-color: #055555;
  display: flex;
  flex-direction: column;

  img {
    height: 45vh;
  }
`;

const Informations = styled.div`
  font-family: "Outfit", sans-serif;
  background-color: #ffff00;
  margin-left: 16px;

  h1 {
    font-family: "Orbitron", sans-serif;
    font-size: 26px;
  }

  h2 {
    font-size: 16px;
  }

  h3 {
    font-weight: 400;
    margin-top: 2px;
    font-size: 14px;
  }
`;