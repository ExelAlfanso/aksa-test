"use client";
import NavBar from "@/components/NavBar";
import useAuthGuard from "@/hooks/useAuthGuard";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { isAuthenticated } = useAuthGuard();

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div>
      <NavBar></NavBar>
      {children}
    </div>
  );
}
