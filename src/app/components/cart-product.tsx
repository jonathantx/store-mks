"use client"
import styled from "styled-components"
import {Product} from "../types"
import { useState } from "react"

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
    flex: 1;
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
    cursor: pointer;
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
    product: Product;
    onUpdateQuantity: (productId: number, newQuantity: number) => void; 
    onRemove: (productId: number) => void; 
}


export function CartProduct ({product, onUpdateQuantity, onRemove }: CartProductProps) {

    const [quantity, setQuantity] = useState(product.quantity || 1);


    function formatValueReal(valor: string | number): string {
        const valorNumero = typeof valor === 'string' ? parseFloat(valor) : valor;
        return valorNumero.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 0, maximumFractionDigits: 0 });
    }

    const price = formatValueReal(product.price);  
    
    const incrementQuantity = () => {

        const newQuantity = (product.quantity || 0) + 1;
        setQuantity(newQuantity);
        onUpdateQuantity(product.id, newQuantity);
    };

    const decrementQuantity = () => {
        const newQuantity = (product.quantity || 0) > 1 ? quantity - 1 : (product.quantity || 0);
        setQuantity(newQuantity);
        onUpdateQuantity(product.id, newQuantity);
    };

    const handleRemove = () => {
        onRemove(product.id);
    };

    return (
        <CartItem>
            <PhotoCart src={product.photo} />
            <NameProductCart>{product.name}</NameProductCart>
            <AmountProductCard>
                <button onClick={decrementQuantity}>-</button>
                <div></div>
                <small>{product.quantity}</small>
                <div></div>
                <button onClick={incrementQuantity}>+</button>
            </AmountProductCard>
            <PriceProductCart>{price}</PriceProductCart>
            <DeletedProductCart onClick={handleRemove}>X</DeletedProductCart>
        </CartItem>
    )
}