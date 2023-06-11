import {
  faBookOpenReader,
  faLeaf,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import logo from "../../assets/logo.png";
import { LinksHeader } from "./Header/LinksHeader";
import { BookOpen } from "@phosphor-icons/react";

export function Header() {
  return (
    <header className="flex flex-col gap-1">
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
          <ul className="flex max-h-[150px] w-full list-none flex-row justify-between px-2 sm:px-6">
            <LinksHeader
              link="ed"
              text="Educação"
              iconComponent={
                <FontAwesomeIcon
                  icon={faBookOpenReader}
                  className="text-rb-verde1-500"
                />
              }
            />
            <LinksHeader
              link="sust"
              text="Sustentabilidade"
              iconComponent={
                <FontAwesomeIcon icon={faLeaf} className="text-rb-verde1-500" />
              }
            />
            <LinksHeader
              link="about"
              text="Quem somos?"
              iconComponent={
                <FontAwesomeIcon
                  icon={faUsers}
                  className="text-rb-verde1-500"
                />
              }
            />
          </ul>
        </nav>
      </section>
    </header>
  );
}
