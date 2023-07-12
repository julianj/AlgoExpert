function balancedBrackets(string) {

    let stack = [];
    let opo = {
        ')': '(',
        ']': '[',
        '}': '{'
    }

    for (let i = 0; i < string.length; i++) {
        if ((string[i] === '(') || (string[i] === '[') || (string[i] === '{')) {
            stack.push(string[i]);
        }

        if ((string[i] === ')') || (string[i] === ']') || (string[i] === '}')) {
            if (stack.pop() !== opo[string[i]]) {
                return false;
            }
        }
    }

    return (stack.length === 0);

}
  
console.log(balancedBrackets("{[[[[({(}))]]]]}"));
  // Do not edit the line below.
  exports.balancedBrackets = balancedBrackets;
  