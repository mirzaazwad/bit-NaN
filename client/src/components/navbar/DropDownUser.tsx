import { dropDownButton } from "../../config/theme/navbar.theme";
import { IonIcon } from "@ionic/react";
import { timerOutline } from "ionicons/icons";
import NavLink from "./NavLinks";
import { INavigationComponents } from "../../utils/templates/navigation-components";
import { ModalName } from "../../utils/enums/ModalEnums";
import { ModalControlUtils } from "../../utils/helpers/modalHelper";

interface IDropdownUserProps {
    currentPath: string;
    navigationContents:INavigationComponents[];
}


const DropdownUser = ({currentPath,navigationContents}:IDropdownUserProps) => {
    return (
        <>
            <li className={`ms-4 me-4 rounded-lg px-4 py-2 mt-4 hover:bg-white hover:text-black hover:border-black hover:cursor-pointer`} 
                onClick={() => ModalControlUtils.updateModalType(ModalName.Timer)}
            >
                <IonIcon icon={timerOutline} /> Study Timer
            </li>
            {
                navigationContents.map((content, index) => (
                    <NavLink key={index} href={content.href} currentPath={currentPath} theme={dropDownButton}><IonIcon icon={content.icon}></IonIcon> {content.label}</NavLink>
                ))
            }
        </>
    );
}

export default DropdownUser;