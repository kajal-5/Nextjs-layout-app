import Link from "next/link";
import Image from "next/image";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {/* ✅ HEADER WITH LOGO + NAVIGATION */}
        <header
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            padding: "12px 20px",
            background: "#fe9393ff",
            color: "#fff",
            fontSize: "28px",
            fontWeight: "bold",
          }}
        >
          {/* ✅ LOGO */}
          <Image
            src="/Images/logo.png"
            width={250}
            height={100}
            alt="Site Logo"
          />

          {/* ✅ NAVIGATION */}
          <nav style={{ display: "flex", gap: "20px" }}>
            <Link href="/" style={{ color: "#fff", textDecoration: "none" }}>
              Home
            </Link>
            <Link href="/products" style={{ color: "#fff", textDecoration: "none" }}>
              Products
            </Link>
          </nav>
        </header>

        <main>{children}</main>
      </body>
    </html>
  );
}

