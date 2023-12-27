import styles from './page.module.css'
import Image from 'next/image'
import Hero from "public/hero.png"

export default function Home() {
  return (
    <main className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Better design for your digital products.</h1>
        <p className={styles.description}>Turning your Idea into Reality. We bring together the teams from the global tech industry.</p>
        <button className={styles.button}>See Our Works</button>
      </div>

      <div>
        <Image
        src = {Hero}
        alt='hero'
        className={styles.img}
        />  
      </div>
    </main>
  )
}
