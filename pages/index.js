import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Link from 'next/link';

export default function Home() {
  return (
    <>
        <Head>

          <title>Ninja List | Home </title>
          <meta name='keywords' content="ninjas"></meta>
        </Head>
        <div>
        
          <h1 className={styles.title}> Hello Peet </h1>
          <p  className={styles.text}>This is a lot of text content</p>
          
          <Link href="/Ninjas">
          <a className={styles.btn}>See Ninja Listing</a>
          </Link>

        </div>
    </>
  )
}
