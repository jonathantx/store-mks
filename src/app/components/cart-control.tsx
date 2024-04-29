"use client"

import styled from "styled-components";
import { ShoppingCartIcon } from "./cart-icon";
import { useLocalStorage } from "@/hooks/useLocalStorage";

const ShoppingCart = styled.button`
    width: 90px;
    height: 45px;
    gap: 0px;
    border-radius: 8px;
    opacity: 0px;
    border: none;
    font-weight: 700;
    font-size: 18px;
    line-height: 21.94px;
    cursor: pointer;
`

const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    width: 90px;
` 

const CartCount = styled.p`
    font-size: 18px;
    font-weight: 700;
    line-height: 21.94px;
    text-align: left;
    margin: 0;
`

interface ButtonShoppingCartProps {
    onClick: () => void;
    total: number
}

export default function CartControl({ onClick, total }: ButtonShoppingCartProps) {

    const {value} = useLocalStorage('cart-items', [])

    return (
        <ShoppingCart onClick={onClick}>
            <ButtonContainer >
                <ShoppingCartIcon/>
                {<CartCount>{total}</CartCount>}
            </ButtonContainer>
        </ShoppingCart>
    )
}