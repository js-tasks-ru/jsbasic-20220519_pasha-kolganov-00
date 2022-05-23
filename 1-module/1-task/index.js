function factorial(n) {
    let result = n;

    if( n > 1){
      for(let i = 1; i < n; i++){
        result *= (n - i);
    }
    return result;
  }else if( n == 0 || n == 1){
      return 1;
  }else{
      return "n < 0";
  }
}
