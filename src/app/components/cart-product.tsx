"use client"
import styled from "styled-components"
import {Product} from "../types"

const CartItem = styled.div`
    margin-bottom: 10px;
    background-color: var(--white-color);
    width: 379px;
    height: 95px;
    border-radius: 8px;
    box-shadow: -2px 2px 10px 0px #0000000D;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    position: relative;
`

const PhotoCart = styled.img`
    width: 60px;
    height: 60px;
    opacity: 0px;
    object-fit: cover;
`

const NameProductCart = styled.p`
    font-size: 13px;
    font-weight: 400;
    line-height: 17px;
`

const PriceProductCart = styled.strong`
    font-size: 14px;
    font-weight: bold;
    line-height: 17px;
`

const DeletedProductCart = styled.button`
    font-size: 10px;
    width: 20px;
    height: 20px;
    position: absolute;
    top: -5px;
    right: -10px;
    background-color: #000000;
    color: var(--white-color);
    border-radius: 50%;
    border: none;
`

const AmountProductCard = styled.div`
    border-radius: 4px;
    border: 1px solid #BFBFBF;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.1em;
    padding: 5px 5px;
    font-size: 10px;
    width: 50px;
    height: 20px;

    button {
        border: none;
        background-color: transparent;
        cursor: pointer;
    }

    > div{
        border: 0.5px solid #BFBFBF;
        height: 100%;
    }

`

interface CartProductProps {
    product: Product; // Importe o tipo Product do arquivo onde ele está definido
}


export function CartProduct ({product}: CartProductProps  ) {

    return (
        <CartItem>
            <PhotoCart src={product.photo} />
            <NameProductCart>{product.name}</NameProductCart>
            <AmountProductCard>
                <button>-</button>
                <div></div>
                <small>1</small>
                <div></div>
                <button>+</button>
            </AmountProductCard>
            <PriceProductCart>{product.price}</PriceProductCart>
            <DeletedProductCart>X</DeletedProductCart>
        </CartItem>
    )
}