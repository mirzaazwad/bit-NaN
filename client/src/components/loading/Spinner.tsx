import { Loader } from "rsuite";
import { useAppSelector } from "../../stores/redux-store";

const Spinner = () => {
    const {message, isLoading} = useAppSelector(state => state.loader);
    return isLoading ? (
        <Loader center size="lg" content={message} vertical backdrop className="z-50" />
    ):null;
};

export default Spinner;
