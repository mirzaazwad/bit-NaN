import { useState } from "react";
import {
  checkboxSharp,
  clipboardSharp,
  menuOutline,
  peopleSharp,
} from "ionicons/icons";
import { INavigationComponents } from "@/app/utils/templates/navigation-components";
import { usePathname } from "next/navigation";

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
  const currentPath = usePathname();

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
