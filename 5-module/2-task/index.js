function toggleText() {
  


  let button = document.querySelector(".toggle-text-button");
  let text = document.querySelector("#text");

  function but(){
    if(text.hidden == false){
      text.hidden = true;
    }else{
      text.hidden = false;
    }
  }

  button.addEventListener("click",but);

}
