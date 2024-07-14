import { DatePicker, Input, InputPicker } from "rsuite";
import { GoalStatus } from "../../utils/enums/GoalEnum";

type Props ={
    placeholder: string;
    value?: string;
    onChange?: (value: string) => void;
    className?: string
}
const InputComponent = (props : Props) =>{
    return(
        <>
            <Input 
                placeholder={props.placeholder}
                value={props.value}
                onChange={props.onChange}
                className={props.className}
            />
        </>
    );
}

type DateProps =  {
    placeholder: string;
    value: Date;
    onChange?: (value: Date) => void;
    className?: string
}

const InputDateComponent = (props : DateProps) =>{
    return(
        <>
            <DatePicker 
                placeholder={props.placeholder}
                value={props.value}
                onChange={(value: Date | null) => props.onChange?.(value || new Date())}
                className={props.className}
            />
        </>
    );
}

const statuses = Object.values(GoalStatus).map(status => ({ label: status, value: status }));

const InputStatusPicker = (props: Props) => {
    return (
        <InputPicker
            data={statuses}
            placeholder={props.placeholder}
            style={{ width: 224 }}
            cleanable={false}
        />
    );
};

export {InputComponent, InputDateComponent, InputStatusPicker};