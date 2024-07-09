import {
    Navbar as NextUINavbar,
    NavbarContent,
    NavbarMenu,
    NavbarMenuToggle,
    NavbarBrand,
    NavbarItem,
    NavbarMenuItem,
} from "@nextui-org/navbar";
import Link from "next/link";
import { GithubIcon } from "@/components/icons";
import { siteConfig } from "@/config/site";

const Navbar = () => {
    return (
        <NextUINavbar maxWidth="xl" position="sticky">
            <NavbarContent>
                <NavbarBrand className="basis-1/5">ResumeJake</NavbarBrand>
                <NavbarItem className="flex items-center justify-center gap-x-8 basis-3/5">
                    <Link href={"/"}>Home</Link>
                    <Link href={"/generate"}>Generate</Link>
                    <Link href={"/"}>Settings</Link>
                </NavbarItem>
                <NavbarItem className="basis-1/5 flex items-center justify-end">
                    <Link href={siteConfig.links.github}>
                        <GithubIcon />
                    </Link>
                </NavbarItem>
            </NavbarContent>
        </NextUINavbar>
    )
}

export default Navbar;

