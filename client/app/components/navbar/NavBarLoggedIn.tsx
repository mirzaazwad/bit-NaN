"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { IonIcon } from "@ionic/react";
import { clipboardSharp, logOutSharp, menuOutline, newspaperSharp, peopleCircleSharp, pricetagSharp, settingsSharp } from "ionicons/icons";
import { navStyles, navInnerStyles, menuButtonStyles } from "../../config/theme/navbar.theme";
import Logo from "./Logo";

import UserOptions from "./UserOptions";
import StudyTimer from "../timer/StudyTimer";
import DropdownMenu from "./DropDownMenu";
import TopbarMenu from "./TopbarMenu";
import TopbarUser from "./TopbarUser";
import DropdownUser from "./DashboardUser";


const NavBar: React.FC = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [userOptionsOpen, setUserOptionsOpen] = useState(false);
    const [openStudyTimer, setOpenStudyTimer] = useState(false);
    const currentPath = usePathname();

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };
    const toggleUserOptionsDropDown = () => {
        setUserOptionsOpen(!userOptionsOpen);
    };

    const navigationContents=[
        {href: "/dashboard", label: "Dashboard",icon:clipboardSharp},
        {href: "/groups", label: "Groups",icon:peopleCircleSharp},
        {href: "/forums", label: "Forums",icon:newspaperSharp},
        {href: "/market", label: "Market",icon:pricetagSharp}
    ]

    const userOptionsNavigationContents=[
        {href: "/settings", label: "Settings",icon:settingsSharp},
        {href: "/logout", label: "LogOut",icon:logOutSharp}
    ]

    return (
        <>
            <nav className={navStyles} onMouseLeave={() => setIsDropdownOpen(false)} onAuxClick={() => setUserOptionsOpen(false)}>
                <div className={navInnerStyles}>
                    <div className="hidden md:flex items-center">
                        <Logo size={75} />
                    </div>
                    <div className="hidden w-full md:block md:w-auto ml-auto" id="navbar-default">
                        <TopbarMenu currentPath={currentPath} navigationContents={navigationContents}>
                            <TopbarUser setOpenStudyTimer={setOpenStudyTimer} toggleUserOptionsDropDown={toggleUserOptionsDropDown} />
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
                    {isDropdownOpen && (<DropdownMenu currentPath={currentPath} navigationContents={navigationContents}>
                        <DropdownUser currentPath={currentPath} navigationContents={userOptionsNavigationContents} setOpenStudyTimer={setOpenStudyTimer} />
                    </DropdownMenu>)}
                    {userOptionsOpen && <UserOptions currentPath={currentPath} navigationContents={userOptionsNavigationContents}/>}
                </div>
            </nav>
            <StudyTimer show={openStudyTimer} setShow={setOpenStudyTimer} />
        </>
    );
}

export default NavBar;
