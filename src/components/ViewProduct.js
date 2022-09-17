import styled from "styled-components";
import { useState } from "react";
import product from "./productExemple.js";

export default function ViewProduct() {
  const [qtd, setQtd] = useState(0);

  return (
    <Container>
      <Product>
        <img src={product.image} alt={product.description} />

        <Informations>
          <h1> {product.name} </h1>
          <h2>Descrição</h2>
          <h3> {product.description} </h3>

          <ContainerSizeAndColor>
            <Sizes>
              <h2> Tamanhos </h2>
              <div>
                {product.sizes.map((value) => (
                  <Details qtd={value.qtd}>{value.number}</Details>
                ))}
              </div>
            </Sizes>

            <Color>
              <h2> Cor </h2>
              {product.color}
            </Color>
          </ContainerSizeAndColor>
        </Informations>
        <AddCart>
          <Quantity>
            <h2>Quantidade</h2>
            <div>
              <button onClick={() => (qtd > 0 ? setQtd(qtd - 1) : setQtd(0))}>
                {" "}
                -{" "}
              </button>
              <h3> {qtd} </h3>
              <button onClick={() => setQtd(qtd + 1)}> + </button>
            </div>
          </Quantity>
          <Price>
            <h1> R$ {(product.price / 100).toFixed(2)} </h1>
            <button> Adicionar ao carrinho </button>
          </Price>
        </AddCart>
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
  width: 96vw;
  display: flex;
  align-items: center;

  img {
    width: 400px;
    height: 400px;
    object-fit: fill;
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
  width: 60%;

  div {
    display: flex;
  }

`;

const Details = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${(props) => props.qtd > 0 ? "#4b4b4c" : "#999"};
    width: 24px;
    height: 24px;
    border: 1px solid ${(props) => props.qtd > 0 ? "#4b4b4c" : "#ccc"};
    border-radius: 50px;
    margin-right: 8px;
    font-size: 12px;
    background-color: ${(props) => props.qtd > 0 ? "#fff" : "#ccc"};
`;

const Color = styled.div`
  margin-left: 16px;
`;

const ContainerSizeAndColor = styled.div`
  display: flex;
`;

const AddCart = styled.div`
  font-family: "Outfit", sans-serif;
  width: 90vw;
`;

const Quantity = styled.div`
    display: flex;
    align-items: center;
    margin-top: 10px;

  h2 {
    font-size: 16px;
  }

  h3 {
    font-weight: 400;
  }
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    justify-content: space-between;
    width: 100px;
    margin-left: 40px;

  }
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30px;
    width: 30px;
    height: 30px;
    border: none;
    }
`;

const Price = styled.div`
    margin-top: 20px;
    display: flex;
    justify-content: space-around;
    align-items: center;

    h1 {
        font-size: 20px;
        font-weight: 400;
    }

    button {
        background-color: #02ac66;
        width: 200px;
        height: 40px;
        border: 1px solid #02ac66;
        border-radius: 50px;
        color: #fff;

    }
`;
