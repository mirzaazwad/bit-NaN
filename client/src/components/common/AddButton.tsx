import { Button, Tooltip, Whisper } from "rsuite";
import PlusIcon from '@rsuite/icons/Plus';

type Props = {
    tip: string;
    onClick?: ()=>void;
}
const AddButton = (props:Props) => {
    return (
        <Whisper
            trigger="hover"
            placement="top"
            speaker={<Tooltip>{props.tip}</Tooltip>}
        >
            <Button
                appearance="default"
                className="transition duration-300 ease-in-out transform bg-gradient-to-r from-black to-blue-900 text-white font-semibold py-2 w-full shadow-md hover:shadow-lg hover:scale-105 hover:from-blue-900 hover:to-black"
                onClick={props.onClick}
            >
                <PlusIcon />
            </Button>
        </Whisper>
    );
}

export default AddButton;