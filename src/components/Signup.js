import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { AiOutlineArrowLeft } from "react-icons/ai";
import axios from "axios";
import UserContext from "../contexts/UserContext";
import logo from "./../assets/logo.png";
import {
  BsCheckCircleFill,
  BsFillExclamationTriangleFill,
} from "react-icons/bs";

export default function Signup() {
  const navigate = useNavigate();

  const URL = "https://vest-store.herokuapp.com/sign-up";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passawordMatch, setPasswordMatch] = useState(false);
  const [trackingPassword, setTrackingPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const { userInformation, setUserInformation } = useContext(UserContext);

  function startTrackingPassword(e) {
    if (e.target.name === "password") {
      setPassword(e.target.value);
      if (e.target.value === confirmPassword) setPasswordMatch(true);
      else setPasswordMatch(false);
    }
    if (e.target.name === "password-confirmation") {
      setConfirmPassword(e.target.value);
      e.target.value.length > 0
        ? setTrackingPassword(true)
        : setTrackingPassword(false);
      if (e.target.value === password) setPasswordMatch(true);
      else setPasswordMatch(false);
    }
  }

  function samePassword() {
    if (trackingPassword && passawordMatch) {
      return (
        <MessagePasswordCorrect>
          <BsCheckCircleFill /> Senhas iguais
        </MessagePasswordCorrect>
      );
    } else if (trackingPassword && !passawordMatch) {
      return (
        <MessagePassword>
          <BsFillExclamationTriangleFill /> Senhas diferentes.
        </MessagePassword>
      );
    } else {
      return <></>;
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    
    const body = {
      name,
      email,
      password,
    };

    axios
      .post(URL, body)
      .then((res) => {
        userInformation(res.data);
        alert("Cadastro realizado com sucesso");
        setLoading(true);
        navigate("/sign-in");
      })
      .catch((err) => {
        console.log(err);
        alert("Erro ao cadastrar");
        setPasswordMatch(false);
        setLoading(false);
      });
  }

  function setButtonDisabled() {
    return !name || !email || !passawordMatch ? true : false;
  }

  return (
    <MainContainer>
      <Arrow>
        <Link to="/sign-in">
          <AiOutlineArrowLeft
            style={{ width: "25px", height: "25px", color: "black" }}
          />
        </Link>
      </Arrow>
      <ImageLogo src={logo} alt="logo" />
      <Text>Crie sua conta</Text>
      <form onSubmit={handleSubmit}>
        <Input
          required
          type="text"
          placeholder="Nome"
          onChange={(e) => setName(e.target.value)}
        ></Input>
        <Input
          required
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        ></Input>
        <Input
          required
          type="password"
          name="password"
          placeholder="Senha"
          onChange={(e) => startTrackingPassword(e)}
        ></Input>
        <Input
          required
          type="password"
          name="password-confirmation"
          placeholder="Confirme a senha"
          onChange={(e) => startTrackingPassword(e)}
        ></Input>
        {samePassword()}
        <Button type="submit" disabled={setButtonDisabled()}>
          Cadastrar
        </Button>
      </form>
      <Link to="/sign-in" style={{ textDecoration: "none" }}>
        <TextLink to="/sign-in">Já tem uma conta? Entre agora!</TextLink>
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
  margin-top: 170px;
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
  }
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

const MessagePassword = styled.p`
  color: red;
  font-size: 1rem;
  font-family: "Outfit", sans-serif;
  text-align: center;
  letter-spacing: 0.2rem;
  margin-top: 20px;
`;

const MessagePasswordCorrect = styled.p`
  color: green;
  font-size: 1rem;
  font-family: "Outfit", sans-serif;
  text-align: center;
  letter-spacing: 0.2rem;
  margin-top: 20px;
`;
