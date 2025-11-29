import Image from "next/image";


export default function Home() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Welcome to Dummy Products Store</h1>
      <p>Go to Products to explore all items.</p>

      <Image
        src="/Images/image.png"
        width={400}
        height={300}
        alt="Store Banner"
      />
    </div>
  );
}
