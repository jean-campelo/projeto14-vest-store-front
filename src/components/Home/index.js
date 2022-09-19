import { useState, useEffect, useContext } from 'react';
import { ShoppingCart, User } from 'phosphor-react';
import { Link, useNavigate } from 'react-router-dom';

import Category from './Category';
import Product from './Product';
import Selection from './Selection';

import { getHome } from '../../assets/services/request.js';

import { Header, HomeContainer, HomeBody, CategoriesWrapper, ProductsWrapper, SectionTitle, SelectionContainer } from './StyledComponentsHome';

import logo from '../../assets/logo.png'

import UserContext from '../../contexts/UserContext';

export default function Home() {
    const [selections, setSelections] = useState([]);
    const [products, setProducts] = useState([]);

    const { user } = useContext(UserContext);

    const navigate = useNavigate();

    useEffect(() => {
        getHome(user.token).then(res => {
            setProducts(res.data.products);
            setSelections(res.data.selections);
        }).catch(e => {
            console.log(e);
            if (e.request.responseText === 'Unauthorized') {
                navigate('/sign-in');
            }
        })
    }, []);

    return (
        <HomeContainer>
            <Header>
                <Link to='/'>
                    <User size={'2rem'} />
                </Link>
                <img src={logo} alt='Logo' width='35px' height='35px' />
                <Link to='/'>
                    <ShoppingCart size={'2rem'} />
                </Link>
            </Header>

            <HomeBody>
                {selections.length > 0 ? (
                    <>
                        <SectionTitle>
                            Seleções
                        </SectionTitle>

                        <SelectionContainer>
                            {selections.map(selection => <Selection selectionObj={selection} />)}
                        </SelectionContainer>
                    </>
                ) : (
                    <></>
                )}


                <SectionTitle>
                    Categorias
                </SectionTitle>

                <CategoriesWrapper>
                    <Link to='/category/camisetas'>
                        <Category title={'Camisetas'} imgIcons={'tshirt'} />
                    </Link>
                    <Link to='/category/calcas'>
                        <Category title={'Calças'} imgIcons={'pants'} />
                    </Link>
                    <Link to='/category/sapatos'>
                        <Category title={'Sapatos'} imgIcons={'shoe'} />
                    </Link>
                    <Link to='/category/acessorios'>
                        <Category title={'Acessórios'} imgIcons={'accessory'} />
                    </Link>
                </CategoriesWrapper>

                <SectionTitle>
                    Produtos
                </SectionTitle>

                <ProductsWrapper>
                    {products.length !== 0 ? products.map(product => <Product productObj={product} />) : 'Não tem nada aqui'}
                </ProductsWrapper>

            </HomeBody>

        </HomeContainer>
    );

}

