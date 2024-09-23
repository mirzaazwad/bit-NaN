import MarketItemCard from "../../../components/market/MarketItemCard";
import { useAppSelector } from "../../../stores/redux-store";

const ItemsContainer = () => {

    const items = useAppSelector((state) => state.market.items);

    return (
        <>
            <div className="flex flex-col w-full">
                <div className="flex justify-center items-center w-full p-2">
                    <h1 className="font-bold text-4xl">Buy cool and exciting robot avatars with points!</h1>
                </div>
                <div className="flex flex-wrap w-full p-3 bg-gray-200 rounded-md min-h-96 overflow-y-auto max-h-screen">
                    {items.map((item, index) => {
                        return(
                            <MarketItemCard item={item} key={index} />
                        );
                    })}
                </div>
            </div>
        </>
    );
}

export default ItemsContainer;