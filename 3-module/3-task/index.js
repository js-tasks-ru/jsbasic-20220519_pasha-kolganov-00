function camelize(str) {

  let words = str.split('-');
  

  words = words.map((wor,index) => index == 0 ? wor : wor[0].toUpperCase() + wor.slice(1));

  words = words.join('');

  return words;
}
