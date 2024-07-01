import {
  clipboardSharp,
  peopleCircleSharp,
  newspaperSharp,
  pricetagSharp,
  settingsSharp,
  logOutSharp,
} from "ionicons/icons";
import { usePathname } from "next/navigation";
import { useState } from "react";

export const useLoggedInNavbar = () => {
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
    { href: "/market", label: "Market", icon: pricetagSharp },
  ];

  const userOptionsNavigationContents = [
    { href: "/settings", label: "Settings", icon: settingsSharp },
    { href: "/logout", label: "LogOut", icon: logOutSharp },
  ];

  return {
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
  };
};
