"use client";

import Link from "next/link";
import { useStore } from "zustand";
import useUserStore, { initialState } from "@/stores/user";

import {
  NavigationMenu as NavigationMenuUi,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";

import { MainMenu } from "@/components/types";

interface NavigationMenuProps {
  menu: MainMenu[];
}

function NavigationMenu({ menu = [] }: NavigationMenuProps) {
  const username = useStore(useUserStore, (state) => state.user.username);
  const updateUser = useUserStore((state) => state.updateUser);

  console.log({ menu });

  return (
    <NavigationMenuUi>
      <NavigationMenuList>
        {menu.map((item) => (
          <NavigationMenuItem key={item.id}>
            <Link href={item.link} legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Página principal
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        ))}
        {!!username ? (
          <Button onClick={() => updateUser(initialState)}>
            Cerrar sesión
          </Button>
        ) : (
          <>
            <NavigationMenuItem>
              <Link href="/auth/register" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Página de registro
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/auth/login" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Iniciar sesión
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </>
        )}
      </NavigationMenuList>
    </NavigationMenuUi>
  );
}

export default NavigationMenu;
