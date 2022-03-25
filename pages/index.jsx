import Head from "next/head";
import Image from "next/image";
import Topnav from "../components/Topnav";
import UnderDevelopment from "../components/UnderDevelopment";
import About from "../fragments/About";
import SupportUkraine from "../fragments/SupportUkraine";

export default function Home() {
  return (
    <div>
      <Head>
        <script defer src="/api/support-ukraine/light"></script>
      </Head>
      <Topnav />
      <About />
      <SupportUkraine />
      <UnderDevelopment />
    </div>
  );
}
