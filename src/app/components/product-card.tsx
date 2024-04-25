import styled from "styled-components"

interface ProductCardProps {
    image: string
    title: string
    price: number
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
    border-radius: 0px 0px 4px 4px;
`

const ImgCard = styled.img`
    width: 111px;
    height: 138px;
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
    padding: 15px 20px;
`

export function ProductCard(props: ProductCardProps){

    return (
        <Card>
            <ImgCard src={props.image} alt={props.title}/>
            <ContainerTitleCard>
                <TitleCard>{props.title}</TitleCard>
                <PriceCard>
                    <PriceTitleCard>{props.price}</PriceTitleCard>
                </PriceCard>
            </ContainerTitleCard>
            {/* <p>R$ {props.price}</p> */}
        </Card>
    )
}