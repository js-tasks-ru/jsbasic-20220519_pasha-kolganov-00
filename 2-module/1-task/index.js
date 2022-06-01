function sumSalary(salaries) {
  
  let result = 0;
  
  for(let key in salaries){
 
    if(typeof(salaries[key]) == 'number' && isFinite(salaries[key]) == true){
      result += salaries[key];
    }else if(parseInt(salaries[key]) == 'NaN'){
      return 0;
    }
  }
  return result;
}
