import { Message } from "rsuite";
import UnknownAuthenticationStatus from "../authentication/UnknownAuthenticationStatusLayout";
import BrokenRobot from '/broken.jpg';

const Error500 = () => {
    return ( 
        <UnknownAuthenticationStatus>
            <div className="flex flex-col justify-content-center px-4 py-4 text-2xl rounded-lg bg-blue-600 w-full mx-auto text-white">
                <Message type="error" showIcon>
                Ooops you ran into an Internal Server Error, Please Try Again Later
                </Message>
                <img src={BrokenRobot} className="w-1/4 mt-12 rounded-lg" />
            </div>
        </UnknownAuthenticationStatus>
     );
}
 
export default Error500;