import Link from "next/link";
import { ReactNode } from "react";

interface IProps {
  link: string;
  text: string;
  iconComponent: React.ReactNode;
}
export function LinksHeader(props: IProps) {
  const { link, text, iconComponent } = props;
  return (
    <Link
      href={`/#${link}`}
      className="relative mx-2 aspect-square w-1/3 max-w-[200px] rounded-[10px] bg-rb-yellow-400 p-2 sm:w-[calc((100%/3)-10px)]"
    >
      <div className="absolute left-1/2 h-1/2 w-1/2 -translate-x-1/2">
        {iconComponent}
      </div>
      <li>
        <span className="absolute bottom-0 left-0 h-auto w-[110%] -translate-x-[5%]  -translate-y-[60%] rounded-3xl bg-rb-verde1-400 px-1 text-center text-[8px] font-semibold text-white sm:text-[12px] md:text-base">
          {text}
        </span>
      </li>
    </Link>
  );
}
