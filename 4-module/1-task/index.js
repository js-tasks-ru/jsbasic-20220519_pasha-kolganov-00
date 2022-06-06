function makeFriendsList(friends) {
  // ваш код...
  const ul = document.createElement('ul');

  for(let name of friends){

    ul.innerHTML += `<li> ${name.firstName} ${name.lastName}</li>`;


  }
  return ul;

}
