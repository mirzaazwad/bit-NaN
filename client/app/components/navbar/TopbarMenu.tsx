import Link from "next/link";
import React from "react";
import { topbarButton, topbarUlStyles } from "../../config/theme/navbar.theme";

interface ITopbarMenuProps {
    currentPath: string;
}

const TopbarMenu = ({ currentPath }:ITopbarMenuProps) => (
    <ul className={topbarUlStyles}>
        <Link href="/"><li className={topbarButton(currentPath, "/")}>Home</li></Link>
        <Link href="/login"><li className={topbarButton(currentPath, "/login")}>Login</li></Link>
        <Link href="/register"><li className={topbarButton(currentPath, "/register")}>Register</li></Link>
    </ul>
);

export default TopbarMenu;
