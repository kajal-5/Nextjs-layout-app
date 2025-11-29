"use client";
import { use } from "react";

import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const router = useRouter();
  async function onClickHandler(e) {
    e.preventDefault();
    const res = await fetch("/api/logout", {
      method: "POST",
    });
    if (res.ok) {
      router.push("/login");
    } else {
      alert("Logout failed");
    }
  }
  return <div>
    <h1>Dashboard Page</h1>
    <button onClick={onClickHandler}>Logout</button>    
  </div>;
}
