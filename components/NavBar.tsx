import { HeaderTwo } from "@/components/Text";
import { useAuthStore } from "@/store/auth.store";
import AuthDropdown from "./dropdowns/AuthDropdown";
import ThemeDropdown from "./dropdowns/ThemeDropdown";
import Link from "next/link";

export default function NavBar() {
  const username = useAuthStore((state) => state.user?.name || "Guest");
  return (
    <nav className="flex items-center p-4 mb-8 border-b border-border justify-evenly">
      <HeaderTwo>My App</HeaderTwo>
      <Link
        href="/products"
        className="flex items-center text-primary hover:text-accent"
      >
        Products
      </Link>
      <div className="inline-flex gap-2">
        <AuthDropdown username={username}></AuthDropdown>
        <ThemeDropdown></ThemeDropdown>
      </div>
    </nav>
  );
}
