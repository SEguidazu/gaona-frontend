import PublicHeader from "@/components/header/PublicHeader";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <PublicHeader />
      <main className="p-4">{children}</main>
    </>
  );
}
