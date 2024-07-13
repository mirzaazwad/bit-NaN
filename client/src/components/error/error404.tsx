import { Message } from "rsuite";
import UnknownAuthenticationStatus from "../authentication/UnknownAuthenticationStatusLayout";
import TornBook from '/not-found.jpeg';

const Error404 = () => {
    return ( 
        <UnknownAuthenticationStatus>
             <div className="flex flex-col justify-content-center px-4 py-4 text-2xl rounded-lg bg-red-600 w-full mx-auto text-white">
                <Message type="error" showIcon>
                Ooops this page was not found
                </Message>
                <img src={TornBook} className="w-1/4 mt-12 rounded-lg" />
            </div>
            
        </UnknownAuthenticationStatus>
     );
}
 
export default Error404;