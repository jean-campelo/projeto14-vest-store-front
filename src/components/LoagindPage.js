import { Link } from "react-router-dom";
import ImageHome from "./../assets/home-img.jpg";
import styled from "styled-components";

export default function Home() {
  return (
    <Background>
      <Image src={ImageHome} alt="logo" />
      <Text>Produtos de alta qualidade feitos para você</Text>
      <Link to="/sign-up">
        <Button>Next</Button>
      </Link>
    </Background>
  );
}

const Image = styled.img`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  animation: fadeIn 1s ease-in-out;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const Background = styled.body`
  background-color: #fff;
`;

const Text = styled.h2`
  position: absolute;
  top: 50%;
  left: 50%;
  background-color: #fff;
  opacity: 0.8;
  border-radius: 5px;
  transform: translate(-50%, -50%);
  color: #2b2b2b;
  font-size: 3rem;
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  animation: fadeIn 1s ease-in-out;
`;

const Button = styled.button`
  width: 90%;
  height: 4rem;
  position: fixed;
  bottom: 4%;
  left: 50%;
  background-color: black;
  border-radius: 50px;
  transform: translate(-50%, -50%);
  color: #fff;
  font-size: 2rem;
  font-family: "Orbitron", sans-serif;
  text-align: center;
  letter-spacing: 0.2rem;
  animation: fadeIn 1s ease-in-out;
`;
