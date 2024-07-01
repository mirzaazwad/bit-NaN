import { HeaderBarTheme } from "@/app/config/theme/profile.theme";
import { Avatar, Divider} from "rsuite";

const Profile = () => {
    return(
        
        <div className="rounded mt-1">
            <div className={HeaderBarTheme}><h3 className="font-semibold text-xl text-white">Profile</h3></div>
            <div className="w-full h-full flex items-center justify-center mt-4">
                <div className="flex flex-col">
                    <div>
                        <Avatar color="yellow" bordered size="xxl" circle/>
                    </div>
                    <div>
                        <div className="flex flex-row items-center justify-center mt-4">
                            <h3 className="font-semibold text-lg text-gray-800">@Nibir Kabir</h3>
                            {
                            /*
                            Add Rating, Rank and Active Status
                            */
                            }
                        </div>
                    </div>
                </div>
            </div>
           <Divider/>
        </div>
    );
};

export default Profile;