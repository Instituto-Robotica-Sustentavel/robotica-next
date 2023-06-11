import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { WhatsappIcon } from "./components/WhatsappIcon";

export default function Home() {
  return (
    <div className="textBody min-h-screen">
      <Header />
      <Main />
      <WhatsappIcon />
    </div>
  );
}
