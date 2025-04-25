import "./globals.css";

export const metadata = {
  title: "AAA Assignment",
  description: "A homework assignment from AAA for a software engineering role.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
