import "./globals.css";

export const metadata = {
  title: "Instagram User Search",
  description: "Search for Instagram users by name.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <h1>Instagram User Search</h1>
        <hr/>
        {children}
      </body>
    </html>
  );
}
