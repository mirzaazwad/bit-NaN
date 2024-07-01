"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { clipboardSharp, logOutSharp, newspaperSharp, peopleCircleSharp, pricetagSharp, settingsSharp } from "ionicons/icons";

import UserOptions from "./UserOptions";
import StudyTimer from "../timer/StudyTimer";
import TopbarUser from "./TopbarUser";
import DropdownUser from "./DashboardUser";
import NavBar from "./NavBar";



const NavBarLoggedIn: React.FC = () => {
    const [userOptionsOpen, setUserOptionsOpen] = useState(false);
    const [openStudyTimer, setOpenStudyTimer] = useState(false);
    const currentPath = usePathname();
    const toggleUserOptionsDropDown = () => {
        setUserOptionsOpen(!userOptionsOpen);
    };

    const navigationContents = [
        { href: "/dashboard", label: "Dashboard", icon: clipboardSharp },
        { href: "/groups", label: "Groups", icon: peopleCircleSharp },
        { href: "/forums", label: "Forums", icon: newspaperSharp },
        { href: "/market", label: "Market", icon: pricetagSharp }
    ]

    const userOptionsNavigationContents = [
        { href: "/settings", label: "Settings", icon: settingsSharp },
        { href: "/logout", label: "LogOut", icon: logOutSharp }
    ]

    return (
        <>
            <NavBar topbarChildren={<TopbarUser setOpenStudyTimer={setOpenStudyTimer} toggleUserOptionsDropDown={toggleUserOptionsDropDown} />}
                dropdownChildren={<DropdownUser currentPath={currentPath} navigationContents={userOptionsNavigationContents} setOpenStudyTimer={setOpenStudyTimer} />}
                onAuxClick={() => setUserOptionsOpen(false)}
                navigationContents={navigationContents}
            >
                {userOptionsOpen && <UserOptions currentPath={currentPath} navigationContents={userOptionsNavigationContents} />}
            </NavBar>
            <StudyTimer show={openStudyTimer} setShow={setOpenStudyTimer} />
        </>
    );
}

export default NavBarLoggedIn;
