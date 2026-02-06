"use client";
import LoginForm from "@/components/forms/LoginForm";
import { loginSchema } from "@/lib/validations";
import { useAuthStore } from "@/store/auth.store";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const login = useAuthStore((state) => state.login);

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setError("");
      const result = loginSchema.safeParse({ username, password });

      if (!result.success) {
        const errorMessage = result.error.issues[0]?.message || "Invalid input";
        setError(errorMessage);
        return;
      }
      login(username, password);
      router.push("/products");
    } catch (error) {
      console.error("Failed to save username to localStorage:", error);
      setError("An error occurred during login");
    }
  };

  return (
    <LoginForm
      username={username}
      setUsername={setUsername}
      password={password}
      setPassword={setPassword}
      handleLogin={(e) => handleLogin(e)}
      error={error}
    />
  );
}
