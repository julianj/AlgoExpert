// O(n) time n=number of competitions | O(k) space k=number of teams
// Took about 35 minutes to get it passing the tests
function tournamentWinner(competitions, results) {
    // Write your code here.
    let teams = new Map();
    let highestPoints = ["", -1]; // keep tally of highest points and the team.
    const assignPoints = (competition, result) => {
        let homeTeam = 0;
        let awayTeam = 1;
        let winner = (result === 0)
            ? competition[awayTeam]
            : competition[homeTeam];
        let score = teams.get(winner) || 0;
        score += 3;
        teams.set(winner, score);
        if ((score) > highestPoints[1]) {
            highestPoints[0] = winner;
            highestPoints[1] = score;
        }
    }

    results.forEach((result, idx) => {
        assignPoints(competitions[idx], result);
    })

    return highestPoints[0];
}

console.log(tournamentWinner([
    ["HTML", "C#"],
    ["C#", "Python"],
    ["Python", "HTML"]
], [0, 0, 1]))

console.log(tournamentWinner([
    ["AlgoMasters", "FrontPage Freebirds"],
    ["Runtime Terror", "Static Startup"],
    ["WeC#", "Hypertext Assassins"],
    ["AlgoMasters", "WeC#"],
    ["Static Startup", "Hypertext Assassins"],
    ["Runtime Terror", "FrontPage Freebirds"],
    ["AlgoMasters", "Runtime Terror"],
    ["Hypertext Assassins", "FrontPage Freebirds"],
    ["Static Startup", "WeC#"],
    ["AlgoMasters", "Static Startup"],
    ["FrontPage Freebirds", "WeC#"],
    ["Hypertext Assassins", "Runtime Terror"],
    ["AlgoMasters", "Hypertext Assassins"],
    ["WeC#", "Runtime Terror"],
    ["FrontPage Freebirds", "Static Startup"]
]
    , [1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0]))

// Do not edit the line below.
exports.tournamentWinner = tournamentWinner;

