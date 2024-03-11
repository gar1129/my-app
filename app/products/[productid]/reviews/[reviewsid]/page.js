import { notFound } from "next/navigation";

export default function ReviewDetail({ params, productid, reviewsid} ) {

    if(parseInt(params.reviewsid) > 1000){
        notFound();
        }
        return (
        <h1>
            review {params.reviewsid} for product {params.productid}
        </h1>
    );
}