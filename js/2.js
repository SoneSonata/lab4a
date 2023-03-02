
const baseURL = 'images/';
const nxt = document.querySelector('.nxt');
const prev = document.querySelector('.prev');
const slide = document.querySelector('.pic');
const pics = ['pic1.png', 'pic2.png', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg', 'pic6.jpg', 'pic7.jpg', 'pic8.jpg', 'pic9.jpg'];
let index = 0;

nxt.onclick = function(e) {
  e.preventDefault();
  
  index++;
  if(index >= pics.length) {
    index = 0;
  }
  slide.src = baseURL + pics[index];
  console.log(index);

  //write a conditional so that the images wrap back to the beginning image.

  
}

//Add a previous button event listener
prev.onclick = function(e) {
    e.preventDefault();
    index--;
    if(index < 0) {
      index = 8;
    }
    slide.src = baseURL + pics[index];
    console.log(index);
  
    //write a conditional so that the images wrap back to the beginning image.
  
  }