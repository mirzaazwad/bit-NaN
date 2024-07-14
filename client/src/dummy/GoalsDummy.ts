import { GoalStatus } from "../utils/enums/GoalEnum";
import { GoalType } from "../utils/templates/Goals";

export const goals: GoalType[] = [
    {
        id: '1',
        title: 'Complete Project Proposal',
        description: 'Draft and submit the project proposal to the client, review and make necessary changes. Give a presentation to the team. Make sure the team is aligned with the proposal.',
        userEmail: 'user@example.com',
        startTime: new Date(),
        endTime: new Date(),
        notes: 'NNN',
        status: GoalStatus.InProgress,
    },
    {
        id: '2',
        title: 'Review Codebase',
        description: 'Review the current codebase and document improvements.',
        userEmail: 'user@example.com',
        startTime: new Date(),
        endTime: new Date(),
        notes: '',
        status: GoalStatus.ToDo,
    },
    {
        id: '3',
        title: 'Deploy to Production',
        description: 'Deploy the latest version to the production environment.',
        userEmail: 'user@example.com',
        startTime: new Date(),
        endTime: new Date(),
        notes: '',
        status: GoalStatus.Done,
    },
];