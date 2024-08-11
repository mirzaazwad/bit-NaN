import { HeaderBarTheme } from "../../../config/theme/reusable.theme";
import GroupMinimal from "../../../components/group/GroupMinimal";
import AddButton from "../../../components/general/AddButton";
import { ModalControlUtils } from "../../../utils/helpers/modalHelper";
import { ModalName } from "../../../utils/enums/ModalEnums";
import { appStore, useAppSelector } from "../../../stores/redux-store";
import { loaderActions } from "../../../stores/slices/loader-slice";
import GroupsHelper from "../../../utils/helpers/groupsHelper";
import { useEffect } from "react";
const GroupList = () => {

    const createGroupModal = () => {
        ModalControlUtils.updateModalType(ModalName.CreateGroup);
    }

    const fetchData = async () => {
        try{
            appStore.dispatch(loaderActions.turnOn());
            await GroupsHelper.fetchGroups();
        }catch(e){
            console.log(e);
        }finally{
            appStore.dispatch(loaderActions.turnOff());
        }
    }

    const groups = useAppSelector(state => state.group.groups);

    useEffect(() => {
        fetchData();
    },[])

    return (
        <>
            <div className="flex flex-col w-full mt-1 rounded-md  px-1 max-h-screen">
                <div className={`${HeaderBarTheme}`}>
                    <h3 className="font-semibold text-xl text-white">Groups</h3>
                </div>
                <div className="bg-gray-100">
                    <div className="overflow-y-auto">
                        <div className="w-11/12 flex flex-col">
                            {groups.length > 0 ?
                            (
                                <>
                                    {groups.map((group) => {
                                        return(
                                            <GroupMinimal key={group.id} name={group.name} id={group.id} image={group.picture}/>
                                        );
                                    })}
                                </>
                            ):(
                                <div>
                                    <h3 className="text-gray-800 text-lg font-semibold ml-2">No groups available</h3>
                                </div>
                            )}
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