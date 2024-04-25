"use client"

import styled from "styled-components"
import { ProductCard } from "./product-card"

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

    return (
        <ListContainer>
            <ProductCard title="Apple Watch Series 4 GPS" image="https://s3-alpha-sig.figma.com/img/f905/4b8f/394d83c88a4eeb9bbb1d1cff1bbe5422?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OLyVlp8nVqkFIdyxh353Yx1kDSnydGyLoIF~0G9uxWrBOZ-kKiKzGo2No~rXrY5aejRMNmbeQRu7iIMgyocKYZuzu4Z7YZ5DM8CIdLjTpqMbh8mds1yRIawX5KpNmwy5w~EvyAw2dRDSX8rPXXAM-28v117SvDBxeBB7DJ7cyIYDNKe7NxSdriU9~UrRcHqCYc4JUTwEhok6UhprEIl8alDOnQR6j43Fqs~zFHB5YTGSyOeMrLmtn71lQkpJf9PvrHSm8G8x999ki7Bbj23Ze9jdqjAq55Jv2mJNBQrSU0j4aXgPYxsnSjJ4QtAGdI58UIukaof7IP7oP2p43TC1QQ__" price={399} />
        </ListContainer>
    )
}