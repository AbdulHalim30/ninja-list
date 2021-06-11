import Head from "next/head";
import Image from "next/image";
import Footer from "../comps/Footer";
import Navbar from "../comps/Navbar";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1 className={styles.title}>Homepages</h1>
        <p className={styles.text}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
          facere possimus ipsum quo excepturi. Neque consectetur commodi
          officiis itaque aperiam, voluptate cum sit facere error! Laborum animi
          nihil expedita quia!
        </p>
        <p className={styles.text}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
          facere possimus ipsum quo excepturi. Neque consectetur commodi
          officiis itaque aperiam, voluptate cum sit facere error! Laborum animi
          nihil expedita quia!
        </p>
        <Link href="/ninjas">
          <a className={styles.btn}>See Ninja Listing</a>
        </Link>
      </div>
    </>
  );
}
