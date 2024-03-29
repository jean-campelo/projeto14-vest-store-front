import { useState, useEffect, useContext } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

import styled from "styled-components";

import Product from "./Product";

import { HomeContainer, HomeBody, SectionTitle, ProductsWrapper } from "./StyledComponentsHome";
import { ArrowLeft, ShoppingCart } from "phosphor-react";

import { getCategory, getSelection } from '../../assets/services/request';

import logo from '../../assets/logo.png';

import UserContext from '../../contexts/UserContext';

const relations = [
    { name: 'camisetas', category: 'tshirt' },
    { name: 'sapatos', category: 'shoe' },
    { name: 'calcas', category: 'pants' },
    { name: 'acessorios', category: 'accessory' },
]

export default function Selections() {
    const [title, setTitle] = useState('');
    const [products, setProducts] = useState([]);

    const { user } = useContext(UserContext);

    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (params.name) {
            // category
            const { name } = params;
            const category = relations.filter(obj => obj.name === name)[0]?.category || 'not-found';
            getCategory(category, user.token).then(res => {
                if (category === 'not-found') {
                    setTitle(res.data.selectionTitle);
                } else {
                    setProducts(res.data.products);
                    setTitle(name);
                }
            }).catch(e => {
                console.log(e);
                if (e.request.responseText === 'Unauthorized') {
                    navigate('/sign-in');
                }
            })

        } else {
            // selection
            const idSelection = params.id;
            getSelection(idSelection, user.token).then(res => {
                setTitle(res.data.selectionTitle);
                setProducts(res.data.products);
            }).catch(e => {
                console.log(e);
                if (e.request.responseText === 'Unauthorized') {
                    navigate('/sign-in');
                }
            })
        }
    }, [])

    return (
        <HomeContainer>
            <Header>
                <Link to='/home'>
                    <ArrowLeft size={'2rem'} color={'#000'} />
                </Link>
                <img src={logo} alt='Logo' width='35px' height='35px' />
                <Link to='/'>
                    <ShoppingCart size={'2rem'} />
                </Link>
            </Header>

            <HomeBody>
                <SectionTitle>
                    {title}
                </SectionTitle>

                <ProductsWrapper>
                    {products.length !== 0 ? products.map(product => <Product productObj={product} />) : 'Não tem nada aqui'}
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
    justify-content: space-between;

    svg {
        color: black;
    }
`;