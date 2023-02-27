import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home(props) {
  return (
    <>
      <Head>
        <title>Next JS Examples</title>
      </Head>
      <Header />
      <Navbar userList={props.users} />
      <Footer />
    </>
  );
}

export async function getServerSideProps(context) {
  const response = await fetch("http://localhost:3000/api/users");
  const data = await response.json();
  return {
    props: { users: data }, // will be passed to the page component as props
  };
}
