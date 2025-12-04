// import DashboardPage from './dashboard/page';


// export default function Home() {
//   return (
//     <DashboardPage/>
//   );
// }


////////////static page example//////////////


import Link from "next/link";
import DashboardPage from './dashboard/page';

export const metadata = {
  title: "This is Homepage",
  description: "Welcome to my simple Next.js homepage with static metadata",
};

export default function Home() {
  return (

    <main style={{ padding: "40px" }}>
      {/* <DashboardPage/> */}
      <h1>Home Page</h1>
    </main>
  );
}


