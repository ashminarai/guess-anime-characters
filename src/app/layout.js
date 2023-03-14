import "./globals.css";
import Head from "next/head";
import Script from "next/script";

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
      <body>{children}</body>
    </html>
  );
}
