import Image from "next/image";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { WhatsappIcon } from "./components/WhatsappIcon";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Main />
      <WhatsappIcon />
    </div>
  );
}
