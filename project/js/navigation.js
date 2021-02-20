
// hook up hamburger menu

window.addEventListener('load', () => {

    // <!-- the hamburger menu will be used to open the navigation on small screens -->

    const pages = [
        { link: "index.html", title: "Home" },
        { link: "plants.html", title: "Plants" },
        { link: "recipes.html", title: "Recipes" },
        { link: "events.html", title: "Events" },
        { link: "contact.html", title: "Contact Us" }
    ]

    const currentPage = pages.find(page => page.title === title);

    if (currentPage) {
        currentPage.selected = true;
    }

    const navigation = Handlebars.compile(
        `
        <div class="heading-container">
            <h1>Forage Focus</h1>
            <div class="hamburger-container">
                <div class="hamburger" id="hamburger">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>

        <nav id="menu">
            <ul class="menu">
            {{#each pages}}
                <li {{#if this.selected}} class="selected"+{{/if}}><a href="{{this.link}}">{{this.title}}</a></li>
            {{/each}}
            </ul>
        </nav>
    `);

    const navElement = document.querySelector(".navigation");
    navElement.innerHTML = navigation({ pages: pages });

    let menuOpen = false;
    const menu = document.querySelector("#menu");

    document.querySelector("#hamburger").addEventListener("click", () => {
        menuOpen = !menuOpen;
        menu.className = menuOpen ? 'menu-open' : '';
    });



});