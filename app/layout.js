import "./globals.css";

export const metadata = {
  title: "Fame Tonic - Home",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
