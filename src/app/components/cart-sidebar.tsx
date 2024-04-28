"use client"
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { CartProduct } from './cart-product';
import { AnimatePresence, motion } from 'framer-motion';
import { Product } from "../types"
import { useLocalStorage } from '@/hooks/useLocalStorage';

const Sidebar = styled(motion.div)<{ isOpen: boolean }>`
    position: fixed;
    top: 0;
    right: ${(props) => (props.isOpen ? "0" : "-300px")}; 
    z-index: 999;
    height: 100%;
    width: 486px;
    background-color: var(--primary-color);
    box-shadow: -5px 0px 6px 0px #00000021;
    padding: 20px;
    display: ${(props) => (props.isOpen ? "block" : "none")};
`;

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
    margin-bottom: 5px; 
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
    cursor: pointer;
`

const ContainerListCartProducts = styled.div`
    padding: 10px 30px;
`

interface SidebarProps {
    isOpen: boolean;
    onClose: () => void;
    cart: Product[];
}


export function CartSidebar ({ isOpen, onClose }: SidebarProps) {

    const [cart, setCart] = useState<Product[]>([]);

    useEffect(() => {
        const storedCart = localStorage.getItem("cart-items");
        if (storedCart) {
            setCart(JSON.parse(storedCart));
        }
    }, []);

    return (
        <AnimatePresence>
            {isOpen && (
            <Sidebar 
                initial={{ x: "100%" }} 
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "tween", ease: "easeInOut", duration: 0.3 }}
                isOpen={isOpen}>
                <ContainerHeaderCart>
                    <TitleSideBar> 
                        <CarrinhoTitle>Carrinho</CarrinhoTitle>
                        <DeComprasTitle>de compras</DeComprasTitle>
                    </TitleSideBar>
                    <CloseButtonCart onClick={onClose}>X</CloseButtonCart>
                </ContainerHeaderCart>
                <ContainerListCartProducts>
                    {cart.map(product => ( 
                        <CartProduct key={product.id} product={product} />
                    ))}
                </ContainerListCartProducts>
            </Sidebar>
            )}
        </AnimatePresence>
    );
}