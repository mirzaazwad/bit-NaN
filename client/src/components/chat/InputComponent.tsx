import { InputGroup, Input, Button } from 'rsuite';
type IProps = {
    message: string;
    onSubmitClick: () => void;
    onChangeInput: (value: string) => void;
    type?:string;
}
const InputComponent = (props:IProps) => {

    const handleKeyPressEnter = (event: React.KeyboardEvent<HTMLInputElement>) =>{
        if(props.type==="chat"){
            if(event.key==='Enter'){
                props.onSubmitClick();
            }
        }
    }

    return (
        <InputGroup inside style={{ width: '100%', margin: '0 auto', padding: '1rem' }}>
            <Input
                placeholder="Type a message..."
                className="transition duration-300 ease-in-out transform bg-amber-100 text-black font-semibold py-2 rounded-lg shadow-md focus:shadow-lg focus:ring focus:ring-blue-300"
                style={{ flex: 1 }}
                value={props.message}
                onChange={props.onChangeInput}
                onKeyDown={(e)=>handleKeyPressEnter(e)}
            />
            <div className='flex flex-row  h-full items-center justify-center'>
                <InputGroup.Button>
                    <Button
                        appearance="subtle"
                        className="bg-gradient-to-r from-amber-600 to-yellow-600 text-white hover:text-white rounded-full hover:scale-105"
                        size='lg'
                        onClick={props.onSubmitClick}
                    >
                        Send
                    </Button>
                </InputGroup.Button>
            </div>
        </InputGroup>
    );
}

export default InputComponent;
