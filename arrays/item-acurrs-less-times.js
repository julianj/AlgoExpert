
const solution = (numbers) => {
    
    let hash = new Map();
    for(let i=0; i< numbers.length; i++) {
        if (hash.has(numbers[i])) {
            count = hash.get(numbers[i]);
            hash.set(numbers[i], count+1);
        } else {
            hash.set(numbers[i], 1);
        }
    }

    let tmp = [...hash.entries()].sort((a,b) => a[1] - b[1]);
    console.log(tmp);
    let min = tmp[0][1];
    let output=[];
    output[0] = tmp[0][0];
    for(i=1; i<output.length; i++){
        if (tmp[i][1] == min) {
            output.push(tmp[i][0]);
        } else {
            return output;
        }
    }
    return output;

};

console.log(solution([19,41,42]));