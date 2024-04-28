"use client"
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Header } from "./components/header";
import { CartSidebar } from "./components/cart-sidebar";
import { useState } from "react";
import { metadata } from "./metadata";
import { Footer } from "./components/footer";
import { Product } from "./types"
import { ProductsList } from "./components/products-list";

const monteserrat = Montserrat({
    weight: ['300', '400', '500', '600'],
    subsets: ["latin"] 
});



export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const [cart, setCart] = useState<Product[]>([]);


    const openSidebar = () => {
        setIsSidebarOpen(true)
    }

    const closeSidebar = () => {
        setIsSidebarOpen(false)
    }

    const addToCart = (product: Product) => {

        const newCart = [...cart, product]

        setCart(newCart);

        localStorage.setItem('cart-items', JSON.stringify(itemsArray));
    }

    return (
        <html lang="pt-br">
            <body className={monteserrat.className}>
                <Header onCartClick={openSidebar}/>
                <main>
                    <ProductsList addToCart={addToCart}/>
                    {children}
                </main>
                <CartSidebar isOpen={isSidebarOpen} onClose={closeSidebar} cart={cart}/>
                <Footer />
            </body>
        </html>
    );
}
