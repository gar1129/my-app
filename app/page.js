import Button from "@/components/Button";
import Link from "next/link"
const Home = () =>{
  return (
    <>
     <center> <h3>Welcome Home Sensei!! </h3></center>
     <b><Link href="/login">Login</Link></b>
     <br></br>
     <br></br>
     <b> <Link href= "/blog">Blog</Link></b>
     <br></br>
     <br></br>
     <b> <Link href= "/products">Products</Link></b>
     </>
      )
      

}

export default Home;