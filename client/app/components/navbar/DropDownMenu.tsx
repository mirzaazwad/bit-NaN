import Link from "next/link";
import React from "react";
import { dropDownButton, dropdownUlStyles } from "../../config/theme/navbar.theme";

interface IDropdownMenuProps {
    currentPath: string;
}

const DropdownMenu= ({ currentPath }:IDropdownMenuProps) => (
    <ul className={dropdownUlStyles}>
        <Link href="/"><li className={dropDownButton(currentPath, "/")}>Home</li></Link>
        <Link href="/login"><li className={dropDownButton(currentPath, "/login")}>Login</li></Link>
        <Link href="/register"><li className={dropDownButton(currentPath, "/register")}>Register</li></Link>
    </ul>
);

export default DropdownMenu;
