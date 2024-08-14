import PeoplesIcon from '@rsuite/icons/Peoples';
import { Avatar } from 'rsuite';
type Props = {
    name: string,
    id: string,
    image?:any,
    onClick?:()=>void,
}
const GroupMinimal = (props: Props) => {
    return(
        <>
            <div 
                className="flex flex-row w-full bg-gray-100 rounded-md pb-2 cursor-pointer hover:bg-gray-300 m-1"
                onClick={props.onClick}
            >
                <div className="flex w-1/3 py-2 px-4">
                    <Avatar size="md" circle bordered color="yellow">
                        {props.image ? props.image : <PeoplesIcon />}
                    </Avatar>
                </div>
                <div className="flex w-2/3 items-center">
                    <h3 className="font-semibold text-lg text-gray-800">{props.name}</h3>
                </div>
            </div>
        </>
    );
}

export default GroupMinimal;