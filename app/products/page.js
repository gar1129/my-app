import Link from "next/link"
export  default function ProductList(){
    const productid=100     
  
    return (
        <>
       <b> <Link href="/">Home</Link></b>
        <h2><Link href="products/1">Product 1</Link></h2>
        <h2><Link href="products/2">Product 2</Link></h2>
        <h2><Link href="products/3">Product 3</Link></h2>
        <h2><Link href="products/4">Product 4</Link></h2>
        <h2><Link href={`products/${productid}`}>Product 100</Link></h2>
        </>
    )
}                   