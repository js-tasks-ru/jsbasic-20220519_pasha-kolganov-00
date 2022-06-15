function initCarousel() {
  // ваш код...

  let carusel_right = document.querySelector(".carousel__arrow_right");
  let carusel_left = document.querySelector(".carousel__arrow_left");

  let width = document.querySelector(".carousel__inner");
  let counter = 1;
  

  if(counter == 1){
      carusel_left.style.display = 'none';
  }


  carusel_right.addEventListener("click",() => 
  { 
    width.style.transform = `translateX(-${width.offsetWidth * counter}px)`; 
    
    counter++;
    console.log(counter);
    if(counter == 4){
      carusel_right.style.display = 'none';
    }else if(counter > 1){
      carusel_left.style.display = 'block';
    }
  });


  carusel_left.addEventListener("click",() => 
  { 
    width.style.transform = `translateX(-${width.offsetWidth*(counter-2)}px)`; 

    console.log(counter);


    if(counter > 0) counter--;
    if(counter == 1) carusel_left.style.display = 'none';
    
    if(counter < 4){
      carusel_right.style.display = 'block';
    }else{
      carusel_right.style.display = 'none';
    }
  });


}
