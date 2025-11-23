// app/layout.js

export const metadata = {
  title: "My Next.js Site",
  description: "A simple Next.js App using App Router and JavaScript",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>

        {/* Header */}
        <header style={{ padding: "20px", background: "#5e80f2ff", textAlign: "center" }}>
          <h2>My Website Header</h2>
        </header>

        {/* Page Content */}
        <main style={{ minHeight: "70vh", padding: "20px" , background: "#ead4d4ff" , textAlign: "center"  }}>
          {children}
        </main>

        {/* Footer */}
        <footer style={{ padding: "20px", background: "#6f6a6aff", textAlign: "center" }}>
          © 2025 My Website — All Rights Reserved
        </footer>

      </body>
    </html>
  );
}
