import { HeaderBarTheme } from "../../../../config/theme/reusable.theme";
import { Button, Divider } from "rsuite";
import EditIcon from '@rsuite/icons/Edit';
import { InputComponent } from "../../../../components/goal/CommonComponents";
import ImageComponent from "../../../../components/general/ImageComponent";
import { useEffect, useState } from "react";
import ProfileHelper from "../../../../utils/helpers/profileHelper";
import FileHelper from "../../../../utils/helpers/fileHelper";
const Profile = () => {

    const [image, setImage] = useState(undefined);
    const [username, setUsername] = useState<string>("");

    const handleSubmit = async () => {
        try{
            const data = {
                username: username,
                picture: image 
            }
            await ProfileHelper.updateProfile(data);
        }catch(error){
            console.log(error);
        }
    }

    const fetchData = async () => {
        try{
            const response = await ProfileHelper.getProfile();
            const image = await FileHelper.getFile(response.picture);
            setImage(image);
            setUsername(response.userName);
        }catch(error){
            console.log(error);
        }
    }

    useEffect(() => {
        fetchData();
    }, [])

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
                            image={image}
                            setImage={setImage}
                        />
                    </div>
                    <div>
                        <div className="flex flex-row items-center justify-center mt-4">  
                            <InputComponent
                                placeholder="UserName"
                                value={username}
                                onChange={setUsername}
                                className="font-semibold text-lg text-gray-800"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full flex justify-end px-3">
                <Button
                    appearance="primary"
                    className="bg-slate-700 hover:bg-slate-500 focus:bg-slate-500"
                    onClick={handleSubmit}
                >
                    Save
                </Button>
            </div>
            <Divider />
        </div>
    );
};

export default Profile;