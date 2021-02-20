
const title = "Plants";

const plants = [{
    title: 'Chestnuts',
    text: `<p>Chestnuts, not to be confused with the inedible horse chestnut (or conker), grow throughout the UK. They have super prickly
        casings, so when you harvest them, in late September or October, a good set of gardening gloves is useful. 
        The collected chestnuts can be roasted or boiled and eaten, or used to make <a href="recipes.html?recipe=Chestnut%20Stuffing">by making Chestnut Stuffing</a> for Christmas</p>`,
    image: 'images/chestnuts.jpg',
    alt: 'chestnuts',
    width: 800   
},
{
    title: 'Walnuts',
    text: `<p>There are a surprising number of Walnut trees in the Leighton Buzzard area - and quite a few streets or places in neighbouring towns
    which contain the word "Walnut" in their name - which suggests extensive cultivation in the past. Trees seem to vary a great deal in their 
    productivity, so when you find a good one, keep it secret (apart from sharing the information with the club of course!).
    Freshly picked walnuts are often called <em>wet walnuts</em> they're good to eat raw, and are juicier and crunchier than the dry ones
    usually sold in shops. There are plenty of recipes for cooking with them, but we've included something different here - how to turn their outer
    casings into <a href="recipes.html?recipe=Walnut%20Ink">high quality artist's ink</a></p>`,
    image: 'images/walnut.jpg',
    alt: 'walnut',
    width: 800,  
},
{
    title: 'Elderflower',
    text: `<p>The Elder produces beautiful fragrant flowers in early summer - the smell is very evocative - it's a sort of honied odour which 
    always reminds me of long summers. It's actually quite possible to capture this scent and enjoy it late into the year: <a href="recipes.html?recipe=Elderflower%20Cordial">by making Elderflower cordial</a></p>`,
    image: 'images/elderflower.jpg',
    alt: 'elderflower',
    width: 800   
},
{
    title: 'Hawthorn',
    text: `<p>Hawthorn is one of the most common hedgerow plants in the UK. The bright red berries (or <em>haws</em>) provide valuable winter food
    for many bird species. It's quite easy to collect a large quantity in a short time, and although they taste rather waxy when eaten raw, 
    they can be used to make a <a href="recipes.html?recipe=Hawthorn%20Jelly">delicious jelly</a> - a great partner for pork.</p>`,
    image: 'images/hawthorn.jpg',
    alt: 'hawthorn',
    width: 800  
},
{
    title: 'Dandelion',
    text: `<p>The brightly coloured dandelion can be found almost everywhere. Unfortunately as it grows close to the ground, the main
    concern is to ensure it's not from an area where dogs are likely to have fouled. I use the ones that spring up from my own lawn, 
    as we don't have dogs. The leaves of the plant can be used in salads - they have a robust, but not unpleasant taste. The flowers can 
    also be eaten, but they tend to fragment a bit in the mouth. The large tap root is the best part though - it can be made into a tisane or
    infusion.</p>`,
    image: 'images/dandelion.jpg',
    alt: 'dandelion',
    width: 800  
},
{
    title: 'Chicory',
    text: `<p>Chicory often grows on wasteland, and can grow very rapidly, to a great height. We had a patch in our wildflower garden which, in 
    mid-summer, was growing at a rate of over 5cm a day. It didn't stop until it was over 2m tall. The root of the plant is traditionally
    used for making a coffee substitute. The roots are roasted and ground. The result, is rather bitter and unpleasant. If you're interested
    in trying it, a product called <em>Camp Coffee</em> is still for sale in some UK supermarkets - it's a liquid mixture of chicory and coffee. 
    It is not very popular.</p>`,
    image: 'images/chicory.jpg',
    alt: 'chicory',
    width: 800   
}];

let currentPlantIndex = 0;

const template = Handlebars.compile(
    `
    <div class="content">
                <div class="buttons">
                    {{#if previousPlant}} <button id="previous">Previous: {{ previousPlant.title }}</button>{{/if}}
                    {{#unless previousPlant}} <button disabled>Previous: &mdash;</button>{{/unless}}
                    {{#if nextPlant}} <button id="next">Next: {{ nextPlant.title }}</button>{{/if}}
                    {{#unless nextPlant}} <button disabled>Next: &mdash;</button>{{/unless}}
                </div>
                <h2>{{ plant.title }}</h2>
                {{{ plant.text }}}
    </div>
    <img class="main-image" src="{{ plant.image }}" width="{{plant.width}}" alt="{{plant.alt}}" />
    `
);

loadPlant = (currentPlant, previousPlant, nextPlant) => {

    const container = document.querySelector(".container");
    container.innerHTML = template({ plant: currentPlant, previousPlant: previousPlant, nextPlant: nextPlant });

    const nextButton = document.querySelector("#next");

    if (nextButton) {
        nextButton.addEventListener("click", () => {

            currentPlantIndex++;
            currentPlant = plants[currentPlantIndex];
            previousPlant = plants[currentPlantIndex - 1]
            nextPlant = plants[currentPlantIndex + 1]
            loadPlant(currentPlant, previousPlant, nextPlant);

        });
    }

    const previousButton = document.querySelector("#previous");

    if (previousButton) {
        previousButton.addEventListener("click", () => {

            currentPlantIndex--;
            currentPlant = plants[currentPlantIndex];
            previousPlant = plants[currentPlantIndex - 1]
            nextPlant = plants[currentPlantIndex + 1]
            loadPlant(currentPlant, previousPlant, nextPlant);

        });
    }
}

window.addEventListener('load', () => {

    let currentPlant = plants[currentPlantIndex];
    let previousPlant = plants[currentPlantIndex - 1]
    let nextPlant = plants[currentPlantIndex + 1]

    loadPlant(currentPlant, previousPlant, nextPlant);

});