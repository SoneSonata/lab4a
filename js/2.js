
const baseURL = 'images/';
const nxt = document.querySelector('.nxt');
const prev = document.querySelector('.prev');
const slide = document.querySelector('.pic');
const pics = ['pic1.png', 'pic2.png', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg', 'pic6.jpg', 'pic7.jpg', 'pic8.jpg', 'pic9.jpg'];
let index = 1;

nxt.onclick = function(e) {
  e.preventDefault();
  
  slide.src = baseURL + pics[index];
  index++;
  console.log(index);

  //write a conditional so that the images wrap back to the beginning image.
  if(index >= pics.length) {
    index = 0;
  }
}

//Add a previous button event listener
prev.onclick = function(e) {
    e.preventDefault();
    
    slide.src = baseURL + pics[index];
    index--
    console.log(index);
  
    //write a conditional so that the images wrap back to the beginning image.
    if(index <= 0) {
      index = 8;
    }
  }