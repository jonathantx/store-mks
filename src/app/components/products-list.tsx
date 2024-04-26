"use client"

import styled from "styled-components"
import { ProductCard } from "./product-card"
import { useEffect, useState } from "react"

interface Product {
    id: number
    name: string
    photo: string
    price: number
    description: string
}

const ListContainer = styled.div`
    width: 938px;
    height: 601px;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(4, 218px);
    grid-gap: 32px;
    margin-top: 100px;
`

export function ProductsList(){

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
        <ListContainer>
            {products.map(product => {
                return <ProductCard key={product.id} photo={product.photo} price={product.price} name={product.name} description={product.description}/>
            })}
        </ListContainer>
    )
}