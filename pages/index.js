import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home(props) {
  return (
    <>
      <Head>
        <title>Next JS Examples</title>
      </Head>
      <Header />
      <Navbar />
      <Footer />
    </>
  );
}
