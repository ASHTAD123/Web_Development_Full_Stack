"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import { axios } from "axios";

export default function Login() {
 
const [user, setUser] = React.useState({
    email: "",
    password: "",
  });

  const onLogin = async () => {};

  return (
    <div className="flex flex-col items-center justify-content min-h-screen py-2">
      <h1 className="mb-15 mt-15 font-bold text-4xl">Login</h1>

      <hr />

      <input
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
        id="email"
        type="email"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        placeholder="email"
      />

      <input
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
        id="password"
        type="password"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        placeholder="password"
      />

      <button
        id="loginBtn"
        className="bg-blue-200 p-3 rounded-2xl m-2"
        onClick={onLogin}
      >
        Get Started
      </button>

      <Link href="/signup" className="mt-2">
        Not registered ?
      </Link>
    </div>
  );
}
