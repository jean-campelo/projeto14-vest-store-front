import { useNavigate } from 'react-router-dom/dist';

import { ProductContainer, ImgWrapper } from './StyledComponentsHome';



export default function Product() {

    const navigate = useNavigate();

    function navigateToProduct(idProduct) {
        // colocar a rota da vizualização do produto
        navigate('/');

    }


    return (
        <ProductContainer>
            <ImgWrapper onClick={() => { navigateToProduct(1) }}>
                {/* <img /> */}
            </ImgWrapper>

            <h3>{'Teste'}</h3>
            <span>R$ {15.5}</span>

        </ProductContainer>
    );
}