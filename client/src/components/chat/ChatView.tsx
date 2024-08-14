import { HeaderBarTheme } from "../../config/theme/reusable.theme";
import { GroupType } from "../../utils/templates/Groups";
import InputComponent from "./InputComponent";
type IProps = {
    group:GroupType;
}
const ChatView = (props:IProps) => {
    return(
        <>
            <div className="w-full flex flex-col rounded-md max-h-screen min-h-96 pt-1">
                <div className={`${HeaderBarTheme}`}>
                    <h3 className="font-semibold text-xl text-white">{props.group.name}</h3>
                </div>
                <div className="flex flex-col justify-end bg-gray-100 h-full">
                    <div className="flex w-full h-24">
                        <InputComponent/>
                    </div>
                </div>  
            </div>
        </>
    );
}

export default ChatView;