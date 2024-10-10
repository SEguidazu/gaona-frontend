"use client";

import Link from "next/link";

import {
  NavigationMenu as NavigationMenuUi,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";

interface NavigationMenuProps {
  isSession?: boolean;
}

function NavigationMenu({ isSession = false }: NavigationMenuProps) {
  return (
    <NavigationMenuUi>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Página principal
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        {isSession ? (
          <Button onClick={() => {}}>Cerrar sesión</Button>
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
