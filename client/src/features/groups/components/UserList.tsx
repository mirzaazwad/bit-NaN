import { useEffect, useState } from "react";
import AddButton from "../../../components/general/AddButton";
import UserMinimal from "../../../components/userdetails/UserMinimal";
import { HeaderBarTheme } from "../../../config/theme/reusable.theme";
import { appStore, useAppSelector } from "../../../stores/redux-store";
import { groupActions } from "../../../stores/slices/group-slice";
import { Loader } from "rsuite";
import ProfileHelper from "../../../utils/helpers/profileHelper";
const UserList = () => {

    const selectedGroup = useAppSelector(state => state.group.selectedGroup);
    const [loading, setLoading] = useState(false);

    const fetchUsers = async () => {
        try {
            setLoading(true);
            if (selectedGroup?.users) {
                const userDetailsPromises = selectedGroup.users.map(async (userEmail) => {
                    const response = await ProfileHelper.getProfileByEmail(userEmail);
                    return response;
                });

                const usersDetails = await Promise.all(userDetailsPromises);

                appStore.dispatch(groupActions.setGroupUsers(usersDetails));
            }

        } catch (e) {
            console.log(e);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchUsers();
    }, [selectedGroup])

    const users = useAppSelector(state => state.group.users);

    return (
        <>
            <div className="w-full mt-1 max-h-screen">
                <div className={`${HeaderBarTheme}`}>
                    <h3 className="font-semibold text-xl text-white">Users</h3>
                </div>
                {!loading ? (
                    <>
                        <div className="bg-gray-100">
                            <div className="flex flex-col my-1 overflow-y-auto">
                                {users?.map((user, index) => {
                                    return (
                                        <UserMinimal key={index} name={user.userName} id={user.id} />
                                    );
                                })}
                            </div>
                            <div className="w-full flex p-2">
                                <AddButton tip="Add user to this group" />
                            </div>
                        </div>
                    </>
                ) : (
                    <div className="flex items-center justify-center w-full h-28">
                        <Loader content="loading..."/>
                    </div>
                )}
            </div>
        </>
    );
}
export default UserList;