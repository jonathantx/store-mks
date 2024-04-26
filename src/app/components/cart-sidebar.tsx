"use client"
import React from 'react';
import styled from 'styled-components';

const Sidebar = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    height: 100%;
    width: 486px;
    background-color: var(--primary-color);
    box-shadow: -5px 0px 6px 0px #00000021;
    padding: 20px;
`;

const CartItem = styled.div`
    margin-bottom: 10px;
    background-color: var(--white-color);
`

const ContainerHeaderCart = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 30px;
`

const TitleSideBar = styled.div`
    text-align: start;
    color: var(--white-color);
` 

const CarrinhoTitle = styled.h2`
    font-size: 24px;
    margin-bottom: 5px; /* Espaçamento entre "Carrinho" e "de Compras" */
`;

const DeComprasTitle = styled.h2`
    font-size: 24px;
`;


const CloseButtonCart = styled.button`
    width: 38px;
    height: 38px;
    background-color: #000000;
    border: none;
    border-radius: 50%;
    color: var(--white-color);
    font-size: 18px;
    font-weight: 400;
`


export function CartSidebar () {
    return (
        <Sidebar>
            <ContainerHeaderCart>
                <TitleSideBar> 
                    <CarrinhoTitle>Carrinho</CarrinhoTitle>
                    <DeComprasTitle>de compras</DeComprasTitle>
                </TitleSideBar>
                <CloseButtonCart>X</CloseButtonCart>
            </ContainerHeaderCart>
            {Array.from({length: 8}).map(m => (
            <CartItem >
                <p>Olá</p>
                <p>Quantidade: 8</p>
            </CartItem>
        ))}
        </Sidebar>
    );
}