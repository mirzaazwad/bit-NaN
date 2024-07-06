"use client";
import { IonIcon } from "@ionic/react";
import {  menuOutline } from "ionicons/icons";
import { navStyles, navInnerStyles, menuButtonStyles } from "../../config/theme/navbar.theme";
import Logo from "./Logo";
import TopbarMenu from "./TopbarMenu";
import DropdownMenu from "./DropDownMenu";
import { INavigationComponents } from "@/app/utils/templates/navigation-components";
import { useDefaultNavBar } from "@/app/hooks/navbar/default";

interface INavBarProps {
    topbarChildren?: React.ReactNode;
    dropdownChildren?: React.ReactNode;
    children?: React.ReactNode;
    onMouseLeave?: () => void;
    navigationContents?:INavigationComponents[];
}


const NavBar= ({topbarChildren,dropdownChildren,navigationContents,onMouseLeave,children}:INavBarProps) => {
    const {currentPath,generateNavbarContents,
        dropdown:{toggleDropdown,isDropdownOpen,setIsDropdownOpen}
    }=useDefaultNavBar(navigationContents);

    return (
        <nav className={navStyles} onMouseLeave={() => {
            setIsDropdownOpen(false)
            if(onMouseLeave){
                onMouseLeave();
        }}
        }>
            <div className={navInnerStyles}>
                <div className="hidden lg:flex items-center">
                    <Logo size={75} />
                </div>
                <div className="hidden w-full lg:block lg:w-auto ml-auto" id="navbar-default">
                    <TopbarMenu currentPath={currentPath} navigationContents={generateNavbarContents()}>
                        {topbarChildren}
                    </TopbarMenu>
                </div>
                <div className="lg:hidden w-full flex items-center justify-between" id="navbar-dropdown">
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
