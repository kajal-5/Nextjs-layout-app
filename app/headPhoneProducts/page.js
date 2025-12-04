// export const metadata = {
//   title: "Products Store - Products List",
//   description: "Browse all available products in our store",
// };

// const PRODUCTS_API = "https://fakestoreapi.com/products";

// export default async function ProductsPage() {
//   const res = await fetch(PRODUCTS_API);
//   const products = await res.json();

//   return (
//     <main style={{ padding: 40 }}>
//       <h1>Products List</h1>

//       <ul>
//         {products.map((product) => (
//           <li key={product.id}>
//             <a href={`/headPhoneProducts/${product.id}`}>
//               {product.title}
//             </a>
//           </li>
//         ))}
//       </ul>
//     </main>
//   );
// }



import Link from "next/link";

export const metadata = {
  title: "Products Store - Products List",
  description: "Browse all available products in our store",
};

const PRODUCTS_API = "https://fakestoreapi.com/products";

export default async function ProductsPage() {
  const res = await fetch(PRODUCTS_API);
  if (!res.ok) throw new Error("Failed to fetch products");

  const products = await res.json();

  return (
    <div
      style={{
        padding: "20px",
        background: "#f6cdcdff",
        borderRadius: "8px",
      }}
    >
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
        {products.map((product) => (
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

            <h3 style={{ fontSize: "16px", margin: "10px 0" }}>
              {product.title}
            </h3>

            <p style={{ fontWeight: "bold" }}>₹ {product.price}</p>

            {/* ✅ Dynamic Navigation */}
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
        ))}
      </div>
    </div>
  );
}
