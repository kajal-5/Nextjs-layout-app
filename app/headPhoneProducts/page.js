// export const revalidate = 60; // cache / ISR for 60 seconds

import Link from "next/link";

export const metadata = {
  title: "Products Store - Products List",
  description: "Browse all available products in our store",
};

const PRODUCTS_API = "https://fakestoreapi.com/products";

export default async function ProductsPage() {
  let products = [];

  try {
    const res = await fetch(PRODUCTS_API, { next: { revalidate: 60 } });

    if (res.ok) {
      products = await res.json();
    } else {
      console.error("Fetch failed with status:", res.status);
      // keep products = [] as fallback
    }
  } catch (err) {
    console.error("Error fetching products:", err);
    // keep products = [] as fallback
  }

  return (
    <div style={{ padding: "20px", background: "#f6cdcdff", borderRadius: "8px" }}>
      <h1 style={{ marginBottom: "20px" }}>Products</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "20px",
          background: "#fc9f9fff",
          padding: "20px",
          borderRadius: "8px",
        }}
      >
        {products.length > 0 ? (
          products.map((product) => (
            <div
              key={product.id}
              style={{
                border: "1px solid #ddd",
                padding: "12px",
                background: "#fff",
                borderRadius: "6px",
                textAlign: "center",
              }}
            >
              <img
                src={product.image}
                width="100%"
                height="180"
                style={{ objectFit: "contain" }}
                alt={product.title}
              />

              <h3 style={{ fontSize: "16px", margin: "10px 0" }}>{product.title}</h3>

              <p style={{ fontWeight: "bold" }}>₹ {product.price}</p>

              <Link
                href={`/headPhoneProducts/${product.id}`}
                style={{
                  display: "inline-block",
                  marginTop: "10px",
                  color: "#fff",
                  background: "#fe9393ff",
                  padding: "6px 12px",
                  borderRadius: "5px",
                  textDecoration: "none",
                }}
              >
                View Details
              </Link>
            </div>
          ))
        ) : (
          <p style={{ fontSize: "18px", textAlign: "center", width: "100%" }}>
            ⚠️ Unable to load products right now. Try again later.
          </p>
        )}
      </div>
    </div>
  );
}
