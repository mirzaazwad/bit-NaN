import { HeaderBarTheme } from "@/app/config/theme/reusable.theme";
import TaskContainer from "./TaskContainer";

export default function DailyGoals() {
    return(
        <>
            <div className="flex flex-row w-full">
                <div className="flex w-1/3 p-2">
                    <TaskContainer name="ToDo"/>
                </div>
                <div className="flex w-1/3 p-2">
                    <TaskContainer name="In Progress"/>
                </div>
                <div className="flex w-1/3 p-2">
                    <TaskContainer name="Done"/>  
                </div>
            </div>
        </>
    )
}
