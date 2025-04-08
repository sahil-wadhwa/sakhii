import { Geist, Geist_Mono,Roboto,Merriweather,Bungee_Tint } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});
const bungeeTint = Bungee_Tint({
  variable: "--font-bungeeTint",
  weight:'400',
  subsets: ["latin"],
});


const merriweather = Merriweather({
  variable: "--font-merriweather",
  subsets: ["latin"],
  weight:'400'
});
export const metadata = {
  title: "Sakhii Foundation",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable}  ${roboto.variable} ${merriweather.variable} ${geistMono.variable} ${bungeeTint.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
