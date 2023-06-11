"use client";

import { FloatingWhatsApp } from "react-floating-whatsapp";
import logo from "../../assets/logo.png";

export function WhatsappIcon() {
  return (
    <FloatingWhatsApp
      phoneNumber="+5585996214279"
      accountName="Instituto Robótica Sustentável"
      statusMessage="Olá, tudo bem?"
      placeholder="Clique aqui e fale com a gente"
      chatMessage="Olá, como vai? Mande uma mensagem pra gente, ficaremos felizes com seu contato!"
      avatar={logo.src}
    />
  );
}
