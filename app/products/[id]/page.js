export const revalidate = 60;

async function getProduct(id) {
  const res = await fetch(`https://dummyjson.com/products/${id}`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) throw new Error("Failed to fetch product");

  return res.json();
}

const ProductDetails = async ({ params }) => {
  const product = await getProduct(params.id);

  return (
    <div style={{ padding: "20px" }}>
      <h1>{product.title}</h1>

      <img src={product.thumbnail} width="300" />

      <p><b>Price:</b> ₹ {product.price}</p>
      <p><b>Category:</b> {product.category}</p>
      <p><b>Description:</b> {product.description}</p>
    </div>
  );
};

export default ProductDetails;
