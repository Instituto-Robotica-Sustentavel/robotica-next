import { CardLinkHowDonate } from "./CardLinkHowDonate";

export function HowDonate() {
  return (
    <section className="m-auto w-full text-center">
      <div className="tittleBar">
        <h1 className="title">Como Doar?</h1>
      </div>
      <nav>
        <ul className="menu">
          <CardLinkHowDonate />
          <CardLinkHowDonate />
          <CardLinkHowDonate />
        </ul>
      </nav>
    </section>
  );
}
