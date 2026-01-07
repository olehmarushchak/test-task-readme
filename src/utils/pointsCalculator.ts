/**
 * Caclulates points based on the season day.
 * Rules:
 * Day 1: 2 points
 * Day 2: 3 points
 * Day 3+: Round(Points(d-2) + 0.6 * Points(d-1))
 */
export const calculateDailyPoints = (seasonStartDate: Date): string => {
    const oneDayMs = 24 * 60 * 60 * 1000;
    const today = new Date();
    // Normalize to midnight to ensure correct day difference
    const start = new Date(seasonStartDate);
    start.setHours(0, 0, 0, 0);
    const now = new Date(today);
    now.setHours(0, 0, 0, 0);

    const diffDays = Math.round((now.getTime() - start.getTime()) / oneDayMs);
    // Season day is 1-based (diffDays=0 -> Day 1)
    const dayOfSeason = diffDays + 1;

    if (dayOfSeason < 1) return "0";

    let prevPrev = 2; // Day 1
    let prev = 3;     // Day 2

    if (dayOfSeason === 1) return formatPoints(prevPrev);
    if (dayOfSeason === 2) return formatPoints(prev);

    let current = 0;
    for (let d = 3; d <= dayOfSeason; d++) {
        current = Math.round(prevPrev + 0.6 * prev);
        prevPrev = prev;
        prev = current;
    }

    return formatPoints(current);
};

const formatPoints = (points: number): string => {
    if (points >= 1000) {
        // 28745 -> 29K
        return Math.round(points / 1000) + "K";
    }
    return points.toString();
};
