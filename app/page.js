// import DashboardPage from './dashboard/page';


// export default function Home() {
//   return (
//     <DashboardPage/>
//   );
// }


////////////static page example//////////////


import Link from "next/link";

export const metadata = {
  title: "This is Homepage",
  description: "Welcome to my simple Next.js homepage with static metadata",
};

export default function Home() {
  return (
    <main style={{ padding: "40px" }}>
      <h1>Home Page</h1>
      <ul>
        <li><Link href="/posts/1">Go to Post 1</Link></li>
        <li><Link href="/posts/2">Go to Post 2</Link></li>
        <li><Link href="/posts/3">Go to Post 3</Link></li>
      </ul>
    </main>
  );
}


