

const images = [
    {
      src: "img/01.webp",
      alt: "Spiderman",
      title: "Spiderman",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.",
    },
    {
      src: "img/02.webp",
      alt: "Ratchet & Clank",
      title: "Ratchet & Clank",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.",
    },
    {
      src: "img/03.webp",
      alt: "Fortnite",
      title: "Fortnite",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.",
    },
    {
      src: "img/04.webp",
      alt: "Stray",
      title: "Stray",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.",
    },
    {
      src: "img/05.webp",
      alt: "Avengers",
      title: "Avengers",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.",
    },
  ];
  
  let currentIndex = 0;
  

  const sliderImage = document.getElementById("sliderImage");
  const sliderTitle = document.getElementById("sliderTitle");
  const sliderDescription = document.getElementById("sliderDescription");
  const thumbs = document.getElementsByClassName("thumb");
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");

  function showImage(index) {
    currentIndex = index;
    updateSliderContent();
  }
 
  function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateSliderContent();
  }
  
  function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    updateSliderContent();
  }
  function updateSliderContent() {
    sliderImage.src = images[currentIndex].src;
    sliderImage.alt = images[currentIndex].alt;
    sliderTitle.textContent = images[currentIndex].title;
    sliderDescription.textContent = images[currentIndex].description;
  
    updateThumbnails();
  }

  function updateThumbnails() {
    for (let i = 0; i < thumbs.length; i++) {
      if (i === currentIndex) {
        thumbs[i].classList.add("active");
      } else {
        thumbs[i].classList.remove("active");
      }
    }
  }
  
 
  prevBtn.onclick = prevImage;
  nextBtn.onclick = nextImage;
  for (let i = 0; i < thumbs.length; i++) {
    thumbs[i].onclick = function() {
      showImage(i);
    };
  }
  
  updateSliderContent();
  