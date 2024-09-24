import { useEffect } from "react";
import AuthenticatedLayout from "../../../components/authentication/AuthenticatedLayout";
import ItemsContainer from "../components/ItemsContainer";
import AvatarHelper from "../../../utils/helpers/AvatarHelper";
import { useAppSelector } from "../../../stores/redux-store";

const MarketPage = () => {

    const modal = useAppSelector((state)=> state.modal.type);

    useEffect(() => {
        AvatarHelper.fetchItemsAndSave();
    }, [modal]);

    return (
        <AuthenticatedLayout>
            <div className="flex flex-row w-full">
                <div className="flex w-1/6 px-1">
                </div>
                <div className="flex w-4/6 px-1">
                    <ItemsContainer />
                </div>
                <div className="flex w-1/6 px-1 rounded-md">
                    {/* <ItemPublisher/> */}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
export default MarketPage;