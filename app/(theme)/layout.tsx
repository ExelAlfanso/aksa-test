"use client";
import NavBar from "@/components/NavBar";
import { useTheme } from "@/providers/ThemeProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { theme } = useTheme();
  return <div className={theme === "dark" ? "dark" : "light"}>{children}</div>;
}
