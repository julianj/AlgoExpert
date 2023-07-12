
const solution = (arr) => {
Number.MIN
    function calculateSum(arr, index) {
      if (index >= arr.length || arr[index] === -1) {
        return 0;
      } else {
        const leftChildIndex = 2 * index + 1;
        const rightChildIndex = 2 * index + 2;
        return (
          arr[index] +
          calculateSum(arr, leftChildIndex) +
          calculateSum(arr, rightChildIndex)
        );
      }
    }
  
    const rootIndex = 0;
    const leftSum = calculateSum(arr, 2 * rootIndex + 1);
    const rightSum = calculateSum(arr, 2 * rootIndex + 2);
  
    if (leftSum > rightSum) {
      return "Left";
    } else if (rightSum > leftSum) {
      return "Right";
    } else {
      return "";
    }
  }
  
  // Test case
  const tree1 = [3, 6, 2, 9, -1, 10];
  console.log(solution(tree1)); // Output: "Left"
  
  const tree2 = [1, 10, 5, 1, 0, 6];
  console.log(solution(tree2)); // Output: ""
  


