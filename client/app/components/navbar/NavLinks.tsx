import Link from "next/link";

export interface INavLinkProps {
    href: string;
    currentPath: string;
    theme: (currentPath: string, href: string) => string;
    children: React.ReactNode;
}

const NavLink = ({ href, currentPath, theme, children }: INavLinkProps) => {
    return (
        <Link href={href}>
                <li className={theme(currentPath, href)}>{children}</li>
        </Link>
    );
};

export default NavLink;
