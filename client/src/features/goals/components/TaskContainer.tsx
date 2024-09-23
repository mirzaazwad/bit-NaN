import React from "react";
import { HeaderBarTheme, taskContainerLayout, taskContainerWrapperTheme } from "../../../config/theme/reusable.theme";
import { GoalType } from "../../../utils/templates/Goals";
import Goal from "../../../components/goal/Goal";
import { Button } from "rsuite";
import { ModalControlUtils } from "../../../utils/helpers/modalHelper";
import { ModalName } from "../../../utils/enums/ModalEnums";

type Props = {
    name?: string;
    goals: GoalType[] | [];
    view: string;
}

export default function TaskContainer (props:Props) {

    const renderModal = () => {
        ModalControlUtils.updateModalType(ModalName.GoalDetails, {});
    }

    return(
        <>
            <div className={`${taskContainerWrapperTheme(props.view)}`}>
                {props.name &&(<div className={HeaderBarTheme}><h3 className="font-semibold text-xl text-white">{props.name}</h3></div>)}
                <div className="overflow-y-auto">
                    <div className={`py-1 ${taskContainerLayout(props.view)}`}>
                        {props.goals.length > 0 ? (props.goals.map((goal: GoalType, index: number) => (
                            <React.Fragment key={index}>
                                <div className="flex max-w-fit"><Goal goal={goal}/></div>
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
