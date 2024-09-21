type Props = {
    points: number;
}

const Points = (props: Props) => {
    return (
        <>
            <div className="flex lg:flex-row flex-col px-2 py-1 w-full">
                <div className="font-semibold text-lg text-black lg:w-1/3 w-full">Points: {props.points}</div>
                <div className="font-normal text-md text-black p-1">Use timer and study to earn more points</div>
            </div>
        </>
    );
}

export default Points;