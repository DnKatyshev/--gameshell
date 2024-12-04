import type { Metadata } from "next";

import { inter } from './globalStyles/fonts';
import { raleway } from './globalStyles/fonts';
import './globalStyles/globals.css'



export const metadata: Metadata = {
  title: "ТЕСТОВОЕ - Gameshell",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${raleway.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}
