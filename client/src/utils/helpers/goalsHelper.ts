import { API_ROUTES } from "../../api/apiRoutes";
import { appStore } from "../../stores/redux-store";
import { goalActions } from "../../stores/slices/goals-slice";
import { getData, postData, putData } from "../common/apiCall";
import { GoalStatus } from "../enums/GoalEnum";
import { GoalType } from "../templates/Goals";

class GoalsHelper{
    static async fetchGoalsByUser(): Promise<GoalType[]> {
        const response = await getData(API_ROUTES.goals.fetchByCurrentUser);
        this.setData(response.data, goalActions.setGoals);
        return response.data as GoalType[];
    }

    static setData<T>(data: T, actionCreator: (data: T) => any): void {
        appStore.dispatch(actionCreator(data));
    }

    static separateGoals(goals: GoalType[]): [GoalType[], GoalType[], GoalType[]] {
        const toDoGoals = goals.filter(goal => goal.status === GoalStatus.ToDo) || [];
        const inProgressGoals = goals.filter(goal => goal.status === GoalStatus.InProgress) || [];
        const doneGoals = goals.filter(goal => goal.status === GoalStatus.Done) || [];

        return [toDoGoals, inProgressGoals, doneGoals];
    }

    static AddOrEditNewTask(data: GoalType): Promise<GoalType> {
        if(data.id !== ''){
            return this.updateTask(data);
        }else{
            return this.addNewTask(data);
        }
    }

    static async addNewTask(data: GoalType): Promise<GoalType> {
        const response = await postData(API_ROUTES.goals.create, data);
        return response.data;
    }

    static async updateTask(data: GoalType): Promise<GoalType> {
        const response = await putData(`${API_ROUTES.goals.update}/${data.id}`, data);
        return response.data;
    }

}

export default GoalsHelper;