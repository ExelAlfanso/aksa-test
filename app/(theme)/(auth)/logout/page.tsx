"use client";

import { HeaderOne } from "@/components/Text";
import { useAuthStore } from "@/store/auth.store";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function LogoutPage() {
  const logout = useAuthStore((state) => state.logout);
  const router = useRouter();
  useEffect(() => {
    const timer = setTimeout(() => {
      logout();
      router.push("/login");
    }, 800);

    return () => clearTimeout(timer);
  }, [logout]);
  return (
    <div className="flex flex-row items-center justify-center min-h-screen gap-4">
      <HeaderOne>Logging out...</HeaderOne>
      <div className="w-8 h-8 border-4 rounded-full border-foreground border-t-transparent animate-spin"></div>
    </div>
  );
}
