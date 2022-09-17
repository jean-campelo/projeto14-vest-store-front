import { FaShoppingCart, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import Category from './Category';
import Product from './Product';

import { Header, HomeContainer, HomeBody, CategoriesWrapper, ProductsWrapper, SectionTitle } from './StyledComponentsHome';

export default function Home() {

    return (
        <HomeContainer>
            <Header>
                <FaUser size={'2rem'} color={'#000'} />
                <FaShoppingCart size={'2rem'} color={'#000'} />
            </Header>

            <HomeBody>
                <SectionTitle>
                    Categorias
                </SectionTitle>

                <CategoriesWrapper>
                    <Link to='/'>
                        <Category title={'Camisetas'} imgIcons={'tshirt'} />
                    </Link>
                    <Link to='/'>
                        <Category title={'Calças'} imgIcons={'pants'} />
                    </Link>
                    <Link to='/'>
                        <Category title={'Sapatos'} imgIcons={'shoe'} />
                    </Link>
                    <Link to='/'>
                        <Category title={'Acessórios'} imgIcons={'accessory'} />
                    </Link>
                </CategoriesWrapper>

                <SectionTitle>
                    Produtos
                </SectionTitle>

                <ProductsWrapper>
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                </ProductsWrapper>

            </HomeBody>

        </HomeContainer>
    );

}

