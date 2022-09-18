import { useNavigate } from 'react-router-dom/dist';

import { ProductContainer, ImgWrapper } from './StyledComponentsHome';



export default function Product({
    productObj
}) {
    const navigate = useNavigate();

    function navigateToProduct(idProduct) {
        // colocar a rota da vizualização do produto
        navigate('/');
    }


    return (
        <ProductContainer>
            <ImgWrapper onClick={() => { navigateToProduct(productObj.idProduct) }}>
                <img src={productObj.img} alt='Imagem do produto' />
            </ImgWrapper>

            <h3>{productObj.name}</h3>
            <span>R$ {(productObj.price / 100).toFixed(2).replace('.', ',')}</span>

        </ProductContainer>
    );
}