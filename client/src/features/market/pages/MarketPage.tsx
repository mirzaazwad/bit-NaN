import AuthenticatedLayout from "../../../components/authentication/AuthenticatedLayout";
import ItemPublisher from "../components/ItemPublisher";
import ItemsContainer from "../components/ItemsContainer";

const MarketPage = () => {
    return (
        <AuthenticatedLayout>
            <div className="flex flex-row w-full">
                <div className="flex w-1/6 px-1">
                </div>
                <div className="flex w-4/6 px-1">
                    <ItemsContainer />
                </div>
                <div className="flex w-1/6 px-1 rounded-md">
                    <ItemPublisher/>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
export default MarketPage;