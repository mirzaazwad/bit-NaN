import { Message } from "rsuite";
import UnknownAuthenticationStatus from "../authentication/UnknownAuthenticationStatusLayout";
import HackerImage from '/hacker.jpeg'

const Error403 = () => {
    return ( 
        <UnknownAuthenticationStatus>
            <div className="flex flex-col justify-content-center px-4 py-4 text-2xl rounded-lg bg-yellow-600 w-full mx-auto">
                <Message type="warning" showIcon>
                    Ooops you are not authorized to view this page
                </Message>
                <img src={HackerImage} className="w-1/4 mt-12 rounded-lg" />
            </div>
        </UnknownAuthenticationStatus>
     );
}
 
export default Error403;