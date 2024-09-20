import { useEffect, useState } from "react";
import { Tooltip, Whisper } from "rsuite";

const getWeekNumber = (date: Date): number => {
    const oneJan = new Date(date.getFullYear(), 0, 1);
    const diff = date.getTime() - oneJan.getTime();
    const oneDay = 1000 * 60 * 60 * 24;
    return Math.ceil((diff + oneJan.getDay() * oneDay) / (oneDay * 7));
};

const getColor = (contributions: number): string => {
    if (contributions >= 12) return "bg-amber-700";
    if (contributions >= 10) return "bg-amber-600";
    if (contributions >= 8) return "bg-amber-500";
    if (contributions >= 4) return "bg-amber-400";
    if (contributions >= 2) return "bg-amber-300";
    if (contributions >= 1) return "bg-amber-200";
    return "bg-gray-200";
};

// Generate dates for the last 30 days
const getDatesFor30Days = (): string[] => {
    const today = new Date();
    const dates = [];
    for (let i = 0; i < 30; i++) {
        const date = new Date(today);
        date.setDate(date.getDate() - i);
        dates.push(date.toISOString().slice(0, 10));
    }
    return dates.reverse();
};

// TODO: REMOVE THIS PART LATER
interface Contribution {
    date: string;
    contributions: number;
}

const generateDummyData = (): Contribution[] => {
    const dates = getDatesFor30Days();
    return dates.map((date) => ({
        date,
        contributions: Math.floor(Math.random() * 20),
    }));
};

const DailyProgress = () => {
    const [contributions, setContributions] = useState<Contribution[]>([]);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    useEffect(() => {
        setContributions(generateDummyData());
    }, []);

    const dates = getDatesFor30Days();
    const contributionsMap: { [key: string]: number } = {};

    if (contributions) {
        contributions.forEach((contribution) => {
            const date = new Date(contribution.date).toISOString().slice(0, 10);
            contributionsMap[date] = (contributionsMap[date] || 0) + contribution.contributions;
        });
    }

    return (
        <>
            <div className="rounded-md shadow-md p-3 bg-white">
                <div className="text-xl font-semibold mr-1 my-2">Progress in last 30 days</div>
                <div className="grid grid-cols-7 gap-1 md:grid-cols-7 md:gap-2">
                    {[...Array(Math.ceil(dates.length / 7))].map((_, rowIndex) => (
                        <div key={rowIndex} className="grid grid-cols-7 gap-1 md:grid-cols-7 md:gap-2">
                            {[...Array(7)].map((_, colIndex) => {
                                const dateIndex = rowIndex * 7 + colIndex;
                                if (dateIndex >= dates.length) return null; // To prevent rendering extra days
                                const date = dates[dateIndex];
                                const contributions = contributionsMap[date] || 0;
                                const colorClass = getColor(contributions);

                                return (
                                    <div className="relative" key={colIndex}>
                                        <Whisper
                                            trigger="hover"
                                            placement="top"
                                            speaker={<Tooltip>{`${contributions} contributions on ${date}`}</Tooltip>}
                                        >
                                            <div
                                                className={`w-4 h-4 ${colorClass}`}
                                                // title={`${contributions} contributions on ${date}`}
                                                onMouseEnter={() => setHoveredIndex(colIndex)}
                                                onMouseLeave={() => setHoveredIndex(null)}
                                            >

                                            </div>
                                        </Whisper>
                                    </div>
                                );
                            })}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default DailyProgress;
