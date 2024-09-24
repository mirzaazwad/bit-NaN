import AuthenticatedLayout from "../../../components/authentication/AuthenticatedLayout";
import { useAppSelector } from "../../../stores/redux-store";
import GroupChatView from "../components/GroupChatView";
import GroupFiles from "../components/GroupFiles";
import GroupList from "../components/GroupList";
import UserList from "../components/UserList";

const Groups = () => {
    const groups = useAppSelector(state => state.group.groups);

    return (
        <AuthenticatedLayout>
            <div className="flex flex-row">
                <div className="flex pl-1 w-1/6"><GroupList /></div>
                <div className="flex mx-1 w-2/3">{groups.length > 0 ? (<GroupChatView />) : (<></>)}</div>
                <div className="flex flex-col pr-1 w-1/6">
                    <div><UserList /></div>
                    <div><GroupFiles /></div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

export default Groups;