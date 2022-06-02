function filterRange(arr, a, b) {
  
  let newArr = [];

  for(let i in arr){
    if(arr[i] >= a && arr[i] < b){
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
