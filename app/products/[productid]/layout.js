import Link from "next/link"
export default function Productdetailslayout({ children,}
   ) 
    {
    return (
        <>
        {children}
        <Link href ="/order-product"><h2> Feature Products</h2></Link>
        { /*Carousel here */ }
        </>
    );
}