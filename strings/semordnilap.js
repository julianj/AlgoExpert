function semordnilap(words) {
    // Write your code here.
    let palindromeMap = new Map();
    let pal;
    let result = [];

    for (let word of words) {
        pal = word.split("").reverse().join("");
        if (palindromeMap.has(pal)) {
            result.push([word, pal])            
        } else {
            palindromeMap.set(word);
        }
    }
    return result;
}
  
console.log(semordnilap(["dog", "hello", "god"]));
  
  // Do not edit the line below.
  exports.semordnilap = semordnilap;