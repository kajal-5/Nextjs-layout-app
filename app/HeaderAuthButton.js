"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function HeaderAuthButton() {
  const [loggedIn, setLoggedIn] = useState(false);
  const router = useRouter();

  // ✅ Check cookie on load
  useEffect(() => {
    const hasToken = document.cookie.includes("token=");
    setLoggedIn(hasToken);
  }, []);

  function handleLogout() {
    // ✅ Remove cookie
    document.cookie = "token=; Max-Age=0; path=/";
    setLoggedIn(false);
    router.push("/loginpage");
  }

  function handleLogin() {
    router.push("/loginpage");
  }

  return loggedIn ? (
    <button onClick={handleLogout} style={{ padding: "8px 16px" }}>
      Logout
    </button>
  ) : (
    <button onClick={handleLogin} style={{ padding: "8px 16px" }}>
      Login
    </button>
  );
}
