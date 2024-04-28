"use client"

import styled from "styled-components"
import { ProductCard } from "./product-card"
import { useEffect, useState } from "react"
import { Product } from "../types"
import { CartSidebar } from "./cart-sidebar"


const ListContainer = styled.div`
    max-width: 100%;
    margin: auto;
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(auto-fill, 218px);
    grid-gap: 32px;
    place-items: center;
    margin-top: 50px;

    @media (min-width: 1200px) {
        grid-template-columns: repeat(4, 218px);
        grid-gap: 32px;
    }

    @media (min-width: 768px) {
        margin-top: 50px;
    }
`

interface ProductsListProps {
    addToCart: (product: Product) => void;
}

export function ProductsList({ addToCart }: ProductsListProps){

    const [products, setProducts] = useState<Product[]>([])

    useEffect(() => {

        const url = new URL('https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=10&sortBy=name&orderBy=ASC')

        // url.searchParams.set('pageIndex', String(page - 1))
        
        // if(search.length > 0)
        //     url.searchParams.set('query', search)

        fetch(url)
        .then(response => response.json())
        .then(data => {
            setProducts(data.products)
        })
    }, []) 

    return (
        <>
            <ListContainer>
                {products.map(product => {
                    return <ProductCard key={product.id} photo={product.photo} price={product.price} name={product.name} description={product.description} addToCart={() => addToCart(product)}/>
                })}
            </ListContainer>
        </>

    )
}