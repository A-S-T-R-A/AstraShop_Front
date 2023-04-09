import { Copyright } from "entities/Copyright/Copyright"
import { Logo } from "entities/Logo/Logo"
import { Sidebar } from "shared/ui/Sidebar/Sidebar"
import { CatalogSidebarNav } from "./CatalogSidebarNav/CatalogSidebarNav"

export function CatalogSidebar() {
    return (
        <Sidebar>
            <Logo />
            <CatalogSidebarNav />
            <Copyright />
        </Sidebar>
    )
}
