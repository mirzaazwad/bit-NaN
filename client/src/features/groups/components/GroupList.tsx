import { Button, Tooltip, Whisper } from "rsuite";
import { HeaderBarTheme } from "../../../config/theme/reusable.theme";
import PlusIcon from '@rsuite/icons/Plus';
import GroupMinimal from "../../../components/group/GroupMinimal";
const GroupList = () => {
    return (
        <>
            <div className="relative w-full mt-1 rounded-md bg-gray-100 px-1">
                <div className={`${HeaderBarTheme}`}>
                    <h3 className="font-semibold text-xl text-white">Groups</h3>
                </div>
                <div className="w-full flex flex-col">
                    <GroupMinimal name="Group 1" id="1" />
                    <GroupMinimal name="Group 1" id="1" />
                </div>
                <div className="w-full flex p-2">
                    <Whisper
                        trigger="hover"
                        placement="top"
                        speaker={<Tooltip>Add a new group</Tooltip>}
                    >
                        <Button
                            appearance="default"
                            className="transition duration-300 ease-in-out transform bg-gradient-to-r from-black to-blue-900 text-white font-semibold py-2 w-full shadow-md hover:shadow-lg hover:scale-105 hover:from-blue-900 hover:to-black"
                        >
                            <PlusIcon />
                        </Button>
                    </Whisper>
                </div>
            </div>
        </>
    );
}

export default GroupList;