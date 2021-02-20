
window.addEventListener('load', () => {
    const footer = Handlebars.compile(
        `<div>For enquiries, please email <a href="mailto:foraging-focus@example.com">foraging-focus@example.com</a> or
                call
                555-001001001001
    </div>
    <div class="social-media">
          <img src="images/social-media/icons8-facebook-old-48.png" alt="facebook icon">
        <img src="images/social-media/icons8-instagram-48.png" alt="instagram icon">
        <img src="images/social-media/icons8-twitter-48.png" alt="twitter icon">
    </div>
    <div class="validators">
        <a href="http://validator.w3.org/check?uri=referer">Validate HTML</a>
    </div>
    <div>
        <a href="https://jigsaw.w3.org/css-validator/check/referer">Validate CSS </a>
    </div>
    `);

    const footerElement = document.querySelector("footer");
    footerElement.innerHTML = footer({});

});