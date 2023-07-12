function bestSeat(seats) {

    let longestFreeSpace = 0;
    let currentLongestFreeSpace = 0;
    let startCurrentFreeSpace;
    let bestSeat = -1;

    for (i = 0; i < seats.length; i++) {
        if (seats[i] === 1) {
            if (currentLongestFreeSpace > longestFreeSpace) {
                longestFreeSpace = currentLongestFreeSpace;
                bestSeat = startCurrentFreeSpace + Math.floor(((i - 1)  - startCurrentFreeSpace) / 2);
            }
        } else {
            if (seats[i - 1] === 1) {
                startCurrentFreeSpace = i;
                currentLongestFreeSpace = 1;
            } else {
                currentLongestFreeSpace++;
            }
        }
    }

    return bestSeat;
}

console.log(bestSeat([1, 0, 1, 0, 0, 0, 1]))