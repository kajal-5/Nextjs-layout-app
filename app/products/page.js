import Link from "next/link";

export const revalidate = 60; // ✅ cache for 60 seconds

async function getProducts() {
  const res = await fetch("https://dummyjson.com/products", {
    next: { revalidate: 60 }, // ✅ Next.js caching
  });

  if (!res.ok) throw new Error("Failed to fetch products");

  return res.json();
}

const ProductsPage = async () => {
  const data = await getProducts();
  const products = data.products;

  return (
    <div style={{ padding: "20px" }}>
      <h1>Products</h1>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "20px" }}>
        {products.map((product) => (
          <div key={product.id} style={{ border: "1px solid #ddd", padding: "10px" }}>
            <img src={product.thumbnail} width="100%" />
            <h3>{product.title}</h3>
            <p>₹ {product.price}</p>

            {/* ✅ Dynamic Navigation */}
            <Link href={`/products/${product.id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
