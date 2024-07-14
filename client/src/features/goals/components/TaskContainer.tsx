import React from "react";
import { HeaderBarTheme } from "../../../config/theme/reusable.theme";
import { GoalType } from "../../../utils/templates/Goals";
import Goal from "../../../components/goal/Goal";
import { Button } from "rsuite";
import { ModalControlUtils } from "../../../utils/helpers/modalHelper";
import { ModalName } from "../../../utils/enums/ModalEnums";

type Props = {
    name: string;
    goals: GoalType[] | [];
}

export default function TaskContainer (props:Props) {

    const renderModal = () => {
        ModalControlUtils.updateModalType(ModalName.GoalDetails, {});
    }

    return(
        <>
            <div className="rounded w-full bg-gray-100 max-h-screen overflow-y-auto">
                <div className={HeaderBarTheme}><h3 className="font-semibold text-xl text-white">{props.name}</h3></div>
                <div className="overflow-y-auto">
                    <div className="py-1 flex flex-col items-center justify-center ">
                        {props.goals.length > 0 ? (props.goals.map((goal: GoalType, index: number) => (
                            <React.Fragment key={index}>
                                <Goal goal={goal}/>
                            </React.Fragment>
                        ))): (
                            <>
                                <div className="px-2">
                                    <p>No Tasks to show</p>
                                </div>
                            </>
                        )}
                        {props.name === "ToDo" ? (
                            <div className="w-full">
                                <Button className="w-full" block appearance="subtle" onClick={renderModal}>
                                    Create new task
                                </Button>
                            </div>
                        ):(
                            <></>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}
