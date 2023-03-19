import "./globals.css";
import Providers from "./Provider";

export const metadata = {
  title: "Guess Character",
  description: "Guess the character",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
