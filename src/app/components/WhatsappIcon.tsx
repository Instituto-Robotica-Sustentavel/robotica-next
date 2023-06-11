"use client";

import { FloatingWhatsApp } from "react-floating-whatsapp";
import logo from "../../assets/logo.png";

export interface IWhatsappIconProps {}

export function WhatsappIcon(props: IWhatsappIconProps) {
  return (
    <FloatingWhatsApp
      phoneNumber="+5585996214279"
      accountName="Instituto Robótica Sustentável"
      statusMessage="Olá, tudo bem?"
      placeholder="Clique aqui e fale com a gente"
      chatMessage="Olá, tudo bem?"
      avatar={logo.src}
    />
  );
}
