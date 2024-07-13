import { IonIcon } from "@ionic/react";
import { timerOutline } from "ionicons/icons";

interface ITopbarUserProps {
    setOpenStudyTimer:  React.Dispatch<React.SetStateAction<boolean>>;
    toggleUserOptionsDropDown:  ()=>void;
}

const TopbarUser = ({setOpenStudyTimer,toggleUserOptionsDropDown}:ITopbarUserProps) => {
    return ( 
        <>
        <li className={`ms-4 me-4 rounded-lg py-2 px-6 mt-6 hover:bg-yellow-600 hover:text-black hover:border-black hover:rounded-full hover:cursor-pointer`} onClick={() => setOpenStudyTimer(true)}>
            <IonIcon icon={timerOutline} className="text-2xl text-white" />
        </li>
        <li className={`ms-4 me-4 rounded-lg px-4 py-2 mt-4 hover:bg-yellow-600 hover:text-black hover:border-black hover:rounded-full hover:cursor-pointer`} onClick={()=> toggleUserOptionsDropDown()}>
            <img src="/robot1.png" alt="logo" width={50} height={50} className="rounded-full border border-yellow-400" />
        </li>
        </>
     );
}
 
export default TopbarUser;