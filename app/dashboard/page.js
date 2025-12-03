"use client";
import { use } from "react";
import {useSession, signIn, signOut} from "next-auth/react";

import { useRouter } from "next/navigation";





export default function DashboardPage() {

  const {data:session , status} = useSession();
  if (status === "loading") {
    return <div>Loading...</div>;
  } 
  if(session){
    return <div>
      <h1>Welcome, {session.user.name || session.user.email}</h1>
      <button onClick={()=>signOut()}>Sign Out </button>
    </div>;
  }
  // const router = useRouter();
  // async function onClickHandler(e) {
  //   e.preventDefault();
  //   const res = await fetch("/api/logout", {
  //     method: "POST",
  //   });
  //   if (res.ok) {
  //     router.push("/login");
  //   } else {
  //     alert("Logout failed");
  //   }
  // }
  return <div>
    <h1>Not singned In</h1>
    <button onClick={()=>signIn("github")}>sign in</button>    
  </div>;
}
