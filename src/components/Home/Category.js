import { FaShoePrints } from 'react-icons/fa';
import { Smiley, TShirt, Person, CoatHanger } from "phosphor-react";

import { CategoryContainer, IconWrapper, Title } from './StyledComponentsHome';

const icon = [
    { name: 'tshirt', icon: (<TShirt size={'1.5rem'} />) },
    { name: 'pants', icon: (<Person size={'1.5rem'} />) },
    { name: 'shoe', icon: (<FaShoePrints size={'1.5rem'} />) },
    { name: 'accessory', icon: (<CoatHanger size={'1.5rem'} />) },
];


export default function Category({
    imgIcons,
    title
}) {

    const iconCategory = icon.filter(obj => obj.name === imgIcons)[0]?.icon || <Smiley size={'1.5rem'} />;

    return (
        <CategoryContainer>
            <IconWrapper>
                {iconCategory}
            </IconWrapper>

            <Title>
                {title}
            </Title>
        </CategoryContainer>
    );
}

