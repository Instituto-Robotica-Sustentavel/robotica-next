import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Instituto Robotica Sutentavel",
    template: "%s | Instituto Robotica Sutentavel",
  },
  description:
    "Somos um instituto especializado em Educação Tecnológica através da sustentabilidade e tecnologia.",
  keywords: [
    "Institudo",
    "Educação",
    "Robotica",
    "Sutentavel",
    "Educação Tecnológica",
    "Tecnologia",
  ],
  authors: [{ name: "Rafael Fontenele", url: "https://rafonte.dev" }],
  openGraph: {
    title: "Instituto Robotica Sutentavel",
    description:
      "Somos um instituto especializado em Educação Tecnológica através da sustentabilidade e tecnologia.",
    url: "https://roboticasustentavel.org.br",
    siteName: "Instituto Robotica Sutentavel",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "https://roboticasustentavel.org.br/images/logo.png",
        width: 800,
        height: 600,
        alt: "Logo Robótica Sustentável",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
