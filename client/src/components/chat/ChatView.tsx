import { HeaderBarTheme } from "../../config/theme/reusable.theme";
import { GroupType } from "../../utils/templates/Groups";
import InputComponent from "./InputComponent";
import Message from "./Message";
type IProps = {
    group: GroupType;
}
const ChatView = (props: IProps) => {

    return (
        <>
            <div className="w-full flex flex-col rounded-md max-h-screen min-h-96 pt-1">
                <div className={`${HeaderBarTheme}`}>
                    <h3 className="font-semibold text-xl text-white">{props.group.name}</h3>
                </div>
                <div className="flex flex-col justify-end bg-gray-100 h-full">
                    <div className="flex flex-col w-full min-h-9">
                        <div className="flex flex-col">
                            <Message name="John Doe" message="Hello World!" />
                            <Message name="John Doe" message="Hello World!" />
                        </div>
                    </div>
                    <div className="flex w-full h-24">
                        <InputComponent />
                    </div>
                </div>
            </div>
        </>
    );
}

export default ChatView;