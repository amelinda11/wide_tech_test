import {Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";

export default function RoutingSection() {
    return (
        <Navbar disableAnimation isBordered className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg">
            <NavbarContent className="sm:hidden" justify="start">
            <NavbarMenuToggle />
            </NavbarContent>
  
            <NavbarContent className="sm:hidden pr-3" justify="center">
                <NavbarBrand>
                    <p className="font-bold text-inherit">PT Wide Technologies</p>
                </NavbarBrand>
            </NavbarContent>
  
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarBrand>
                    <p className="font-bold text-inherit">PT Wide Technologies</p>
                </NavbarBrand>
                <NavbarItem>
                    <Link color="foreground" href="/home">
                    Home
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href="/about" color="foreground">
                        About
                    </Link>
                </NavbarItem>
            </NavbarContent>
  
  
            <NavbarMenu className="navbar-menu-cstm">
                <NavbarMenuItem >
                <Link
                    className="w-full"
                    href="#"
                    size="lg"
                >
                    Home
                </Link>
                </NavbarMenuItem>
                <NavbarMenuItem >
                <Link
                    className="w-full"
                    href="/about"
                    size="lg"
                >
                    About
                </Link>
                </NavbarMenuItem>
            </NavbarMenu>
        </Navbar>
    );
  }
  