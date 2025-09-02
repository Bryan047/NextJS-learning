import styles from "@/styles/Home.module.css"
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

export default function Home() {
  return (
    <>
    <Head>
      <title>หน้าแรก | Bryan Shop</title>
      <meta name="keyword" content="bryan, ร้านค้า, ร้านขายเสื้อ" />
    </Head>
    <div className={styles.container}>
      <h1 className={styles.title}>หน้าแรก</h1>
      <Image src="/4.jpg" width={300} height={300} alt="logo"/>
      <p>Welcome To My Shop</p>
      <Link href="/products" className={styles.btn}>ดูสินค้าทั้งหมด</Link>
    </div>
    </>
  );
}
