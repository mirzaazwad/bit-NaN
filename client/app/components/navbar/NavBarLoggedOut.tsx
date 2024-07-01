"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { IonIcon } from "@ionic/react";
import { checkboxSharp, clipboardSharp, menuOutline, peopleSharp } from "ionicons/icons";
import { navStyles, navInnerStyles, menuButtonStyles } from "../../config/theme/navbar.theme";
import Logo from "./Logo";
import TopbarMenu from "./TopbarMenu";
import DropdownMenu from "./DropDownMenu";

const NavBar: React.FC = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const currentPath = usePathname();

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const navigationContents=[
        {href: "/", label: "Home",icon:clipboardSharp},
        {href: "/login", label: "Login",icon:peopleSharp},
        {href: "/register", label: "Register",icon:checkboxSharp}
    ]

    return (
        <nav className={navStyles} onMouseLeave={() => setIsDropdownOpen(false)}>
            <div className={navInnerStyles}>
                <div className="hidden md:flex items-center">
                    <Logo size={75} />
                </div>
                <div className="hidden w-full md:block md:w-auto ml-auto" id="navbar-default">
                    <TopbarMenu currentPath={currentPath} navigationContents={navigationContents}/>
                </div>
                <div className="md:hidden w-full flex items-center justify-between" id="navbar-dropdown">
                    <div className={menuButtonStyles} onClick={toggleDropdown}>
                        <IonIcon icon={menuOutline} />
                    </div>
                    <div className="flex-grow flex items-center justify-center">
                        <Logo size={50} />
                    </div>
                </div>
                {isDropdownOpen && <DropdownMenu currentPath={currentPath} navigationContents={navigationContents}/>}
            </div>
        </nav>
    );
}

export default NavBar;
