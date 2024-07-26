import AuthenticatedLayout from "../../../components/authentication/AuthenticatedLayout";
import GroupList from "../components/GroupList";
import UserList from "../components/UserList";

const Groups = () => {
    return (
        <AuthenticatedLayout>
            <div className="flex flex-row">
                <div className="flex pl-1 w-1/6"><GroupList /></div>
                <div className="flex w-2/3"></div>
                <div className="flex pr-1 w-1/6"><UserList /></div>
            </div>
        </AuthenticatedLayout>
    );
}

export default Groups;