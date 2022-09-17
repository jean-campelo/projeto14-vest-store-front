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
          <Sizes>
            <h2> Tamanhos </h2>
            <div>
              {product.sizes.map((value) => (
                <div className="details">{value}</div>
              ))}
            </div>
          </Sizes>
        </Informations>
      </Product>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #fffafa;
  display: flex;
  justify-content: center;
`;

const Product = styled.div`
  display: flex;
  flex-direction: column;

  img {
    height: 45vh;
  }
`;

const Informations = styled.div`
  font-family: "Outfit", sans-serif;
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

const Sizes = styled.div`
  div {
    display: flex;
  }

  .details {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #4b4b4c;
    width: 24px;
    height: 24px;
    border: 1px solid #4b4b4c;
    border-radius: 50px;
    margin-right: 8px;
    font-size: 12px;
  }
`;
