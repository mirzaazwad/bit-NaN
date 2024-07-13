import { GoalStatus } from "../enums/GoalEnum";

export interface GoalType{
    id:string,
    title:string,
    description:string,
    userEmail:string,
    startTime: Date,
    endTime: Date,
    notes:string,
    status:GoalStatus,
}