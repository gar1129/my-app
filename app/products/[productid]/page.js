import Link from "next/link"
export const Metadata = {
    title: "Product Item",
};

export default function Productdetails( {params}) {
    return <>
   <b> <Link href="/products">Back</Link></b>
    <b> <h3>Details About Product{params.productid}</h3></b>
    </>
}
