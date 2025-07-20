// Real data from World Happiness Report 2024
export const happinessData  = {
    "Denmark": { country: "Denmark", score: 7.583 },
    "Switzerland": { country: "Switzerland", score: 7.512 },
    "Norway": { country: "Norway", score: 7.392 },
    "Sweden": { country: "Sweden", score: 7.344 },
    "Netherlands": { country: "Netherlands", score: 7.319 },
    "United States of America": { country: "United States of America", score: 6.725 },
    "Canada": { country: "Canada", score: 7.103 },
    "United Kingdom": { country: "United Kingdom", score: 6.749 },
    "Germany": { country: "Germany", score: 6.719 },
    "France": { country: "France", score: 6.661 },
    "Australia": { country: "Australia", score: 7.057 },
    "Japan": { country: "Japan", score: 6.06 },
    "South Korea": { country: "South Korea", score: 5.951 },
    "China": { country: "China", score: 5.585 },
    "India": { country: "India", score: 4.036 },
    "Russia": { country: "Russia", score: 5.661 },
};


export function getCountryColor(score) {
    const percentage = Math.round((score / 10) * 100)

    if (percentage <= 50) return "#ef4444" // red-500
    if (percentage <= 70) return "#eab308" // yellow-500
    return "#22c55e" // green-500
}

export function getCountryPercentage(score) {
    return Math.round((score / 10) * 100)
}
  