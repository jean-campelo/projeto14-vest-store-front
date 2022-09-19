import styled from "styled-components";

const Header = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100vw;
    background-color: white;
    display: flex;
    justify-content: space-between;
    padding: 0.7rem 1rem;
    /* padding-top: 0.4rem; */
    
    svg {
        /* padding-top: 0.2rem; */
        color: black;
    }

    img {
        padding-bottom: 2px;
    }
`;

const HomeContainer = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #fff;
    overflow-y: scroll;
`;

const HomeBody = styled.div`
    position: relative;
    width: 100vw;
    margin-top: 3rem;
    height: 20vh;
`;

const CategoriesWrapper = styled.div`
    display: flex;
    justify-content: space-evenly;

    a {
        text-decoration: none;
    }
`;

const ProductsWrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    margin-bottom: 2rem;
`;

const SectionTitle = styled.div`
    padding: 1.2rem 1rem;
    font-family: 'Nunito', sans-serif;
    font-size: 1.5rem;
    font-weight: bold;
    text-transform: capitalize;
`;

//====== Selections ======//

const SelectionContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const SelectionWrapper = styled.div`
    width: 90%;
    height: 8rem;
    border-radius: 8px;
    background-color: #f0f0f0;
    cursor: pointer;
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.4);
    margin-bottom: 1rem;
    
    img {
        border-radius: 8px;
        object-fit: cover;
        width: 100%;
        height: 8rem;
    }

    @media (min-width: 516px) {
        width: 30rem;
    }
`;

//====== Categories ======//

const CategoryContainer = styled.div`
    width: 5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    color: #000;
`;

const IconWrapper = styled.div`
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 2rem;
    background-color: #d4d4d4;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 2px 2px 1px rgba(0, 0, 0, 0.4);
    `;

const Title = styled.div`
    text-align: center;
`;

//====== Products ======//

const ProductContainer = styled.div`
    margin-bottom: 1rem;

    h3 {
        font-family: 'Nunito', sans-serif;
        font-size: 1.2rem;
        margin: .3rem 0;
        text-transform: capitalize;
    }
    
    span {
        font-family: 'Nunito', sans-serif;
        font-weight: bold;
        font-size: 1.1rem;
    }

    @media (min-width: 400px) {
        margin: 1rem 1rem;
        margin-bottom: 0;
    }

`;

const ImgWrapper = styled.div`
    width: 10rem;
    height: 10rem;
    border-radius: 8px;
    background-color: #f0f0f0;
    cursor: pointer;
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.4);
    
    img {
        border-radius: 8px;
        width: 10rem;
        height: 10rem;
    }
`;


export {
    Header,
    HomeContainer,
    HomeBody,
    CategoriesWrapper,
    ProductsWrapper,
    SectionTitle,
    CategoryContainer,
    IconWrapper,
    Title,
    ProductContainer,
    ImgWrapper,
    SelectionContainer,
    SelectionWrapper
};