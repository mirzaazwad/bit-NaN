import { dropDownButton } from "@/app/config/theme/navbar.theme";
import { IonIcon } from "@ionic/react";
import { timerOutline } from "ionicons/icons";
import { Dispatch, SetStateAction } from "react";
import NavLink from "./NavLinks";

interface IDropdownUserProps {
    currentPath: string;
    navigationContents:{
        href: string;
        label: React.ReactNode;
        icon: any;
    }[];
    setOpenStudyTimer:Dispatch<SetStateAction<boolean>>;
}


const DropdownUser = ({currentPath,navigationContents,setOpenStudyTimer}:IDropdownUserProps) => {
    return (
        <>
            <li className={`ms-4 me-4 rounded-lg px-4 py-2 mt-4 hover:bg-white hover:text-black hover:border-black hover:cursor-pointer`} onClick={() => setOpenStudyTimer(true)}>
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