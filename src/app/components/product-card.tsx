import styled from "styled-components"
import { ButtonBuy } from "./button-buy"

interface ProductCardProps {
    id?: number
    name: string
    photo: string
    price: number
    description: string
}

const Card = styled.div`
    width: 218px;
    height: 285px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: var(--white-color);
    box-shadow: 0px 2px 8px 0px #00000022;
    border-radius: 8px;
    position: relative;
`

const ImgCard = styled.img`
    width: 100%;
    max-width: 111px;
    height: 100%;
    max-height: 138px;
    margin-top: 15px;
    object-fit: contain;
`

const TitleCard = styled.p`
    font-size: 16px;
    font-weight: 400;
    line-height: 19px;
    color: #2C2C2C;
`

const PriceCard = styled.div`
    width: 64px;
    height: 26px;
    border-radius: 5px;
    background-color: #373737;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    padding: 0px 5px;
`

const PriceTitleCard = styled.p`
    color: var(--white-color);
    font-weight: 700;
`

const ContainerTitleCard = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 20px;
    margin-top: 7px;
    height: 38px;
`

const ContainerDescriptionCard = styled.div`
    width: 100%;
    padding: 0px 20px;
`

const DescriptionCard = styled.div`
    font-size: 10px;
    font-weight: 300;
    line-height: 12px;
    height: 25px;
    color: #2C2C2C;

`

export function ProductCard(props: ProductCardProps){

    return (
        <Card>
            <ImgCard src={props.photo} alt={props.name}/>
            <ContainerTitleCard>
                <TitleCard>{props.name}</TitleCard>
                <PriceCard>
                    <PriceTitleCard>{props.price}</PriceTitleCard>
                </PriceCard>
            </ContainerTitleCard>
            <ContainerDescriptionCard>
                <DescriptionCard>{props.description}</DescriptionCard>
            </ContainerDescriptionCard>
            <ButtonBuy />
        </Card>
    )
}