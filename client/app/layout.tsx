'use client';
import { Inter } from "next/font/google";
import "./globals.css";
import 'rsuite/dist/rsuite-no-reset.min.css';
import { CustomProvider } from "rsuite";
import { Provider } from "react-redux";
import { appStore } from "./stores/redux-store";

const inter = Inter({ subsets: ["latin"] });

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
        <Provider store={appStore}>
          <CustomProvider>{children}</CustomProvider>
        </Provider>
      </body>
    </html>
  );
}
