"use client"
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Header } from "./components/header";
import { CartSidebar } from "./components/cart-sidebar";
import { useEffect, useState } from "react";
import { metadata } from "./metadata";
import { Footer } from "./components/footer";
import { Product } from "./types"
import { ProductsList } from "./components/products-list";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import styled from "styled-components";

const monteserrat = Montserrat({
    weight: ['300', '400', '500', '600'],
    subsets: ["latin"] 
});

const Body = styled.body`
    position: relative; 
    min-height: 100vh; 
    padding-bottom: 50px; 
`



export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const [cart, setCart] = useState<Product[]>([]);
    const [total, setTotal] = useState(0)


    const openSidebar = () => {
        setIsSidebarOpen(true)
    }

    const closeSidebar = () => {
        setIsSidebarOpen(false)
    }

    const addToCart = (product: Product) => {

        const existingProductIndex = cart.findIndex(item => item.id === product.id);

        if (existingProductIndex !== -1) {
            
            const updatedCart = cart.map((item, index) => {
                if (index === existingProductIndex) {
                    return {
                        ...item,
                        quantity: (item.quantity || 0) + 1 
                    };
                }
                return item;
            });

            setCart(updatedCart);
            localStorage.setItem('cart-items', JSON.stringify(updatedCart));
        } else {
            
            const newCart = [...cart, { ...product, quantity: 1 }];

            setCart(newCart);
            localStorage.setItem('cart-items', JSON.stringify(newCart));
        }

        setIsSidebarOpen(true);
    }

    const handleUpdateQuantity = (productId: number, newQuantity: number) => {
        const updatedCart = cart.map(item => {
            if (item.id === productId) {
                return { ...item, quantity: newQuantity };
            }
            return item;
        });
        setCart(updatedCart);
        localStorage.setItem('cart-items', JSON.stringify(updatedCart));
    };

    const handleRemoveItem = (productId: number) => {
        const updatedCart = cart.filter(item => item.id !== productId);
        setCart(updatedCart);
        localStorage.setItem('cart-items', JSON.stringify(updatedCart));
    };


    useEffect(() => {

        const cartItems = JSON.parse(localStorage.getItem('cart-items') || '[]');
        setCart(cartItems);

    }, [])

    useEffect(() => {
        setTotal(cart.length);
    }, [cart]);

    return (
        <html lang="pt-br">
            <Body className={monteserrat.className}>
                <Header onCartClick={openSidebar} totalCart={total}/>
                <main>
                    <ProductsList addToCart={addToCart}/>
                    {children}
                </main>
                <CartSidebar isopen={isSidebarOpen} onClose={closeSidebar} cart={cart} onUpdateQuantity={handleUpdateQuantity} onRemove={handleRemoveItem}/>
                <Footer />
            </Body>
        </html>
    );
}
