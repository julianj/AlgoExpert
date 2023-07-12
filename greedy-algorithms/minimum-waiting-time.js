function minimumWaitingTime(queries) {
  queries.sort((a, b) => a - b);
  let wT = 0;
  let acumWT = 0;
  for (i = 1; i < queries.length; i++) {
    wT = (wT + queries[i - 1]);
    acumWT += wT; 
  }
  return acumWT
  
}

console.log(minimumWaitingTime([3, 2, 1, 2, 6]))
// Do not edit the line below.
exports.minimumWaitingTime = minimumWaitingTime;
