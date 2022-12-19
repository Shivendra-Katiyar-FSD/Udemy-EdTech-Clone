function webSlider(){
  return `<div class="slide-container swiper">
  <div class="slide-content">
      <div class="card-wrapper swiper-wrapper">
          <div class="card swiper-slide">
              <div class="image-content">
                  <span class="overlay"></span>

                  <div class="card-image">
                      <img src="images/profile1.jpg" alt="" class="card-img">
                  </div>
              </div>

              <div class="card-content">
                  <h2 class="name">David Dell</h2>
                  <p class="description">The lorem text the section that contains header with having open functionality. Lorem dolor sit amet consectetur adipisicing elit.</p>

                  <button class="button">View More</button>
              </div>
          </div>
          <div class="card swiper-slide">
              <div class="image-content">
                  <span class="overlay"></span>

                  <div class="card-image">
                      <img src="images/profile2.jpg" alt="" class="card-img">
                  </div>
              </div>

              <div class="card-content">
                  <h2 class="name">David Dell</h2>
                  <p class="description">The lorem text the section that contains header with having open functionality. Lorem dolor sit amet consectetur adipisicing elit.</p>

                  <button class="button">View More</button>
              </div>
          </div>
          <div class="card swiper-slide">
              <div class="image-content">
                  <span class="overlay"></span>

                  <div class="card-image">
                      <img src="images/profile3.jpg" alt="" class="card-img">
                  </div>
              </div>

              <div class="card-content">
                  <h2 class="name">David Dell</h2>
                  <p class="description">The lorem text the section that contains header with having open functionality. Lorem dolor sit amet consectetur adipisicing elit.</p>

                  <button class="button">View More</button>
              </div>
          </div>
          <div class="card swiper-slide">
              <div class="image-content">
                  <span class="overlay"></span>

                  <div class="card-image">
                      <img src="images/profile4.jpg" alt="" class="card-img">
                  </div>
              </div>

              <div class="card-content">
                  <h2 class="name">David Dell</h2>
                  <p class="description">The lorem text the section that contains header with having open functionality. Lorem dolor sit amet consectetur adipisicing elit.</p>

                  <button class="button">View More</button>
              </div>
          </div>
          <div class="card swiper-slide">
              <div class="image-content">
                  <span class="overlay"></span>

                  <div class="card-image">
                      <img src="images/profile5.jpg" alt="" class="card-img">
                  </div>
              </div>

              <div class="card-content">
                  <h2 class="name">David Dell</h2>
                  <p class="description">The lorem text the section that contains header with having open functionality. Lorem dolor sit amet consectetur adipisicing elit.</p>

                  <button class="button">View More</button>
              </div>
          </div>
          <div class="card swiper-slide">
              <div class="image-content">
                  <span class="overlay"></span>

                  <div class="card-image">
                      <img src="images/profile6.jpg" alt="" class="card-img">
                  </div>
              </div>

              <div class="card-content">
                  <h2 class="name">David Dell</h2>
                  <p class="description">The lorem text the section that contains header with having open functionality. Lorem dolor sit amet consectetur adipisicing elit.</p>

                  <button class="button">View More</button>
              </div>
          </div>
          <div class="card swiper-slide">
              <div class="image-content">
                  <span class="overlay"></span>

                  <div class="card-image">
                      <img src="images/profile7.jpg" alt="" class="card-img">
                  </div>
              </div>

              <div class="card-content">
                  <h2 class="name">David Dell</h2>
                  <p class="description">The lorem text the section that contains header with having open functionality. Lorem dolor sit amet consectetur adipisicing elit.</p>

                  <button class="button">View More</button>
              </div>
          </div>
          <div class="card swiper-slide">
              <div class="image-content">
                  <span class="overlay"></span>

                  <div class="card-image">
                      <img src="images/profile8.jpg" alt="" class="card-img">
                  </div>
              </div>

              <div class="card-content">
                  <h2 class="name">David Dell</h2>
                  <p class="description">The lorem text the section that contains header with having open functionality. Lorem dolor sit amet consectetur adipisicing elit.</p>

                  <button class="button">View More</button>
              </div>
          </div>
          <div class="card swiper-slide">
              <div class="image-content">
                  <span class="overlay"></span>

                  <div class="card-image">
                      <img src="images/profile9.jpg" alt="" class="card-img">
                  </div>
              </div>

              <div class="card-content">
                  <h2 class="name">David Dell</h2>
                  <p class="description">The lorem text the section that contains header with having open functionality. Lorem dolor sit amet consectetur adipisicing elit.</p>

                  <button class="button">View More</button>
              </div>
          </div>
      </div>
  </div>

  <div class="swiper-button-next swiper-navBtn"></div>
  <div class="swiper-button-prev swiper-navBtn"></div>
  <div class="swiper-pagination"></div>
</div>`
}




function swipe(){
  var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
        1275: {
          slidesPerView: 4,
        },
        1500: {
          slidesPerView: 5,
        }
    },
  });
}


export {webSlider, swipe};