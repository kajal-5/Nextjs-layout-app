import Link from "next/link";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {/* ✅ HEADER NAVIGATION */}
        <header style={{ padding: "15px", background: "#000", color: "#fff" }}>
          <nav style={{ display: "flex", gap: "20px" }}>
            <Link href="/" style={{ color: "#fff" }}>Home</Link>
            <Link href="/products" style={{ color: "#fff" }}>Products</Link>
          </nav>
        </header>

        <main>{children}</main>
      </body>
    </html>
  );
}
