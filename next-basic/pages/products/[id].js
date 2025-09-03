import Head from "next/head"
import Image from "next/image"
import style from "@/styles/Detail.module.css"

export async function getStaticPaths() {
    const res = await fetch("https://dummyjson.com/products?limit=15")
    const data = await res.json()
    const paths = data.products.map((item)=>{
        return{
            params:{id:String(item.id)}
        }
    })
    return{
        paths,
        fallback:false
    }
}
export async function getStaticProps({params}){
    const id = params.id
    const res = await fetch("https://dummyjson.com/products/"+id)
    const data = await res.json()
    return{
        props:{product:data}
    }
}

export default function ProductDetails({product}){

    return(
        <>
           <Head>
            <title>{product.title}</title>
           </Head>
           <div className={style.container}>
                <div>
                    <Image src={product.thumbnail} width={250} height={250} alt={product.title}/>
                </div>
                <div className={style.detail}>
                    <h1>ชื่อสินค้า : {product.title}</h1>
                    <h2>ราคา : {product.price}</h2>
                    <h2>หมวดหมู่ : {product.cetegory}</h2>
                    <h4>ข้อมูลพื้นฐาน : {product.description}</h4>
                    <h4>เรตติ้ง : {product.rating}</h4>
                </div>
           </div>
        </>
    )
}