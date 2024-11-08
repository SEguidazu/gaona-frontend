import Link from "next/link";
import Image from "next/image";

import NavigationMenu from "@/components/menu/NavigationMenu";

import { getMainMenu, getStrapiUrl } from "@/lib/strapi";

async function PublicHeader() {
  const response = await getMainMenu();
  const strapiUrl = getStrapiUrl();
  const logo = response.data?.logo;

  return (
    <header className="p-2">
      <div className="flex items-center gap-x-2 mb-2">
        {logo && (
          <Link href="/">
            <Image
              src={`${strapiUrl}${logo.url}`}
              alt={logo.alt}
              width={100}
              height={80}
            />
          </Link>
        )}
        <h1>Gaona Tienda Online</h1>
      </div>
      <NavigationMenu menu={response.data?.MainMenu} />
    </header>
  );
}

export default PublicHeader;
