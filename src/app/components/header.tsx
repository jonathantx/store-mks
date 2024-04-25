"use client"

import styled from "styled-components";
import ButtonShoppingCart from "./cart-control";

interface HeaderProps {

}

const TagHeader = styled.header `
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 35px 160px;
    height: 101px;
    background-color: var(--primary-color);
`

const Logo = styled.a`
    font-weight: 600;
    font-size: 40px;
    line-height: 19px;
    color: var(--white-color);
`

const SubTitle = styled.small`
    font-size: 20px;
    font-weight: 300;
    line-height: 19px;
    text-align: left;
    padding-left: 10px;
`



export function Header(props: HeaderProps) {

    return (
        <TagHeader>
            <Logo className="">MKS
                <SubTitle>Sistemas</SubTitle>
            </Logo>
            <ButtonShoppingCart />
        </TagHeader>
    );

}