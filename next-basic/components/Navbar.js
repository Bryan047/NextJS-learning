import Link from "next/link"
import Image from "next/image"
export default function Navbar(){
    return(
            <nav>
                <div>
                    <Image src="/Gemini.jpg" width={50} height={50} alt="LOGO" />
                </div>
                <Link href="/">หน้าแรก</Link>
                <Link href="/about">เกี่ยวกับเรา</Link>
                <Link href="/products">สินค้าทั้งหมด</Link>

            </nav>

    )
}