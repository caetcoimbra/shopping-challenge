import Head from "next/head";
import Header from "@/components/Header/Header";

export default function Home() {
  return (
    <>
      <Head>
        <title>MKS Shopping</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <Header />
    </>
  );
}
