"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectTo = searchParams?.get("redirect") || "/products";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === "abc@gmail.com" && password === "abc@1234") {
      document.cookie = "token=loggedin; path=/";
      router.push(redirectTo);
    } else {
      setError("Invalid Email or Password");
    }
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h1>Login</h1>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            style={inputStyle}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            style={inputStyle}
            required
          />
          <button type="submit" style={buttonStyle}>Login</button>
        </form>
        {error && <p style={{ color: "red", marginTop: "15px", fontWeight: "bold" }}>{error}</p>}
        <p style={{ marginTop: "20px", fontSize: "14px" }}>
          Demo Login: <b>abc@gmail.com</b> / <b>abc@1234</b>
        </p>
      </div>
    </div>
  );
}

// Styles
const containerStyle = {
  minHeight: "100vh",
  background: "#f6cdcdff",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "20px",
};

const cardStyle = {
  background: "#fc9f9fff",
  padding: "30px",
  borderRadius: "10px",
  width: "100%",
  maxWidth: "400px",
  boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
  textAlign: "center",
};

const inputStyle = {
  width: "100%",
  padding: "10px",
  marginBottom: "15px",
  borderRadius: "6px",
  border: "1px solid #ccc",
  fontSize: "16px",
};

const buttonStyle = {
  width: "100%",
  padding: "10px",
  borderRadius: "6px",
  border: "none",
  background: "#fe9393ff",
  color: "#fff",
  fontSize: "16px",
  fontWeight: "bold",
  cursor: "pointer",
};
