"use client"
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Header } from "./components/header";
import { ProductsList } from "./components/products-list";
import { CartSidebar } from "./components/cart-sidebar";
import { useState } from "react";
import { metadata } from "./metadata";
import { Footer } from "./components/footer";

const monteserrat = Montserrat({
    weight: ['300', '400', '500', '600'],
    subsets: ["latin"] 
});



export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false)

    const openSidebar = () => {
        setIsSidebarOpen(true)
    }

    const closeSidebar = () => {
        setIsSidebarOpen(false)
    }

    return (
        <html lang="pt-br">
            <body className={monteserrat.className}>
                <Header onCartClick={openSidebar}/>
                {children}
                <ProductsList />
                <CartSidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
                <Footer />
            </body>
        </html>
    );
}
