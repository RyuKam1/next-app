import React from 'react'
import styles from "./footer.module.css"
import Image from "next/image"

function Footer() {
  return (
    <div className={styles.container}>
        <div className={styles.footerText}>@all rights reserved</div>
        <div className={styles.socialNetworks}>
          <Image src="/1.png" className={styles.icon} width={20} height={20} alt='facebook'/>
          <Image src="/2.png" className={styles.icon} width={20} height={20} alt='instagram'/>
          <Image src="/3.png" className={styles.icon} width={20} height={20} alt='twitter'/>
          <Image src="/4.png" className={styles.icon} width={20} height={20} alt='youtube'/>
        </div>
    </div>
  )
}

export default Footer