type Props = {
    name: string;
    message: string;
}
const Message = (props: Props) => {
    return (
        <>
            <div className="bg-white rounded-md p-2 flex-1 mb-2">
                <p className="text-xs text-gray-500">{props.name}</p>
                <p className="text-gray-800">{props.message}</p>
            </div>
        </>
    )
}

export default Message;