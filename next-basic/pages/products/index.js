import Head from "next/head"
import Image from "next/image"
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
            
            <div>
                {products.map(item=>(
                    <div key={item.id}>
                        <h2>{item.title}</h2>
                        <Image src={item.thumbnail} width={350} height={350} alt={item.title} />
                    </div>
                ))}
            </div>
        
        </>
    )
}