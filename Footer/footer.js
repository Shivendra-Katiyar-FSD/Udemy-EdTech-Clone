function loadGoogleTranslate(){
    new google.translate.TranslateElement("language-translate");
}

function footer(){
    return `<div id="footer">
      <div id="foot-top">
        <div id="sections">
            <div>
                <a href="">Udemy Business</a>
                <a href="">Teach on Udemy</a>
                <a href="">Get the app</a>
                <a href="">About us</a>
                <a href="">Contact us</a>
            </div>
            <div>
                <a href="">Careers</a>
                <a href="">Blog</a>
                <a href="">Help and Support</a>
                <a href="">Affiliate</a>
                <a href="">Investors</a>
            </div>
            <div>
                <a href="">Terms</a>
                <a href="">Privacy policy</a>
                <a href="">Cookie settings</a>
                <a href="">Sitemap</a>
                <a href="">Accessibility statement</a>
            </div>
        </div>
        <div id="language-translate"></div>
      </div>
      <div id="foot-bottom">
        <div id="logo">
          <a href="" target="_blank">
            <img
              src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy-inverted.svg"
              alt="UdemyLogo"
          /></a>
        </div>
        <div><span>&#169<span>-2022 Udemy, Inc.</div>
      </div>
    </div>
`
}

export default footer;