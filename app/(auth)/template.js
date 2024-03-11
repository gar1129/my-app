"use client";
import Link from "next/link";
import {useRouter} from "next/navigation";
import "./styles.css";
import React, { useState } from 'react';


const navLinks = [
    {name: "Register", href: "/register"},
    {name: "Login", href: "/login"},
    {name: "Forgot Password", href: "/forgot-password"},
];


import { usePathname } from 'next/navigation'

// await new Promise(resolve => setTimeout(resolve, 3000))

export default function AuthLayout( {children}) {
const pathname = usePathname()
const [input, setInput ] = useState();



    return (
        <>
       <b> <Link href = "/">Home</Link></b>
        <div>
            <div>
                <input value={input} onChange={(e) => setInput(e.target.value)} />
            </div>
            {navLinks.map((link) => {
                const isActive = pathname.startsWith(link.href);

                return (
                    <Link 
                        href={link.href}
                        key={link.name}
                        className={isActive ? "font-bold mr-4" : "Text-blue-500 mr-4"}
                        >
                            {link.name}
                    </Link>
                );
            })}

            {children}
           
            </div>
            </>
    );
}   