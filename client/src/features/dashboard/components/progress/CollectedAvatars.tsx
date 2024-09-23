import { useEffect, useState } from "react";
import AvatarHelper from "../../../../utils/helpers/AvatarHelper";
import { Avatar } from "rsuite";

const CollectedAvatars = () => {

    const [avatars, setAvatars] = useState<any[]>([]);

    const fetchAvatars = async () => {
        const res = await AvatarHelper.fetchAvatars();
        setAvatars(res);
    }

    useEffect(() => {
        fetchAvatars();
    }, [])

    return (
        <div className="flex flex-row w-full h-full">
            <div className="w-1/5 font-semibold text-black text-lg">Avatars:</div>
            <div className="w-5/6 px-1 flex flex-row">
                {avatars.map((avatar, index) => (
                    <div className="px-2">
                        <Avatar
                            key={index}
                            size="lg"
                            circle
                            color="yellow"
                            bordered
                            className="hover:scale-105 cursor-pointer"
                            src={URL.createObjectURL(avatar.file) || undefined}
                        ></Avatar>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CollectedAvatars;