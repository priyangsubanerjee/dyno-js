import Head from "next/head";
import Image from "next/image";
import CreateDyno from "../components/CreateDyno";
import Topnav from "../components/Topnav";
import UnderDevelopment from "../components/UnderDevelopment";
import About from "../fragments/About";
import SupportUkraine from "../fragments/SupportUkraine";
import { useState } from "react";

export default function Home() {
  const [createDynoActive, setCreateDynoActive] = useState(false);
  return (
    <div>
      <Head>
        <script defer src="/api/support-ukraine/light"></script>
      </Head>
      <About />
      <SupportUkraine />
      <UnderDevelopment />
    </div>
  );
}
