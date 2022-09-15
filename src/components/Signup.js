import React, { useEffect, useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { AiOutlineArrowLeft } from "react-icons/ai";
import axios from "axios";
import UserContext from "../contexts/UserContext";
import logo from "./../assets/logo.png";

export default function Signup() {
  const navigate = useNavigate();

  const URL = "http://localhost:5000/sign-up";

  const { user, setUser } = useContext(UserContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [image, setImage] = useState("");
  const [passawordMatch, setPasswordMatch] = useState(false);

  function samePassword(e) {
    e.preventDefault();
    setPasswordMatch(true);

    if (password === confirmPassword) {
      createRecord();
    } else {
      setPasswordMatch(false);
      alert("Senhas não conferem");
    }
  }

  function createRecord() {
    axios
      .post(URL, { name, email, password })
      .then((res) => {
        setUser(res.data);
        alert("Cadastro realizado com sucesso");
        navigate("/sign-in");
      })
      .catch((err) => {
        console.log(err);
        alert("Erro ao cadastrar");
        setPasswordMatch(false);
      });
  }

  return (
    <MainContainer>
      <Arrow>
        <Link to="/sign-in">
          <AiOutlineArrowLeft style={{ width: "25px", height: "25px" }} />
        </Link>
      </Arrow>
      <ImageLogo src={logo} alt="logo" />
      <Text>Crie sua conta</Text>
      <form onSubmit={samePassword}>
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
          placeholder="Senha"
          onChange={(e) => setPassword(e.target.value)}
        ></Input>
        <Input
          required
          type="password"
          placeholder="Confirme a senha"
          onChange={(e) => setConfirmPassword(e.target.value)}
        ></Input>
        <Button type="submit">Cadastrar</Button>
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
`;

const ImageLogo = styled.img`
  width: 40%;
  height: 20%;
  margin: 10px auto;
  display: block;
`;

const Text = styled.h2`
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
  background-color: #fafafa;
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
  margin-top: 70px;
  border: none;
  border-radius: 20px;
  font-size: 1rem;
  font-family: "Orbitron", sans-serif;
  color: #fff;
  letter-spacing: 0.2rem;
  cursor: pointer;
`;

const TextLink = styled.p`
  color: #2b2b2b;
  font-size: 1rem;
  font-family: "Outfit", sans-serif;
  text-align: center;
  letter-spacing: 0.2rem;
  margin-top: 20px;
  cursor: pointer;
`;

const Arrow = styled.div`
  position: fixed;
  top: 52px;
  left: 40px;
  cursor: pointer;
`;
