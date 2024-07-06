import SideNavGoals from "./components/SideNavGoals";

const Goals = () => {
    return(
        <>
        <div className="flex w-full min-h-screen">
            <div className="flex flex-row w-full h-full">
                <div className="flex w-1/4">
                    <SideNavGoals />
                </div>
                <div className="flex w-1/2">

                </div>
                <div className="flex w-1/4"></div>
            </div>
        </div>
        </>
    );
}

export default Goals;