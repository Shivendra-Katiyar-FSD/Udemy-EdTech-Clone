function navbar(){
    return `<div id="header">
    <div id="logo">
      <a href="" target="_blank">
        <img
          src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg"
          alt="UdemyLogo"
      /></a>
    </div>
    <div class="wrapper">
      <div class="right-menu">
        <button class="menu-button">Categories</button>
        <div class="dropdown-menu">
          <a href="">Development</a>
          <a href="">Business</a>
          <a href="">Finance & Accounting</a>
          <a href="">IT & Software</a>
          <a href="">Office Productivity</a>
          <a href="">Personal Development</a>
          <a href="">Design</a>
          <a href="">Marketing</a>
          <a href="">Lifestyle</a>
          <a href="">Photography & Video</a>
          <a href="">Health & Fitness</a>
          <a href="">Music</a>
          <a href="">Teaching & Academics</a>
        </div>
      </div>
    </div>
    <div id="search-box">
      <span class="material-symbols-outlined"> search </span>
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Search for anything"
      />
    </div>
    <div class="wrapper-2">
      <div class="right-menu-2">
        <button class="menu-button-2">Udemy Business</button>
        <div class="dropdown-menu-2">
          <h2>
            Get your team access to our top 19,000 top Udemy Courses, anutime,
            anywhere.
          </h2>
          <button>Try Udemy Business</button>
        </div>
      </div>
    </div>
    <div class="wrapper-2">
      <div class="right-menu-2">
        <button class="menu-button-2">Teach Udemy</button>
        <div class="dropdown-menu-2">
          <h2>
            Turn what you know into an opportunity and reach millions around
            the world.
          </h2>
          <button>Learn More</button>
        </div>
      </div>
    </div>
    <div id="cart">
      <a href=""
        ><div>
          <span class="material-symbols-outlined"> shopping_cart </span>
        </div></a
      >
    </div>
    <div id="login">
      <a href=""><button>LogIn</button></a>
    </div>
    <div id="signup">
      <a href=""><button>SignUp</button></a>
    </div>
  </div>
`
}


export default navbar;