import React from "react";
import { dropDownButton, dropdownUlStyles } from "../../config/theme/navbar.theme";
import NavLink from "./NavLinks";
import { IonIcon } from "@ionic/react";
import { INavigationComponents } from "@/app/utils/templates/navigation-components";

interface IDropdownMenuProps {
    currentPath: string;
    navigationContents:INavigationComponents[];
    children?: React.ReactNode;
}

const DropdownMenu= ({ currentPath,navigationContents,children }:IDropdownMenuProps) => {
    return (
        <ul className={dropdownUlStyles}>
            {
                navigationContents.map((content, index) => (
                    <NavLink key={index} href={content.href} currentPath={currentPath} theme={dropDownButton}><IonIcon icon={content.icon}></IonIcon> {content.label}</NavLink>
                ))
            }
            {children}
        </ul>
    );
};

export default DropdownMenu;
