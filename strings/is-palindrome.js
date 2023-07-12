function isPalindrome(string) {

    let begin = 0;
    let end = string.lenth-1;
    while (begin < end) {
      if (string.at(begin) !== string.at(end)) {
        return false;
      }
      begin++;
      end--;
    }
  
    return (begin === end);
  
  }
  
console.log(isPalindrome("abba"));