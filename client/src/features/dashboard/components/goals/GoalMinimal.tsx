import { useAppSelector } from "../../../../stores/redux-store";
import GoalsHelper from "../../../../utils/helpers/goalsHelper";
import TaskContainer from "../../../goals/components/TaskContainer";

export const GoalMinimal = () => {
    const goals = useAppSelector(state => state.goal.goals);
    const [toDoGoals, __, _] = GoalsHelper.separateGoals(goals);
    return (
        <>
            <div className="rounded mt-1">
                <TaskContainer goals={toDoGoals} view="minimal" />
            </div>
        </>
    );
}