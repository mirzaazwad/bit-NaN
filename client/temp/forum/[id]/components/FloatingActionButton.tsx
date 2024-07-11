import { Tooltip, Whisper } from "rsuite";

interface IFloatingActionButtonProps {
    onClick: () => void;
}

const FloatingActionButton = ({onClick}:IFloatingActionButtonProps) => {
    return (
        <div className="w-full flex flex-row justify-end fixed bottom-8 right-8">
            <Whisper trigger="hover" placement="topEnd" controlId={`control-id-button`} speaker={<Tooltip>Ask a Question</Tooltip>}>
                <button onClick={()=>onClick()} className="bg-yellow-600 text-bitBrown rounded-full p-8 w-12 h-12 flex justify-center items-center hover:ring-2 hover:outline-none hover:ring-yellow-600">
                    <p className="text-4xl">+</p>
                </button>
            </Whisper>
        </div>
    );
}

export default FloatingActionButton;