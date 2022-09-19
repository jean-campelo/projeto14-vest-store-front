import React, { useState, useContext, useEffect } from "react";
import UserContext from "../contexts/UserContext";
import styled from "styled-components";
import { HiOutlineTrash, HiArrowSmRight } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  BsFillExclamationTriangleFill,
  BsCheckCircleFill,
} from "react-icons/bs";
export default function Cart() {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const { userInformation, setUserInformation } = useContext(UserContext);

  const [requestMessage, setRequestMessage] = useState({});
  const [sucess, setSucess] = useState({ status: false, type: "confirm" });
  const [checkout, setCheckout] = useState({});

  function sendOrder() {
    const URL = "http://localhost:5000/checkout";
    const config = {
      headers: {
        Authorization: `Bearer ${userInformation.user.token}`,
      },
    };
    const body = {
      products: checkout.products,
      total: checkout.total,
      size: checkout.size,
    };
    const request = axios.post(URL, body, config);
    request.then((response) => {
      setUserInformation({ ...userInformation, cart: [] });
      setRequestMessage(response.data);
    });
    request.catch((error) => {
      setRequestMessage(error.response.data);
    });
  }

  function removeProduct(id) {
    const URL = `http://localhost:5000/my-cart/${id}`;
    const config = {
      headers: {
        Authorization: `Bearer ${userInformation.user.token}`,
      },
    };
    const request = axios.delete(URL, config);
    request.then((response) => {
      setCheckout(response.data);
    });
    request.catch((error) => {
      console.log(error);
    });
  }

  function getCart() {
    const URL = "http://localhost:5000/my-cart";
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const request = axios.get(URL, config);
    request.then((response) => {
      setCheckout(response.data);
    });
    request.catch((error) => {
      console.log(error);
    });
  }

  function returnHomePage() {
    navigate("/home");
  }

  function setErrorContainerContent() {
    let errorMessage = "";

    switch (requestMessage.response?.status) {
      case 0:
        errorMessage =
          "Não foi possível conectar ao servidor. Tente novamente mais tarde.";
        break;
      case 500:
        errorMessage = "Erro interno do servidor. Tente novamente mais tarde.";
        break;
      default:
        break;
    }
    return errorMessage.length > 0 ? (
      <CheckoutErrorMessage>
        <BsFillExclamationTriangleFill /> {errorMessage}
      </CheckoutErrorMessage>
    ) : (
      <></>
    );
  }

  function setSuccessContainerContent() {
    let successMessage = "";

    switch (requestMessage?.status) {
      case 200:
      case 201:
        successMessage = "Pedido realizado com sucesso!";
        break;
      default:
        break;
    }
    return successMessage.length > 0 ? (
      <ContainerOrderSuccesful>
        <ContainerMessageSuccessful>
          <BsCheckCircleFill />
          <p>{successMessage}</p>
        </ContainerMessageSuccessful>
      </ContainerOrderSuccesful>
    ) : (
      <></>
    );
  }

  useEffect(() => {
    getCart();
  }, []);

  return (
    <Container>
      <Header>
        <Title>Meu carrinho</Title>
      </Header>
      <CartContainer>
        <CartList>
          {checkout.products?.length > 0 ? (
            checkout.products?.map((product) => (
              <>
                <CartItem key={product.id}>
                  <CartInfoContainer>
                    <CartImage src={product.image} />
                    <CartInfo>
                      <CartIndividualInfo>
                        <CartName>{product.name}</CartName>
                        <HiOutlineTrash
                          onClick={() => removeProduct(product.id)}
                        />
                      </CartIndividualInfo>
                      <CartIndividualInfo>
                        <CartSize>Tamanho: {product.size}</CartSize>
                        <CartColor>Cor: Azul</CartColor>
                      </CartIndividualInfo>
                      <CartIndividualInfo>
                        <CartPrice>R$ {product.price}</CartPrice>
                        <CartButtonQuantity>
                          <CartButtonQuantityIcon>-</CartButtonQuantityIcon>
                          <CartButtonQuantityNumber>1</CartButtonQuantityNumber>
                          <CartButtonQuantityIcon>+</CartButtonQuantityIcon>
                        </CartButtonQuantity>
                      </CartIndividualInfo>
                    </CartInfo>
                  </CartInfoContainer>
                </CartItem>
                <Footer>
                  <CartTotal>
                    <CartTotalPrice>
                      <CartTotalPriceTitle>Total</CartTotalPriceTitle>
                      <CartTotalPriceValue>
                        R$ {checkout.total}
                      </CartTotalPriceValue>
                    </CartTotalPrice>
                    {setErrorContainerContent()}
                    {setSuccessContainerContent()}
                    <CartTotalButton onClick={sendOrder}>
                      Finalizar compra
                    </CartTotalButton>
                  </CartTotal>

                  <FooterButton onClick={returnHomePage}>
                    <HiArrowSmRight />
                    Continuar comprando
                  </FooterButton>
                </Footer>
              </>
            ))
          ) : (
            <EmptyCart>
              <EmptyCartMessage>Seu carrinho está vazio</EmptyCartMessage>
              <EmptyCartButton onClick={returnHomePage}>
                Continuar comprando
                <HiArrowSmRight />
              </EmptyCartButton>
            </EmptyCart>
          )}
        </CartList>
      </CartContainer>
    </Container>
  );
}

