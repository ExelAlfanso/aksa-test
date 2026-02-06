"use client";
import { HeaderOne, Text } from "@/components/Text";
import Button from "@/components/buttons/Button";

interface LoginFormProps {
  username: string;
  setUsername: (username: string) => void;
  password: string;
  setPassword: (password: string) => void;
  handleLogin: (e: React.FormEvent<HTMLFormElement>) => void;
  error?: string;
}
export default function LoginForm({
  username,
  setUsername,
  password,
  setPassword,
  handleLogin,
  error,
}: LoginFormProps) {
  return (
    <form
      onSubmit={handleLogin}
      className="flex items-center justify-center min-h-screen gap-4 bg-background text-foreground"
    >
      <div className="flex flex-col p-4 mx-auto w-200">
        <HeaderOne className="text-center">Login</HeaderOne>
        <label htmlFor="username" className="font-bold">
          Username
        </label>
        <input
          type="text"
          name="username"
          id="username"
          className={`p-2 mb-2 border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 ${
            error
              ? "border-red-500 focus:ring-red-500"
              : "border-border focus:ring-accent"
          }`}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password" className="font-bold">
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={`p-2 mb-4 border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 ${
            error
              ? "border-red-500 focus:ring-red-500"
              : "border-border focus:ring-accent"
          }`}
        />
        {error && <Text className="mb-4 text-sm text-red-500">{error}</Text>}
        <Button type="submit">Login</Button>
      </div>
    </form>
  );
}
