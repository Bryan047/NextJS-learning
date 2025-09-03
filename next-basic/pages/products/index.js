import Head from "next/head"
import Image from "next/image"
import style from "@/styles/Product.module.css"
import Link from "next/link"
//https://dummyjson.com/products?limit=15 //API Products

export async function getStaticProps(){
    const res = await fetch("https://dummyjson.com/products?limit=15")
    const data = await res.json()
    return{
        props:{products:data.products}
    }
}

export default function Index({products}){
    return(
        <>
            <Head>
                <title>สินค้าทั้งหมด| Bryan Shop</title>
                <meta name="keyword" content="bryan, ร้านค้า, ร้านขายเสื้อ" />
            </Head>
            
            <div className={style.container}>
                {products.map(item=>(
                    <div key={item.id}>
                        <Link href={'/products/'+item.id}>
                        <h2 className={style.title}>{item.title} </h2>
                        <Image src={item.thumbnail} width={200} height={200} alt={item.title} />
                        </Link>
                    </div>
                ))}
            </div>
        
        </>
    )
}