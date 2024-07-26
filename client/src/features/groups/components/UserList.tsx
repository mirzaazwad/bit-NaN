import UserMinimal from "../../../components/userdetails/UserMinimal";
import { HeaderBarTheme } from "../../../config/theme/reusable.theme";

const UserList = () => {
    return(
        <>
            <div className="w-full mt-1">
                <div className={`${HeaderBarTheme}`}>
                    <h3 className="font-semibold text-xl text-white">Users</h3>
                </div>
                <div className="flex flex-col my-1">
                    <UserMinimal name="Nibir Kabir" id="1"/>
                    <UserMinimal name="Nibir Kabir" id="1"/>
                </div>
            </div>
        </>
    );
}
export default UserList;