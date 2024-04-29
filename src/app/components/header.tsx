"use client"

import styled from "styled-components";
import ButtonShoppingCart from "./cart-control";

interface HeaderProps {
    onCartClick: () => void;
    totalCart: number;
}

const TagHeader = styled.header `
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 101px;
    background-color: var(--primary-color);
    padding: 12px 24px;

    @media (min-width: 768px) {
        padding: 35px 160px;
    }
`

const Logo = styled.a`
    font-weight: 600;
    font-size: 24px;
    line-height: 150%;
    color: var(--white-color);

    @media (min-width: 768px) {
        font-size: 40px;
    }
`

const SubTitle = styled.small`
    font-size: 20px;
    font-weight: 300;
    line-height: 19px;
    text-align: left;
    padding-left: 10px;
`



export function Header({ onCartClick, totalCart }: HeaderProps) {

    return (
        <TagHeader>
            <Logo className="">MKS
                <SubTitle>Sistemas</SubTitle>
            </Logo>
            <ButtonShoppingCart onClick={onCartClick} total={totalCart} />
        </TagHeader>
    );

}