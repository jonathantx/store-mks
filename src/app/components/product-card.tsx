import styled from "styled-components"
import { ButtonBuy } from "./button-buy"

interface ProductCardProps {
    id?: number
    name: string
    photo: string
    price: number
    description: string
    addToCart: () => void;
}

const Card = styled.div`
    width: 218px;
    height: 285px;
    max-height: 285px;
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
    object-fit: contain;
`

const TitleCard = styled.p`
    font-size: 16px;
    font-weight: 400;
    line-height: 19px;
    color: #2C2C2C;

    @supports (-webkit-line-clamp: 2) {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: initial;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }
`

const PriceCard = styled.div`
    width: 64px;
    height: 26px;
    border-radius: 5px;
    background-color: #373737;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    padding: 0px 10px;
`

const PriceTitleCard = styled.p`
    color: var(--white-color);
    font-weight: 700;
    font-size: 14px;
    letter-spacing: -1px;
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
    padding: 0px 20px 40px;
`

const DescriptionCard = styled.div`
    font-size: 11px;
    font-weight: 300;
    color: #2C2C2C;
    margin-top: 10px;
`

export function ProductCard(props: ProductCardProps){

    function formatValueReal(valor: string | number): string {
        const valorNumero = typeof valor === 'string' ? parseFloat(valor) : valor;
        return valorNumero.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 0, maximumFractionDigits: 0 });
    }

    const price = formatValueReal(props.price);

    return (
        <Card>
            <ImgCard src={props.photo} alt={props.name}/>
            <ContainerTitleCard>
                <TitleCard>{props.name}</TitleCard>
                <PriceCard>
                    <PriceTitleCard>{price}</PriceTitleCard>
                </PriceCard>
            </ContainerTitleCard>
            <ContainerDescriptionCard>
                <DescriptionCard>{props.description}</DescriptionCard>
            </ContainerDescriptionCard>
            <ButtonBuy onClick={props.addToCart} />
        </Card>
    )
}