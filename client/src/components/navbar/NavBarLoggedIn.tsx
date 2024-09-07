import UserOptions from "./UserOptions";
import TopbarUser from "./TopbarUser";
import DropdownUser from "./DropDownUser";
import NavBar from "./NavBar";
import { useLoggedInNavbar } from "../../hooks/navbar/loggedin";



const NavBarLoggedIn: React.FC = () => {
    const {
        currentPath,
        userOptions: {
          toggleUserOptionsDropDown,
          userOptionsOpen,
          setUserOptionsOpen,
        },
        navigation: {
          navigationContents,
          userOptionsNavigationContents,
        },
      }=useLoggedInNavbar();

    return (
        <>
            <NavBar topbarChildren={<TopbarUser toggleUserOptionsDropDown={toggleUserOptionsDropDown} />}
                dropdownChildren={<DropdownUser currentPath={currentPath} navigationContents={userOptionsNavigationContents} />}
                onMouseLeave={() => setUserOptionsOpen(false)}
                navigationContents={navigationContents}
            >
                {userOptionsOpen && <UserOptions currentPath={currentPath} navigationContents={userOptionsNavigationContents} />}
            </NavBar>
        </>
    );
}

export default NavBarLoggedIn;
