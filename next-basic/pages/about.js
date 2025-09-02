import styles from "@/styles/about.module.css"
import Image from "next/image"
import Head from "next/head"
export default function About(){
    return(
        <>
        <Head>
            <title>เกี่ยวกับเรา | Bryan Shop</title>
            <meta name="keyword" content="bryan, ร้านค้า, ร้านขายเสื้อ" />
        </Head>
         <div className={styles.container}>
            <h1 className={styles.title}>เกี่ยวกับเรา</h1>
             <Image src="/server-7.jpg" width={400} height={400} alt="logo"/>
        </div>
        </>
    )
}