import { HeaderBarTheme } from "../../../config/theme/reusable.theme";
import GroupMinimal from "../../../components/group/GroupMinimal";
import AddButton from "../../../components/general/AddButton";
import { ModalControlUtils } from "../../../utils/helpers/modalHelper";
import { ModalName } from "../../../utils/enums/ModalEnums";
const GroupList = () => {

    const createGroupModal = () => {
        ModalControlUtils.updateModalType(ModalName.CreateGroup);
    }
    return (
        <>
            <div className="flex flex-col w-full mt-1 rounded-md  px-1 max-h-screen">
                <div className={`${HeaderBarTheme}`}>
                    <h3 className="font-semibold text-xl text-white">Groups</h3>
                </div>
                <div className="bg-gray-100">
                    <div className="overflow-y-auto">
                        <div className="w-11/12 flex flex-col">
                            <GroupMinimal name="Group 1" id="1" />
                            <GroupMinimal name="Group 1" id="1" />
                        </div>
                    </div>
                    <div className="w-full flex p-2">
                        <AddButton 
                            tip="Create a new group" 
                            onClick={createGroupModal}/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default GroupList;