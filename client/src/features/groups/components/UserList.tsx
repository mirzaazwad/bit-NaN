import AddButton from "../../../components/group/AddButton";
import UserMinimal from "../../../components/userdetails/UserMinimal";
import { HeaderBarTheme } from "../../../config/theme/reusable.theme";

const UserList = () => {
    return (
        <>
            <div className="w-full mt-1 max-h-screen">
                <div className={`${HeaderBarTheme}`}>
                    <h3 className="font-semibold text-xl text-white">Users</h3>
                </div>
                <div className="bg-gray-100">
                    <div className="flex flex-col my-1 overflow-y-auto">
                        <UserMinimal name="Nibir Kabir" id="1" />
                        <UserMinimal name="Nibir Kabir" id="1" />
                    </div>
                    <div className="w-full flex p-2">
                        <AddButton tip="Add user to this group" />
                    </div>
                </div>
            </div>
        </>
    );
}
export default UserList;