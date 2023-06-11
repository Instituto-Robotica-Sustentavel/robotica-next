import { MailPhoneIcon } from "../MailPhoneIcon";
import { CardLinkHowDonate } from "./CardLinkHowDonate";

export function HowDonate() {
  return (
    <section className="m-auto w-full text-center">
      <div className="tittleBar">
        <h1 className="title">Como Doar?</h1>
      </div>
      <nav>
        <ul className="flex w-full list-none flex-row justify-between gap-2 px-2 sm:gap-4 sm:px-6">
          <CardLinkHowDonate
            iconComponent={<MailPhoneIcon />}
            title="1. Entre em Contato"
            text="Email ou telefone, basta clicar aqui e será redirecionado para email, ou clica no botão do whatsapp e mande uma mensagem para a gente, ficaremos felizes em conversar com você!"
          />
          <CardLinkHowDonate
            iconComponent={<MailPhoneIcon />}
            title="2. Entre em Contato"
            text="Email ou telefone, basta clicar aqui e será redirecionado para email, ou clica no botão do whatsapp e mande uma mensagem para a gente, ficaremos felizes em conversar com você!"
          />
          <CardLinkHowDonate
            iconComponent={<MailPhoneIcon />}
            title="3. Entre em Contato"
            text="Email ou telefone, basta clicar aqui e será redirecionado para email, ou clica no botão do whatsapp e mande uma mensagem para a gente, ficaremos felizes em conversar com você!"
          />
        </ul>
      </nav>
    </section>
  );
}
