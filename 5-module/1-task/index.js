function hideSelf(){

  let but = document.querySelector(".hide-self-button");

  function hid(){
    but.hidden = true;
  }
  
  but.onclick = hid;

}
