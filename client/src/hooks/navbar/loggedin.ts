import {
  clipboardSharp,
  peopleCircleSharp,
  newspaperSharp,
  pricetagSharp,
  settingsSharp,
  logOutSharp,
  checkboxSharp,
} from "ionicons/icons";
import { useState } from "react";
import { useLocation } from "react-router-dom";

export const useLoggedInNavbar = () => {
  const [userOptionsOpen, setUserOptionsOpen] = useState(false);
  const [openStudyTimer, setOpenStudyTimer] = useState(false);
  const location = useLocation();
  const currentPath=location.pathname;
  const toggleUserOptionsDropDown = () => {
    setUserOptionsOpen(!userOptionsOpen);
  };

  const navigationContents = [
    { href: "/dashboard", label: "Dashboard", icon: clipboardSharp },
    { href: "/groups", label: "Groups", icon: peopleCircleSharp },
    { href: "/goals", label: "Goals", icon: checkboxSharp },
    { href: "/forum", label: "Forum", icon: newspaperSharp },
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
