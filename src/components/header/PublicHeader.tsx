import NavigationMenu from "@/components/menu/NavigationMenu";

async function PublicHeader() {
  return (
    <header className="p-4">
      <h1>Gaona Tienda Online</h1>
      <NavigationMenu />
    </header>
  );
}

export default PublicHeader;
