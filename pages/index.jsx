import Head from "next/head";
import Image from "next/image";
import Topnav from "../components/Topnav";
import About from "../fragments/About";

export default function Home() {
  return (
    <div>
      <Topnav />
      <About />
    </div>
  );
}
