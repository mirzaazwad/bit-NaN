import { HeaderBarTheme } from "../../../../config/theme/reusable.theme";
import { Divider } from "rsuite";
import EditIcon from '@rsuite/icons/Edit';
import { InputComponent } from "../../../../components/goal/CommonComponents";
import ImageComponent from "../../../../components/general/ImageComponent";
const Profile = () => {

    return (

        <div className="rounded mt-1">
            <div className={HeaderBarTheme}>
                <div className="flex justify-between">
                    <h3 className="font-semibold text-xl text-white mr-2">
                        Profile
                    </h3>
                    <EditIcon 
                        style={{fontSize: "1.5rem", color: "white"}}
                    />
                </div>
            </div>
            <div className="w-full h-full flex items-center justify-center mt-4">
                <div className="flex flex-col">
                    <div>
                       <ImageComponent
                            size="xxl"
                            type="profile"
                            image=""
                            setImage={() => {}}
                        />
                    </div>
                    <div>
                        <div className="flex flex-row items-center justify-center mt-4">  
                            <InputComponent
                                placeholder="UserName"
                                value=""
                                className="font-semibold text-lg text-gray-800"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <Divider />
        </div>
    );
};

export default Profile;