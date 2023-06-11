import Link from "next/link";

interface CardLinkHowDonateProps {
  title: string;
  text: string;
  iconComponent: React.ReactNode;
}

export function CardLinkHowDonate(props: CardLinkHowDonateProps) {
  const { title, text, iconComponent } = props;
  return (
    <Link
      href="/#4"
      // className="w-1/3 max-w-[200px] rounded-[10px] bg-rb-yellow-400 p-2 sm:w-[calc((100%/3)-10px)]"
      className="flex w-1/3 max-w-[((100%/3)-20px)] flex-col rounded-xl bg-rb-yellow-400 p-4 font-bold text-rb-verde1-400"
    >
      <i className="w-fit text-rb-verde2-400">{iconComponent}</i>
      <h1 className="">{title}</h1>
      <p className="">{text}</p>
    </Link>
  );
}