const ContainerOrderSuccesful = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ContainerMessageSuccessful = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 90%;
  height: auto;
  margin: auto;
  background-color: #fff;
  border-radius: 25px;
  padding: 20px;
  p {
    font-size: 20px;
    font-weight: 700;
    color: #000;
  }
`;

const EmptyCart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: #f2f2f2;
  border-radius: 5px;
  margin-bottom: 20px;
`;

const EmptyCartMessage = styled.p`
  font-size: 20px;
  font-weight: 700;
  color: #000000;
  margin-bottom: 10px;
`;

const EmptyCartButton = styled.button`
  width: 220px;
  height: 40px;
  border-radius: 30px;
  font-family: "Outfit", sans-serif;
  color: #fff;
  background-color: #cfcfcf;
  border: none;
  display: flex;
  align-items: center;
  justify-content: space-around;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    background-color: #b5b5b5;
  }
`;

const CartInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CartButtonQuantity = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 30px;
  background-color: #f7f7f7;
  border-radius: 30px;
  margin-left: 10px;
`;

const CartIndividualInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 6px;
`;

const CartButtonQuantityIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 5px;
  cursor: pointer;
`;

const CartButtonQuantityNumber = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 5px;
`;

const CartColor = styled.div`
  font-size: 14px;
  color: #c6c6c6;
  margin-top: 5px;
`;

const CheckoutErrorMessage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50px;
  background-color: #ff0000;
  color: #fff;
  font-size: 20px;
  font-weight: 700;
  border-radius: 5px;
  margin-bottom: 10px;
  svg {
    margin-right: 10px;
  }
`;

const CheckoutSuccessMessage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50px;
  background-color: #00ff00;
  color: #fff;
  font-size: 20px;
  font-weight: 700;
  border-radius: 5px;
  margin-bottom: 10px;
  svg {
    margin-right: 10px;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f7f7f7;
`;

const Header = styled.div`
  width: 100%;
  height: 72px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h1`
  font-family: "Outfit", sans-serif;
  font-size: 24px;
  color: black;
  padding: 20px;
`;

const CartContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 20px;
`;

const CartList = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 0px;
  }
`;

const CartItem = styled.li`
  width: 100%;
  height: 140px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  background-color: #fff;
  border-radius: 40px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
`;

const CartImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 30px;
  margin: 10px 26px;
`;

const CartInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const CartName = styled.h2`
  font-size: 24px;
  font-family: "Outfit", sans-serif;
  color: black;
  margin: 0;
`;

const CartSize = styled.h3`
  font-size: 14px;
  font-weight: 400;
  color: #c6c6c6;
  margin: 0;
`;

const CartPrice = styled.h3`
  font-size: 20px;
  color: black;
  margin: 0;
`;

const CartTotal = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CartTotalPrice = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 30px;
`;

const CartTotalPriceTitle = styled.h3`
  font-size: 14px;
  font-weight: 400;
  font-family: "Outfit", sans-serif;
  margin: 0;
`;

const CartTotalPriceValue = styled.h3`
  font-size: 24px;
  font-weight: 700;
  font-family: "Outfit", sans-serif;
  margin: 0;
`;

const CartTotalButton = styled.button`
  width: 60%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 50px;
  background-color: black;
  color: #fff;
  cursor: pointer;
  outline: none;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  margin-right: 30px;
`;

const Footer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  -webkit-border-top-right-radius: 40px;
  -webkit-border-top-left-radius: 40px;
`;

const FooterButton = styled.button`
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 4px;
  background-color: black;
  color: #fff;
  cursor: pointer;
  outline: none;
`;