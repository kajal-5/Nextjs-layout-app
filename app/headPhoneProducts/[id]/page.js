const PRODUCT_API = "https://fakestoreapi.com/products";

// ✅ DYNAMIC METADATA (Next 16 Compatible)
export async function generateMetadata({ params }) {
  const { id } = await params; // ✅ NEXT 16 requires await

  const res = await fetch(`${PRODUCT_API}/${id}`);
  const product = await res.json();

  return {
    title: `${product.title} - Products Store`,
    description: product.description,
  };
}

// ✅ PRODUCT DETAIL PAGE
export default async function ProductDetailPage({ params }) {
  const { id } = await params; // ✅ NEXT 16 requires await

  const res = await fetch(`${PRODUCT_API}/${id}`);
  const product = await res.json();

  return (
    <main style={{ padding: 40 }}>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <p><strong>Price:</strong> ₹{product.price}</p>
      <img src={product.image} width="200" alt={product.title} />
    </main>
  );
}
