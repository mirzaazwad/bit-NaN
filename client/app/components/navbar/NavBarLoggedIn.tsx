"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { clipboardSharp, logOutSharp, newspaperSharp, peopleCircleSharp, pricetagSharp, settingsSharp } from "ionicons/icons";

import UserOptions from "./UserOptions";
import StudyTimer from "../timer/StudyTimer";
import TopbarUser from "./TopbarUser";
import DropdownUser from "./DashboardUser";
import NavBar from "./NavBar";
import { useLoggedInNavbar } from "@/app/hooks/navbar/loggedin";



const NavBarLoggedIn: React.FC = () => {
    const {
        currentPath,
        userOptions: {
          toggleUserOptionsDropDown,
          userOptionsOpen,
          setUserOptionsOpen,
        },
        studyTimer: {
          openStudyTimer,
          setOpenStudyTimer,
        },
        navigation: {
          navigationContents,
          userOptionsNavigationContents,
        },
      }=useLoggedInNavbar();

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
