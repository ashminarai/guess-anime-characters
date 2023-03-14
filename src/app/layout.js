import "./globals.css";
import Head from "next/head";

export const metadata = {
  title: "Guess Character",
  description: "Guess the character",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <script
          src="https://kit.fontawesome.com/75e8165162.js"
          crossorigin="anonymous"
        ></script>
      </Head>
      <body>{children}</body>
    </html>
  );
}
