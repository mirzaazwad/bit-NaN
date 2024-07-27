import AuthenticatedLayout from "../../../components/authentication/AuthenticatedLayout";
import ChatView from "../../../components/chat/ChatView";
import GroupList from "../components/GroupList";
import UserList from "../components/UserList";

const Groups = () => {
    return (
        <AuthenticatedLayout>
            <div className="flex flex-row">
                <div className="flex pl-1 w-1/6"><GroupList /></div>
                <div className="flex mx-1 w-2/3"><ChatView /></div>
                <div className="flex pr-1 w-1/6"><UserList /></div>
            </div>
        </AuthenticatedLayout>
    );
}

export default Groups;