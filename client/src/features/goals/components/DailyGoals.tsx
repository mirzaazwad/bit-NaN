import { useAppSelector } from "../../../stores/redux-store";
import GoalsHelper from "../../../utils/helpers/goalsHelper";
import TaskContainer from "./TaskContainer";

export default function DailyGoals() {

    const goals = useAppSelector(state => state.goal.currentGoals);
    const [toDoGoals, inProgressGoals, doneGoals] = GoalsHelper.separateGoals(goals);
    return(
        <>
            <div className="flex flex-row w-full">
                <div className="flex w-1/3 p-1">
                    <TaskContainer name="ToDo" goals ={toDoGoals} view="broad"/>
                </div>
                <div className="flex w-1/3 p-1">
                    <TaskContainer name="In Progress" goals={inProgressGoals} view="broad"/>
                </div>
                <div className="flex w-1/3 p-1">
                    <TaskContainer name="Done" goals={doneGoals} view="broad"/>  
                </div>
            </div>
        </>
    )
}
