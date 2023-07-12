function runLengthEncoding(string) {
    let currentChar = string[0];
    let currentCount = 1;
    let output = '';

    for (let i = 1; i < string.length; i++) {
        if (string[i] === currentChar) {
            if (currentCount > 8) {
                output = output.concat(9).concat(currentChar);
                currentCount = 1;
            } else {
                currentCount++;
            }
        } else {
            output = output.concat(currentCount).concat(currentChar);
            currentChar = string[i];
            currentCount = 1;
        }
    }

    output = output.concat(currentCount).concat(currentChar);

    return output;
}
  
  // Do not edit the line below.
  exports.runLengthEncoding = runLengthEncoding;
  
  console.log(runLengthEncoding("AAAAAAAAAAAAABBCCCCDD"))