import React, { useEffect, useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { AiOutlineArrowLeft } from "react-icons/ai";
import axios from "axios";
import UserContext from "../contexts/UserContext";
import logo from "./../assets/logo.png";
import { ThreeDots } from "react-loader-spinner";

export default function Signin() {

  const navigate = useNavigate();

  const URL = "http://localhost:5000/sign-in";

  const { userInformation, setUserInformation } = useContext(UserContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [loading, setLoading] = useState(false);

  function lockValidation(e) {
    e.preventDefault();
    setDisabled(true);
    validateLogin();
  }

  function validateLogin() {
    const body = {
      email,
      password,
    };

    axios
      .post(URL, body)
      .then((res) => {
        setUserInformation(res.data);
        alert("Login realizado com sucesso");
        console.log(res.data);
        navigate("/home");
      })
      .catch((err) => {
        console.log(err);

        alert("Erro ao logar");
        setDisabled(false);
        setLoading(false);
      });
  }

  return (
    <MainContainer>
      <Arrow>
        <Link to="/sign-up">
          <AiOutlineArrowLeft
            style={{ width: "25px", height: "25px", color: "black" }}
          />
        </Link>
      </Arrow>
      <ImageLogo src={logo} alt="logo" />
      <Text>Faça seu login</Text>
      <form onSubmit={lockValidation}>
        <Input
          required
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        ></Input>
        <Input
          required
          type="password"
          placeholder="Senha"
          onChange={(e) => setPassword(e.target.value)}
        ></Input>
        {loading ? (
          <Button>
            <ThreeDots color="#EE2B7A" heigth="70px" width="70px" />
          </Button>
        ) : (
          <Button type="submit">Entrar</Button>
        )}
      </form>
      <Link to="/sign-up" style={{ textDecoration: "none" }}>
        <TextLink to="/sign-in">Não tem uma conta? Crie agora!</TextLink>
      </Link>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  animation: fadein 1s;
  
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
`;

const ImageLogo = styled.img`
  position: fixed;
  top: 20px;
  left: calc(50% - (150px / 2));
  width: 150px;
  height: 150px;
  margin: 10px auto;
  display: block;
`;

const Text = styled.h2`
  margin-top: 160px;
  color: #2b2b2b;
  font-size: 2rem;
  font-family: "Outfit", sans-serif;
  text-align: center;
  letter-spacing: 0.2rem;
`;

const Input = styled.input`
  box-sizing: border-box;
  width: 320px;
  height: 3rem;
  background-color: #f8f6f8;
  margin: 10px auto;
  display: block;
  border: none;
  border-radius: 20px;
  padding: 5px 10px;
  font-size: 1rem;
  font-family: "Outfit", sans-serif;
  color: #2b2b2b;
`;

const Button = styled.button`
  width: 320px;
  height: 3rem;
  background-color: #2b2b2b;
  margin-top: 40px;
  border: none;
  border-radius: 20px;
  font-size: 1rem;
  font-family: "Orbitron", sans-serif;
  color: #fff;
  letter-spacing: 0.2rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  &:disabled {
    opacity: 0.5;
  }
`;

const TextLink = styled.p`
  color: #2b2b2b;
  font-size: 1rem;
  font-family: "Outfit", sans-serif;
  text-align: center;
  letter-spacing: 0.2rem;
  margin-top: 20px;
  cursor: pointer;

  &:hover {
    transform: scale(1.01);
`;

const Arrow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 28px;
  border-radius: 50%;

  position: fixed;
  top: 52px;
  left: 40px;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
    transition: 0.2s;
  }
`;
