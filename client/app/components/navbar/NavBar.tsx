"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { IonIcon } from "@ionic/react";
import { checkboxSharp, clipboardSharp, menuOutline, peopleSharp } from "ionicons/icons";
import { navStyles, navInnerStyles, menuButtonStyles } from "../../config/theme/navbar.theme";
import Logo from "./Logo";
import TopbarMenu from "./TopbarMenu";
import DropdownMenu from "./DropDownMenu";
import { INavigationComponents } from "@/app/utils/templates/navigation-components";

interface INavBarProps {
    topbarChildren?: React.ReactNode;
    dropdownChildren?: React.ReactNode;
    children?: React.ReactNode;
    onAuxClick?: () => void;
    navigationContents?:INavigationComponents[];
}


const NavBar= ({topbarChildren,dropdownChildren,navigationContents,children}:INavBarProps) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const generateNavbarContents=()=>{
        if(navigationContents){
            return navigationContents;
        }
        return [
            {href: "/", label: "Home",icon:clipboardSharp},
            {href: "/login", label: "Login",icon:peopleSharp},
            {href: "/register", label: "Register",icon:checkboxSharp}
        ]
    }
    const currentPath = usePathname();


    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <nav className={navStyles} onMouseLeave={() => setIsDropdownOpen(false)}>
            <div className={navInnerStyles}>
                <div className="hidden md:flex items-center">
                    <Logo size={75} />
                </div>
                <div className="hidden w-full md:block md:w-auto ml-auto" id="navbar-default">
                    <TopbarMenu currentPath={currentPath} navigationContents={generateNavbarContents()}>
                        {topbarChildren}
                    </TopbarMenu>
                </div>
                <div className="md:hidden w-full flex items-center justify-between" id="navbar-dropdown">
                    <div className={menuButtonStyles} onClick={toggleDropdown}>
                        <IonIcon icon={menuOutline} />
                    </div>
                    <div className="flex-grow flex items-center justify-center">
                        <Logo size={50} />
                    </div>
                </div>
                {isDropdownOpen && (
                    <DropdownMenu currentPath={currentPath} navigationContents={generateNavbarContents()}>
                        {dropdownChildren}
                    </DropdownMenu>
                    )}
                {children}
            </div>
        </nav>
    );
}

export default NavBar;
