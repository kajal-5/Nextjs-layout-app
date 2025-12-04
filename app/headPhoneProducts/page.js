export const metadata = {
  title: "Products Store - Products List",
  description: "Browse all available products in our store",
};

const PRODUCTS_API = "https://fakestoreapi.com/products";

export default async function ProductsPage() {
  const res = await fetch(PRODUCTS_API);
  const products = await res.json();

  return (
    <main style={{ padding: 40 }}>
      <h1>Products List</h1>

      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <a href={`/products/${product.id}`}>
              {product.title}
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
}
