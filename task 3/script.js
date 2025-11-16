const images = [
  "https://windows10spotlight.com/wp-content/uploads/2023/01/81a6e74c8adbf7f55406e8c4b80669d5.jpg",
  "https://tse4.mm.bing.net/th/id/OIP.4Yg6jKVCxFV-5V-geE4cOgHaE8?cb=ucfimg2ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
  "https://tse2.mm.bing.net/th/id/OIP.V_I6YDTF99aPyUASg5jE3QHaHa?cb=ucfimg2ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
  "https://th.bing.com/th/id/R.80048c94faacac8b7ff6af18efa3d92a?rik=Ac82coHKVHLVyg&riu=http%3a%2f%2fwonderfulengineering.com%2fwp-content%2fuploads%2f2016%2f01%2fnature-wallpapers-8.jpg&ehk=GoUR7nA3jNm0gIdWFJoMVL1iu%2bJuWOU7Nu7KkgKZzeQ%3d&risl=&pid=ImgRaw&r=0",
  "https://img.freepik.com/premium-photo/one-most-beautiful-countries-that-people-travel-kasmir_924629-3817.jpg"
];

let currentIndex = 0;
const slide = document.getElementById("slide");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const slideshow = document.getElementById("slideshow");

let intervalId;

// Function to show image
function showImage(index) {
  slide.src = images[index];
}

// Next button
nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
});

// Previous button
prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
});

// Auto slideshow
function startSlideshow() {
  intervalId = setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  }, 3000); // 3 seconds
}

// Bonus: Pause on hover
slideshow.addEventListener("mouseenter", () => {
  clearInterval(intervalId);
});

slideshow.addEventListener("mouseleave", () => {
  startSlideshow();
});

// Start initially
startSlideshow();
