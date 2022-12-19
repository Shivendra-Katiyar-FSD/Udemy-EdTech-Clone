function slider() {
  return `<div id="slider">
    <img src="https://s.udemycdn.com/browse_components/billboard/fallback_banner_image_udlite.jpg" alt="" id="start-image">
</div>`;
}

function autoSlide() {
  let imgArray = [
    "https://s.udemycdn.com/browse_components/billboard/fallback_banner_image_udlite.jpg",
    "https://img-c.udemycdn.com/notices/featured_banner/image_udlite/5bf6274c-4a57-42ce-93d6-9775b06730be.jpg",
    "https://img-c.udemycdn.com/notices/featured_banner/image_udlite/9ea59bc2-bd61-463e-9ce9-7e71e8e586ae.jpg",
    "https://img-c.udemycdn.com/notices/home_banner/image_udlite/934d8b5e-6c87-4f1d-b483-b7cbb66eb218.png",
  ];

  let i = 0;
  let x = setInterval(function () {
    let slider = document.getElementById("slider");
    slider.innnerHTML = null;
    if (i === imgArray.length) i = 0;
    let img = document.createElement("img");
    img.src = imgArray[i];
    slider.innerHTML = null;
    slider.append(img);
    i++;
    console.log("img");
  }, 2000);
  
}
export { slider, autoSlide };
