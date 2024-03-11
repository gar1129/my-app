"use client"
import { useRouter } from "next/navigation"
import Link from "next/link"

export default function Orderproduct (){

    const handleClick = () => {
        // const Router = useRouter()
        console.log("Placing Your Order")   
        // router.push("/")

    };
    return  <>
        <b><h1>Order Product</h1></b>
        <Link href ="/products"><button onClick={handleClick}>Place Order</button></Link>
        
    </>
}