import { useState } from "react";
import {
  checkboxSharp,
  clipboardSharp,
  menuOutline,
  peopleSharp,
} from "ionicons/icons";
import { useLocation } from 'react-router-dom';
import { INavigationComponents } from "../../utils/templates/navigation-components";

export const useDefaultNavBar = (
  navigationContents: INavigationComponents[] | undefined
) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const generateNavbarContents = () => {
    if (navigationContents) {
      return navigationContents;
    }
    return [
      { href: "/", label: "Home", icon: clipboardSharp },
      { href: "/login", label: "Login", icon: peopleSharp },
      { href: "/register", label: "Register", icon: checkboxSharp },
    ];
  };
  const location = useLocation();
  const currentPath=location.pathname;
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return {
    currentPath,
    generateNavbarContents,
    dropdown: {
      toggleDropdown,
      isDropdownOpen,
      setIsDropdownOpen,
    },
  };
};
