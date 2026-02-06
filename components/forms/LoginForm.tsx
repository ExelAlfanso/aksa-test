"use client";
import { HeaderOne, Text } from "@/components/Text";
import Button from "@/components/buttons/Button";
import InputField from "../inputfields/InputField";

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
        <InputField
          id="username"
          type="text"
          name="username"
          value={username}
          setValue={setUsername}
          label="Username"
        ></InputField>
        <InputField
          id="password"
          type="password"
          name="password"
          value={password}
          setValue={setPassword}
          label="Password"
        ></InputField>
        {error && <Text className="mb-4 text-sm text-red-500">{error}</Text>}
        <Button type="submit">Login</Button>
      </div>
    </form>
  );
}
