import { useAppSelector } from "../../../../stores/redux-store";
import GoalsHelper from "../../../../utils/helpers/goalsHelper";
import TaskContainer from "../../../goals/components/TaskContainer";

export const GoalMinimal = () => {
    const goals = useAppSelector(state => state.goal.goals);
    const [__, inProgressGoals, _] = GoalsHelper.separateGoals(goals);
    return (
        <>
            {goals.length > 0 && (
                <div className="rounded mt-1">
                    <TaskContainer name="In Progress" goals={inProgressGoals} view="minimal" />
                </div>
            )}
        </>
    );
}