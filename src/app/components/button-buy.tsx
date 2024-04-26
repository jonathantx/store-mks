import styled from "styled-components"
import { ButtonBuyIcon } from "./button-buy-icon"

const ContainerBuy = styled.button`
    width: 100%;
    background-color: #0F52BA;
    height: 100%;
    max-height: 31.91px;
    margin-top: 10px;
    border-radius: 0px 0px 8px 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    cursor: pointer;
    color: var(--white-color);
    position: absolute;
    bottom: 0px;
    /* top: 18px; */
`

const ContainerButton = styled.div`
    font-size: 14px;
    line-height: 18px;
    font-weight: 600;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
`

export function ButtonBuy() {

    return (
        <ContainerBuy>
            <ContainerButton>
                <ButtonBuyIcon />
                COMPRAR
            </ContainerButton>
        </ContainerBuy>
    )

}