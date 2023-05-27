import Link from "next/link";

interface IProps {
  link: string;
  text: string;
}
export function LinksHeader(props: IProps) {
  const { link, text } = props;
  return (
    <Link
      href={`/#${link}`}
      className="relative max-w-[200px] aspect-square w-[calc((100%/3)-20px)] bg-rb-yellow-400 rounded-[10px] z-[2]"
    >
      <li>
        <span className="absolute w-[110%] h-auto px-1 bottom-0 left-0 text-white font-semibold bg-rb-verde1-400 rounded-3xl -translate-x-[5%] -translate-y-[60%] z-[1] text-center">
          {text}
        </span>
      </li>
    </Link>
  );
}
