import { HeaderBarTheme } from "../../../config/theme/reusable.theme";

type Props = {
    name: string;
}

export default function TaskContainer (props:Props) {
    return(
        <>
            <div className="rounded mt-1 w-full">
                <div className={HeaderBarTheme}><h3 className="font-semibold text-xl text-white">{props.name}</h3></div>
                
            </div>
        </>
    )
}
