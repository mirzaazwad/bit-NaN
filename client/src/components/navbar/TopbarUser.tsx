import { IonIcon } from "@ionic/react";
import { timerOutline } from "ionicons/icons";
import { ModalName } from "../../utils/enums/ModalEnums";
import { ModalControlUtils } from "../../utils/helpers/modalHelper";

interface ITopbarUserProps {
    toggleUserOptionsDropDown:  ()=>void;
}

const TopbarUser = ({toggleUserOptionsDropDown}:ITopbarUserProps) => {
    return ( 
        <>
        <li className={`ms-4 me-4 rounded-lg py-2 px-6 mt-6 hover:bg-yellow-600 hover:text-black hover:border-black hover:rounded-full hover:cursor-pointer`} 
            onClick={() => ModalControlUtils.updateModalType(ModalName.Timer)}>
            <IonIcon icon={timerOutline} className="text-2xl text-white" />
        </li>
        <li className={`ms-4 me-4 rounded-lg px-4 py-2 mt-4 hover:bg-yellow-600 hover:text-black hover:border-black hover:rounded-full hover:cursor-pointer`} onClick={()=> toggleUserOptionsDropDown()}>
            <img src="/robot1.png" alt="logo" width={50} height={50} className="rounded-full border border-yellow-400" />
        </li>
        </>
     );
}
 
export default TopbarUser;