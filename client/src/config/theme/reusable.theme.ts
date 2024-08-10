import { GoalStatus } from "../../utils/enums/GoalEnum";

export const HeaderBarTheme: string = "bg-bitBrown border-2 border-black rounded-md flex justify-center drop-shadow-md";

export const SideNavButtonTheme = (activeTab:string, active:string) => {
    return `px-4 py-2 w-full rounded-r-md mb-1 transition-colors duration-200 ease-in-out ${
        activeTab === active
          ? 'bg-amber-500 text-white hover:bg-amber-600'
          : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
      } shadow-md`;
}

export const goalCardHeaderTheme =(status:string): string =>{
    return status === GoalStatus.Done ? 'bg-green-500' : status === GoalStatus.InProgress ? 'bg-yellow-500' : 'bg-blue-500';
}

export const goalCardBadgeTheme = (status: string): string => {
    return `inline-block px-2 py-1 text-xs font-semibold rounded ${status === GoalStatus.Done ? 'bg-green-200 text-green-800' : status === GoalStatus.InProgress ? 'bg-yellow-200 text-yellow-800' : 'bg-blue-200 text-blue-800'}`;
}

export const taskContainerWrapperTheme = (view: string): string => {
    return `${view === "broad" ? "rounded w-full bg-gray-100 max-h-screen overflow-y-auto":"rounded mt-1"}`;
}

export const taskContainerLayout = (view:string): string => {
    return `${view === "broad" ? 
    "flex flex-col justify-content-center items-center " 
    : 
    "flex flex-row justify-start ms-6"}`;
}