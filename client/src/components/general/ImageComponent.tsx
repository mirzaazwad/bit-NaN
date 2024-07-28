import { Avatar } from "rsuite";
import { Size } from "rsuite/esm/AvatarGroup/AvatarGroup";
import PeoplesIcon from '@rsuite/icons/Peoples';
type Props = {
    size: Size;
    image: any;
    setImage: (value: any) => void;
    type?: string;
}
const ImageComponent = (props: Props) => {

    const handleImageChange = (e: any) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                props.setImage(reader.result);
            };
            reader.readAsDataURL(file);
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
                    src={props.image}
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