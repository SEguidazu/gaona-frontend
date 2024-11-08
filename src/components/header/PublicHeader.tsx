import NavigationMenu from "@/components/menu/NavigationMenu";

import { getMainMenu } from "@/lib/strapi";

async function PublicHeader() {
  const response = await getMainMenu();

  return (
    <header className="p-4">
      <h1>Gaona Tienda Online</h1>
      <NavigationMenu menu={response.data?.MainMenu} />
    </header>
  );
}

export default PublicHeader;
