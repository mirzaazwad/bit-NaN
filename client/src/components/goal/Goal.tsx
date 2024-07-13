import { goalCardBadgeTheme, goalCardHeaderTheme } from "../../config/theme/reusable.theme";
import { GoalType } from "../../utils/templates/Goals";

type Props  = {
    goal: GoalType | null;
}

const Goal = (props: Props) => {
    if (!props.goal) {
        return null; 
    }

    return (
        <div className="rounded-lg shadow-lg overflow-hidden bg-white border border-gray-200 transition-transform transform hover:scale-105 hover:shadow-xl m-4 w-11/12">
            <div className={`p-4 ${goalCardHeaderTheme(props.goal.status)}`}>
                <h3 className="font-bold text-xl text-white">
                    {props.goal.title}
                </h3>
            </div>
            <div className="p-4">
                <p className="text-gray-600">{props.goal.description}</p>
                <div className="mt-4 flex justify-between items-center">
                    <span className="text-sm text-gray-500">
                        {new Date(props.goal.startTime).toLocaleDateString()}
                    </span>
                    <span className={goalCardBadgeTheme(props.goal.status)}>
                        {props.goal.status}
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Goal;