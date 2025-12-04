export const revalidate = 60;

async function getProduct(id) {
  const res = await fetch(`https://dummyjson.com/products/${id}`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) throw new Error("Failed to fetch product");
  return res.json();
}

export default async function ProductDetailsPage({ params }) {
  // ✅ params may be a Promise, so unwrap with await
  const unwrappedParams = await params;
  const id = unwrappedParams?.id;

  if (!id) {
    return (
      <div style={{ padding: "20px" }}>
        <h1>Product Not Found</h1>
      </div>
    );
  }

  const product = await getProduct(id);

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
      <h1>{product.title}</h1>

      <img
        src={product.thumbnail}
        width="100%"
        height="300"
        style={{ objectFit: "contain" }}
        alt={product.title}
      />

      <p>
        <b>Price:</b> ₹ {product.price}
      </p>
      <p>
        <b>Category:</b> {product.category}
      </p>
      <p>
        <b>Description:</b> {product.description}
      </p>
    </div>
  );
}
