import Image from "next/image";
import logo from "../../assets/logo.png";
import { LinksHeader } from "./Header/LinksHeader";

export function Header() {
  return (
    <header>
      <div className="videoContainer">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/ciVZMVURPCg"
          title="YouTube video player"
          // frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          // allowfullscreen
        ></iframe>
      </div>
      <section className="mb-8 flex w-full items-center justify-center bg-rb-yellow-500">
        <div className="logo">
          <a href="/index.html">
            {" "}
            <Image className="max-w-full" src={logo} alt="logo" />
          </a>
        </div>
      </section>
      <section>
        <nav>
          <ul className="flex max-h-[150px] w-full list-none flex-row justify-between px-6">
            <LinksHeader link="ed" text="Educação" />
            <LinksHeader link="sust" text="Sustentabilidade" />
            <LinksHeader link="about" text="Quem somos?" />
          </ul>
        </nav>
      </section>
    </header>
  );
}
