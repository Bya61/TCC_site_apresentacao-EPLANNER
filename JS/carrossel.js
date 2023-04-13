let count = 1;
document.getElementById("radio1").checked = true;

setInterval(function(){
 nextImagem();
}, 3000)

function nextImagem(){
    count++;
    if(count > 3){
        count = 1
    }
   
    document.getElementById("radio"+count).checked = true;

}


/*const carouselContainer = document.querySelector('.carousel-container');
const carouselItems = document.querySelectorAll('.carousel-item');

let currentIndex = 0;

setInterval(() => {
  currentIndex++;
  if (currentIndex >= carouselItems.length) {
    currentIndex = 0;
  }
  carouselContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
}, 5000);*/


/*const carousel = document.querySelector('.carousel-images');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const imageWidth = carousel.offsetWidth / 3;

let position = 0;

prevButton.addEventListener('click', () => {
  if (position < 0) {
    position += imageWidth;
    carousel.style.transform = `translateX(${position}px)`;
  }
});

nextButton.addEventListener('click', () => {
  if (position > -imageWidth * 2) {
    position -= imageWidth;
    carousel.style.transform = `translateX(${position}px)`;
  }
});*/


const carouselImages = document.querySelector('.carousel-images');
const carouselText = document.querySelector('.carousel-text');
const prevBtn = document.querySelector('.prev-button');
const nextBtn = document.querySelector('.next-button');

let currentIndex = 0;

function showImage() {
  carouselImages.style.transform = `translateX(-${currentIndex * 50}%)`;
  carouselText.style.transform = `translateX(-${currentIndex * 50}%)`;
}

prevBtn.addEventListener('click', () => {
  if (currentIndex === 0) {
    currentIndex = carouselImages.children.length - 1;
  } else {
    currentIndex--;
  }
  showImage();
});





nextBtn.addEventListener('click', () => {
  if (currentIndex === carouselImages.children.length - 1) {
    currentIndex = 0;
  } else {
    currentIndex++;
  }
  showImage();
});




 
