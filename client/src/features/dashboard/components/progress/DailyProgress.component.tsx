import { useEffect, useState } from "react";
const getWeekNumber = (date: Date): number => {
    const oneJan = new Date(date.getFullYear(), 0, 1);
    const diff = date.getTime() - oneJan.getTime();
    const oneDay = 1000 * 60 * 60 * 24;
    return Math.ceil((diff + oneJan.getDay() * oneDay) / (oneDay * 7));
  };
  
const getColor = (contributions: number) : string => {

    if (contributions >= 12) return 'bg-amber-700';
    if (contributions >= 10) return 'bg-amber-600';
    if (contributions >= 8) return 'bg-amber-500';
    if (contributions >= 4) return 'bg-amber-400';
    if (contributions >= 2) return 'bg-amber-300';
    if (contributions >= 1) return 'bg-amber-200';
    return 'bg-gray-200';
};

const getDatesFor52Weeks = (): string[] => {
    const today = new Date();
    const dates = [];
    for (let i = 0; i < 52 * 7; i++) {
        const date = new Date(today);
        date.setDate(date.getDate() - i);
        dates.push(date.toISOString().slice(0, 10));
    }
    return dates.reverse();
};



// TODO: REMOVE THIS PART LATER
interface Contribution {
    date: string;
  }
  
  interface ContributionsResponse {
    contributions: Contribution[];
  }
  
  const generateDummyData = (): Contribution[] => {
    const dates = getDatesFor52Weeks();
    return dates.map((date) => ({
      date,
      contributions: Math.floor(Math.random() * 20), // Random contributions between 0 and 19
    }));
  };

const DailyProgress = () => {

    const [contributions, setContributions] = useState<Contribution[]>([]);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    useEffect(()=>{
        setContributions(generateDummyData());
        console.log(contributions)
    }, [])

    const dates = getDatesFor52Weeks();
    const contributionsMap: { [key: string]: number } = {};

    if (contributions) {
        contributions?.forEach((contribution) => {
            const date = new Date(contribution.date).toISOString().slice(0, 10);
            contributionsMap[date] = (contributionsMap[date] || 0) + 1;
        });
    }

    return (
        <>
            <div className="rounded-md shadow-md p-6 bg-white">
                <div className="text-xl font-semibold m-2">
                    Full Year Streak
                </div>
                <div className="grid grid-cols-7 gap-1 md:grid-cols-7 md:gap-2">
                {[...Array(52)].map((_, rowIndex) => (
                        <div key={rowIndex} className="grid grid-cols-7 gap-1 md:grid-cols-7 md:gap-2">
                            {[...Array(7)].map((_, colIndex) => {
                                const dateIndex = rowIndex * 7 + colIndex;
                                const date = dates[dateIndex];
                                const weekNumber = getWeekNumber(new Date(date));
                                const contributions = contributionsMap[date] || 0;
                                const colorClass = getColor(contributions);

                                return (
                                    <div className="relative" key={colIndex}>
                                        <div
                                            className={`w-4 h-4 ${colorClass}`}
                                            title={`${contributions} contributions on ${date}`}
                                            onMouseEnter={() => setHoveredIndex(colIndex)}
                                            onMouseLeave={() => setHoveredIndex(null)}
                                        />
                                    </div>
                                );
                            })}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default DailyProgress