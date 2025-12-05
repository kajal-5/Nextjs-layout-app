"use client"; // MUST be first

"use client";

import dynamic from "next/dynamic";

const LoginForm = dynamic(() => import("./loginform"), { ssr: false });

export default function Page() {
  return <LoginForm />;
}
