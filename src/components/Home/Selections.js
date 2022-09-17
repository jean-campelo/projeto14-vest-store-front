import { Link } from "react-router-dom";

import styled from "styled-components";

import Product from "./Product";

import { HomeContainer, HomeBody, SectionTitle, ProductsWrapper } from "./StyledComponentsHome";
import { ArrowLeft } from "phosphor-react";

export default function Selections() {

    return (
        <HomeContainer>
            <Header>
                <Link to='/home'>
                    <ArrowLeft size={'2rem'} color={'#000'} />
                </Link>

            </Header>

            <HomeBody>
                <SectionTitle>
                    Produtos
                </SectionTitle>

                <ProductsWrapper>
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                </ProductsWrapper>

            </HomeBody>

        </HomeContainer>
    );
}

const Header = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100vw;
    background-color: white;
    display: flex;
    padding: 0.7rem 1rem;
`;