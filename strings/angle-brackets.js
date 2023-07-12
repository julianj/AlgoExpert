
const solution = (angles) => {
    
    let bal = 0;
    let res = angles;

    for(let i = 0; i < angles.length; i++) {
        if(angles[i] === '<') {
            bal++;
        } else if(angles[i] === '>') {
            if(bal === 0) {
                res = '<' + res;
            } else {
                bal--;
            }
        }
    }

    for(let i = 0; i < bal; i++) {
        res += '>';
    }

    return res;

};

console.log(solution(">>"));
console.log(solution("><<><"));

// Given a string of angle brackets, such as "<<><>><<<>", write a function that adds angle brackets to the beginning and end to make all angle brackets match and return it. The angle brackets "match" if for every "<" there is a corresponding ">" appearing after it in the string, and for every  ">" there is a corresponding "<" appearing before it in the string.
// "><<><"
// "<><<><>>"























function matchBrackets(angles) {
    let bal = 0;
    let res = angles;

    for(let i = 0; i < angles.length; i++) {
        if(angles[i] === '<') {
            bal++;
        } else if(angles[i] === '>') {
            if(bal === 0) {
                res = '<' + res;
            } else {
                bal--;
            }
        }
    }

    for(let i = 0; i < bal; i++) {
        res += '>';
    }

    return res;
}
