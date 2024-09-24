import { Button } from "rsuite";
import ImageComponent from "../../../components/general/ImageComponent";
import { HeaderBarTheme } from "../../../config/theme/reusable.theme";
import { InputComponent } from "../../../components/goal/CommonComponents";
import { useState } from "react";
import AvatarHelper from "../../../utils/helpers/AvatarHelper";
import { FileType } from "../../../utils/enums/FileEnums";
import { appStore } from "../../../stores/redux-store";
import { loaderActions } from "../../../stores/slices/loader-slice";

const ItemPublisher = () => {

    const [image, setImage] = useState(undefined);
    const [name, setName] = useState<string>("");

    const handleSubmit = async () => {
        try{
            appStore.dispatch(loaderActions.turnOnWithMessage("Publishing Item"));
            if(image && name){
                await AvatarHelper.uploadAvatar(image, FileType.AVATAR, name);
            }
        }catch(error){
            console.log(error);
        }finally{
            setImage(undefined);
            setName("");
            await AvatarHelper.fetchItemsAndSave();
            appStore.dispatch(loaderActions.turnOff());
        }
    }

    return(
        <div className="flex-row w-full rounded-md px-1 py-2">
            <div className={HeaderBarTheme}>
                <h3 className="font-semibold text-xl text-white">Publish Item</h3>
            </div>
            <div className="flex flex-col w-full p-2 bg-gray-100">
                <div className="flex items-center justify-center p-1">
                    <ImageComponent
                        size="xl"
                        type="item"
                        image={image}
                        setImage={setImage}
                    />
                </div>
                <div className="py-2">
                    <InputComponent
                        placeholder="Item Name"
                        value={name}
                        onChange={setName}
                    />
                </div>
                <div className="py-3">
                    <Button
                        appearance="default"
                        className="transition duration-300 ease-in-out transform bg-gradient-to-r from-black to-blue-900 text-white font-semibold py-2 w-full shadow-md hover:shadow-lg hover:scale-105 hover:from-blue-900 hover:to-black"
                        onClick={handleSubmit}
                    >
                        Publish
                    </Button>
                </div>
            </div>
        </div>
    );
}
export default ItemPublisher;