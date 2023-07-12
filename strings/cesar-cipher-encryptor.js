function cipher(char, pos, alphabet, size) {
    let charPos = alphabet.indexOf(char);
    let normalizedPos = pos % size;
    let newPos = charPos + normalizedPos;
    if (newPos > (size-1)) {
      newPos = newPos - (size);
    }
    return alphabet.at(newPos);
  }
    
  function caesarCipherEncryptor(string, key) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let size = alphabet.length;

    let output = "";
    for (let i=0; i<string.length; i++) {
      output = output.concat(cipher(string.at(i), key, alphabet, size));
    }
  
    return output;
  }
  
  console.log(caesarCipherEncryptor("abc",57))