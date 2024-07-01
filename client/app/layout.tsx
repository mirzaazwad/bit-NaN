import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import 'rsuite/dist/rsuite-no-reset.min.css';
import { CustomProvider } from "rsuite";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BIT by Team NaN",
  description: "BIT is the project submission for Therap JavaFest 2024 but Team NaN, \
  a group of 2 students from IUT, this project revolves around the creation of an interactive study platform for students. \
  The platform allows students to be more productive, track their study goals and achieve their goals faster while fostering collaboration",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <title>BIT | @Team NaN</title>
      <link rel="icon" type="image/x-icon" href="/Bit.png"></link>
      <body className={`${inter.className} w-full bg-white overflow-x-hidden`}>
        <CustomProvider>{children}</CustomProvider>
      </body>
    </html>
  );
}
