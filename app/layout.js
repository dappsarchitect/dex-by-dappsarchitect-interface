import "./globals.css";

// Fonts
import { Lexend } from "next/font/google"
const lexend = Lexend({ subsets: ['latin'] })

//import { Geist, Geist_Mono } from "next/font/google";

//const geistSans = Geist({
  //variable: "--font-geist-sans",
  //subsets: ["latin"],
//});

//const geistMono = Geist_Mono({
  //variable: "--font-geist-mono",
  //subsets: ["latin"],
//});

export const metadata = {
  title: "Dex for DACT, IMA & NML",
  description: "Your Decentralised Exchange for DACT, IMA & NML",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${lexend.className}`}>
        <main className="content">
          {children}
        </main>
      </body>
    </html>
  );
}
