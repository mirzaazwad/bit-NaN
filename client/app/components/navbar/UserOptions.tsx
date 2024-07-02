import { useOptionsButton } from "@/app/config/theme/navbar.theme";
import UserOptionsNavLink from "./UserOptionsNavLink";
import { INavigationComponents } from "@/app/utils/templates/navigation-components";

interface IUserOptionsProps {
    currentPath: string;
    navigationContents:INavigationComponents[];
}

const UserOptions = ({ currentPath,navigationContents }: IUserOptionsProps) => {
    return (<div className="w-full fixed top-20 right-0 flex justify-end p-4">
        <ul className="z-10 bg-yellow-600 w-1/5 rounded-lg py-4">
            {
                navigationContents.map((content, index) => (
                    <UserOptionsNavLink key={index} href={content.href} currentPath={currentPath} theme={useOptionsButton} iconName={content.icon}>{content.label}</UserOptionsNavLink>
                ))
            }
        </ul>
    </div>);
}

export default UserOptions;