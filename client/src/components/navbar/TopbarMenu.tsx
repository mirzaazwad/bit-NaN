import React from "react";
import { topbarButton, topbarUlStyles } from "../../config/theme/navbar.theme";
import NavLink from "./NavLinks";
import { INavigationComponents } from "../../utils/templates/navigation-components";

interface ITopbarMenuProps {
    currentPath: string;
    navigationContents:INavigationComponents[];
    children?: React.ReactNode;
}

const TopbarMenu = ({ currentPath,navigationContents,children }:ITopbarMenuProps) => (
    <ul className={topbarUlStyles}>
        {
            navigationContents.map((content, index) => (
                <NavLink key={index} href={content.href} currentPath={currentPath} theme={topbarButton}>{content.label}</NavLink>
            ))
        }
        {children}
    </ul>
);

export default TopbarMenu;
