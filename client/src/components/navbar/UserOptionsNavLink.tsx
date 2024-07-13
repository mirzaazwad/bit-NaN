import { IonIcon } from "@ionic/react";
import { Link } from "react-router-dom";

export interface IUserOptionsNavLinkProps {
    href: string;
    currentPath: string;
    theme: (currentPath: string, href: string) => string;
    iconName: string;
    children: React.ReactNode;
}

const UserOptionsNavLink = ({ href, currentPath,iconName, theme, children }: IUserOptionsNavLinkProps) => {
    return (
        <Link to={href}>
            <li className={theme(currentPath,href)}>
                <IonIcon icon={iconName}></IonIcon> {children}
            </li>
        </Link>
    );
}

export default UserOptionsNavLink;

