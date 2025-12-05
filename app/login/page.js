"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const [formvalue, setformvalue] = useState({
    email: "",
    password: "",
  });

  const router = useRouter(); // ✅ FIXED

  function validate() {
    let errors = {};

    if (!formvalue.email) {
      errors.email = "Email is required";
    }

    if (!formvalue.password) {
      errors.password = "Password is required";
    } else if (formvalue.password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }

    return errors; // ✅ VERY IMPORTANT
  }

  async function onsubmitHandler(e) {
    e.preventDefault();

    const errors = validate();

    if (Object.keys(errors).length > 0) {
      console.log("Validation errors:", errors);
      return;
    }

    try {
      const res = await fetch("/api/login", {
        method: "POST",
        body: JSON.stringify({
          email: formvalue.email,
          password: formvalue.password,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (res.ok) {
        alert("Login successful ✅");
        router.push("/dashboard"); // ✅ redirect on success
      } else {
        alert("Login failed ❌");
      }

      console.log("Form submitted with values:", formvalue);
    } catch (error) {
      console.error("API error:", error);
    }
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Login Page</h1>

      {/* ✅ Proper submit handling */}
      <form onSubmit={onsubmitHandler}>
        <label>Email:</label>
        <input
          type="email"
          value={formvalue.email}
          onChange={(e) =>
            setformvalue({ ...formvalue, email: e.target.value })
          }
          name="email"
        />

        <br />

        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={formvalue.password}
          onChange={(e) =>
            setformvalue({ ...formvalue, password: e.target.value })
          }
        />

        <br />

        <button type="submit">Login</button>
      </form>

      <p>This is where the login form will go.</p>
    </div>
  );
}
