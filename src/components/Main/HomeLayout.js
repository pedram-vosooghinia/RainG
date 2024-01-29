"use client"
import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";
function HomeLayout({ title, children }) {
  return (
    <>
      <Head>
        <title>{`${title} - Rain.G`}</title>
      </Head>
      <Navbar />
      <div className="min-h-screen flex flex-col">
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </>
  );
}

export default HomeLayout;
