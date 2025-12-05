export const dynamic = "force-dynamic";
export const revalidate = 0;

const PRODUCT_API = "https://fakestoreapi.com/products";

export async function generateMetadata({ params }) {
  const { id } = await params;

  const res = await fetch(`${PRODUCT_API}/${id}`, { cache: "no-store" });
  const product = await res.json();

  return {
    title: `${product.title} - Products Store`,
    description: product.description,
  };
}

export default async function ProductDetailPage({ params }) {
  const { id } = await params;

  const res = await fetch(`${PRODUCT_API}/${id}`, { cache: "no-store" });
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
