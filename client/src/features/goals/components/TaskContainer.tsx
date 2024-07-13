import React from "react";
import { HeaderBarTheme } from "../../../config/theme/reusable.theme";
import { GoalType } from "../../../utils/templates/Goals";
import Goal from "../../../components/goal/Goal";

type Props = {
    name: string;
    goals: GoalType[] | [];
}

export default function TaskContainer (props:Props) {
    return(
        <>
            <div className="rounded mt-1 w-full bg-gray-100 max-h-screen">
                <div className={HeaderBarTheme}><h3 className="font-semibold text-xl text-white">{props.name}</h3></div>
                <div className="py-2 flex items-center justify-center">
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
                </div>
            </div>
        </>
    )
}
