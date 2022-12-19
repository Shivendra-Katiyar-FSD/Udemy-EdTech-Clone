function slider(){
    return `<div id="slider">
    <img src="https://img-c.udemycdn.com/notices/home_banner/image_udlite/934d8b5e-6c87-4f1d-b483-b7cbb66eb218.png" alt="" id="start-image">
</div>`
}
export default slider;

let imgArray = ['https://s.udemycdn.com/browse_components/billboard/fallback_banner_image_udlite.jpg', 'https://img-c.udemycdn.com/notices/home_banner/image_udlite/934d8b5e-6c87-4f1d-b483-b7cbb66eb218.png'];


// let y=imgArray.length-1;
// document.querySelector('#start-image').setAttribute('src', 'y')
let i=0;
let x = setInterval(function(){
    let slider = documet.getElementById('slider');
    if(i===imgArray.length) i=0;
    let img = document.createElement('img');
    img.src = imgArray[i];
    slider.innerHTML = null;
    slider.append(img);
    i++;
},1000)
x;


