import { Avatar } from "rsuite";
import { Size } from "rsuite/esm/AvatarGroup/AvatarGroup";
import PeoplesIcon from '@rsuite/icons/Peoples';
import { useEffect, useState } from "react";
type Props = {
    size: Size;
    image: any;
    setImage: (value: any) => void;
    type?: string;
}
const ImageComponent = (props: Props) => {
    const [imageUrl, setImageUrl] = useState<string | null>(null);

    useEffect(() => {
        if (props.image) {
            const url = URL.createObjectURL(props.image);
            setImageUrl(url);

            return () => URL.revokeObjectURL(url);
        } else {
            setImageUrl(null);
        }
    }, [props.image]);

    const handleImageChange = (e: any) => {
        const file = e.target.files?.[0];
        if (file) {
            props.setImage(file);
        }
    };

    return (
        <div>
            <label htmlFor="image-upload">
                <Avatar
                    size={props.size}
                    circle
                    color="yellow"
                    bordered
                    className="hover:scale-105 cursor-pointer"
                    src={imageUrl || undefined}
                >

                    {!props.image && (props.type === "profile" ? null : <PeoplesIcon />)}
                </Avatar>
            </label>
            <input
                id="image-upload"
                type="file"
                accept="image/*"
                style={{ display: 'none' }}
                onChange={handleImageChange}
            />
        </div>
    );
}

export default ImageComponent;