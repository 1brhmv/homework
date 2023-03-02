function bubbleSort(arr) {

  /*  
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}


const arr = [3, 1, 4, 2, 5];
const sortedArr = bubbleSort(arr);
console.log(sortedArr); 
*/

const binarySearch = (arr, n) => {
    let low = 0;
    let high = arr.length - 1;
    while (low <= high) {
      const mid = Math.floor((low + high) / 2);


