import { Avatar as ImageContainer, Button, Loader } from "rsuite";
import { Avatar } from "../../utils/templates/Avatar";
import FileHelper from "../../utils/helpers/fileHelper";
import { useEffect, useState } from "react";
import { ModalControlUtils } from "../../utils/helpers/modalHelper";
import { ModalName } from "../../utils/enums/ModalEnums";
import { TimerControlUtils } from "../../utils/helpers/timerHelper";
import { useAppSelector } from "../../stores/redux-store";

type Props = {
    item: Avatar
}
const MarketItemCard = (props: Props) => {

    const modal = useAppSelector((state) => state.modal.type);

    const [image, setImage] = useState(undefined);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [imageUrl, setImageUrl] = useState<string | null>(null);
    const [disabled, setIsDisabled] = useState<boolean>(false);

    const fetchItemImage = async () => {
        try {
            setIsLoading(true);
            const img = await FileHelper.getFile(props.item.url);
            setImage(img);
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    }

    const fetchPoints = async () =>{
        const points =await TimerControlUtils.fetchPoints();
        if(points<100){
            setIsDisabled(true);
        }
    }

    useEffect(() => {
        fetchItemImage();
    }, []);

    useEffect(() => {
        fetchPoints();
    }, [modal])

    useEffect(() => {
        if (image) {
            const url = URL.createObjectURL(image);
            setImageUrl(url);

            return () => URL.revokeObjectURL(url);
        } else {
            setImageUrl(null);
        }
    }, [image]);

    return (
        <>
            <div className="flex w-48 h-56 rounded-md bg-white m-1">
                <div className="flex flex-col w-full h-full p-2">
                    <div className="h-1/4 flex flex-col items-center justify-center">
                        <div className="font-semibold text-black text-lg">{props.item.name}</div>
                        <div className="font-normal text-black text-md">uploaded by {props.item.uploaderName}</div>
                    </div>
                    <div className="h-2/4 flex items-center justify-center">
                        {isLoading ? (
                            <Loader content="loading"/>
                        ):(
                            <div>
                                <ImageContainer
                                    size="lg"
                                    src={imageUrl || undefined}
                                    circle
                                    color="yellow"
                                    alt="Img"
                                />
                            </div>
                        )}
                    </div>
                    <div className="h-1/4 flex-col ">
                        <div className="flex items-center justify-center text-md font-semibold">
                            Points: 100
                        </div>
                        <div className="flex items-center justify-center">
                            <Button
                                disabled={disabled}
                                appearance="primary"
                                className="bg-amber-500 hover:bg-amber-700 focus:bg-amber-700"
                                onClick={() => ModalControlUtils.updateModalType(ModalName.Confirmation, {
                                    id:props.item.id,
                                    name: props.item.name
                                })}
                            >
                                Buy
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MarketItemCard;