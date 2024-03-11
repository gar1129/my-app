import { Metadata } from "@/app/blog/page";
import Link from "next/link"
export const metadata = {
    title: "Blog"
}

export default function Blog() {
    return(
        <>
         <b><Link href = "/">Home</Link></b>
    <h1>My Blog</h1>
   
    </>
    )
    
 }