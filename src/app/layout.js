"use client";

import "./globals.css";
import Script from "next/script";
import { Provider } from "react-redux";
import store from "@/redux/store/store";

export const metadata = {
  title: "Guess Character",
  description: "Guess the character",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Script
        src="https://kit.fontawesome.com/92ebd06eb0.js"
        crossorigin="anonymous"
      ></Script>
      <body>
        <Provider store={store}>{children}</Provider>
      </body>
    </html>
  );
}
