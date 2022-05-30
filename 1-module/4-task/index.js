function checkSpam(str) {
  
  let lowStr = str.toLowerCase();
  
  if(lowStr.indexOf("1xbet") !== -1 || lowStr.indexOf("xxx") !== -1){
      return true;
  }else{
      return false;
  }
}
