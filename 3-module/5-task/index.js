function getMinMax(str) {
  
  
  str = str.split(" ");
  let arr = [];

  for(let key of str){

    if( isNaN(key) == false){

      arr.push(key);    
    
    }
  }

  arr.sort((a,b) => a-b);

  let result = {
    'min':+arr.shift(),
    'max':+arr.pop(),
  }

  return result;

}

let inputData = '1 и -5.8 или 10 хотя 34 + -5.3 и 73';

getMinMax(inputData);