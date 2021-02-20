
const title = "Recipes";

const recipes = [{
    title: 'Chestnut Stuffing',
    text: `Chestnut is a traditional accompaniment to roast meat, especially as part of a Christmas meal in the UK.
    If you harvest Chestnuts earlier in the year, you can either roast or boil them, then peel and freeze the contents
    ready for preparing the stuffing in December.
    To make the stuffing you'll need:
    <ul>
    <li>a chopped onion</li>
    <li>250g of your prepared chestnuts, broken up, but not too finely</li>
    <li>an equal quantity of sausage meat (or just pork mince seasoned with mace)</li>
    <li>75g of butter</li>
    <li>breadcrumbs from 2 slices of bread</li>
    <li>a choice of herbs - parsley, sage and thyme are all suitable</li>
    <li>a large fresh egg</li>
    </ul>

    <p>Fry the onion gently in the butter, and combine all of the other ingredients in a bowl. When the onion is
    translucent, add to the bowl, and combine thoroughly. Fry a small amount of the mixture and taste, and if
    necessary season the mixture with salt and pepper. Repeat until it tastes good. </p>
    <p>Form the mixture into balls and place in a greased loaf tin. It should be baked alongside the Christmas roast for about 30 mins</p>`,
    
    image: 'images/chestnuts.jpg',
    alt: 'chestnuts',
    width: 800
},
{
    title: 'Walnut Ink',
    text: `This isn't a recipe for eating! In ancient times inks were made from plants, and a good one can be made
    from the outer husk of the walnut (this is the smooth, green case which contains the nut). You can use the common walnut,
    or for a better result, the black walnut. Wear gloves during the process, and do it outside. The smell and stains can
    be overpowering. 
    <ul>
        <li>a gallon container of walnut husks</li>
        <li>a few rusty iron nails</li>
        <li>water</li>
    </ul>
    <p>It's best to leave the walnut husks alone until they have started to blacken. This can take a few weeks. 
    Then, put them and the nails into a pot, which you won't need for a while (we use an old stainless steel pan). Top up with 
    water until the top husks are covered. Put a lid on the pot, and weigh it down, and leave it outside over winter, 
    coming back to it in spring. </p>
    <p>You should find that the husks have decayed. The smell can be appalling. Simmer the mixture for an hour, and then strain through a 
    cheesecloth, and then boil the liquid to reduce it by 2/3. We used a camping stove in an outhouse. If you do it on a 
    kitchen stove, the other occupants of the house won't be happy. 
    </p>
    <p>
        The result is a dense brown / black ink that can be used for writing and drawing. Some people add a little gum
        arabic to make it flow into the paper better. 
    </p>`,
    image: 'images/walnut-husks-simmering.jpg',
    alt: 'walnut',
    width: 800,
},
{
    title: 'Elderflower Cordial',
    text: `Making elderflower cordial is a bit like bottling the smell of summer. It's very easy to do. 
    <ul>
      <li>Elderflower flower heads - perhaps 4 litres</li>
      <li>1 lemon</li>
      <li>1kg sugar</li>
    </ul>
    <p>
    Try to remove as much stauk as possible from the flowers - it's really the tiny flowers you need. This can be time consuming,
    so just remove as much as possible.
    </p>
    <p>
        In the meantime, add 2 litres of water to a pan, and add the sugar and lemon juice. Heat until the sugar is
        disolved. Then, turn off the heat, and add the elderflowers. Stir in, and cover. Leave the mixture to sit overnight.
     </p>
     <p>
        Strain the mixture through a cheese cloth and bottle. The cordial can be diluted with water to drink, or used as a mixter
        in various concoctions. If it's too sweet, it might be necessary to add a bit more lemon juice to balance the sugar. 
        If it's not sweet enough, more can be added and the receipe adjusted for next time. 
    </p>`,
    image: 'images/elderflower-cordial.jpg',
    alt: 'elderflower',
    width: 800
},
{
    title: 'Hawthorn Jelly',
    text: `
    <p>A jelly, in the UK, is like a jam, but it's strained befoe setting, so it is clear and contains no solid fruit.
    Hawthorn jelly has a very surprising taste - it's much nicer than the taste of the raw berry. It is a bit reminiscent of 
    Red Current jelly, and can be used in the same ways.
    </p>
    <ul>
        <li>2kg of haws (hawthorn berries)</li>
        <li>Sugar (quantities below)</li>
        <li>2 lemons</li>        
    </ul>
    <p>
        The haws need to be cleaned - first remove the stems, and then wash the berries multiple times. I find it best to 
        rinse in a large cooking pot with lots of water. The dirt floats to the surface and can be poured away. The haws are 
        quite robust so can be rubbed by hand to remove debris.
    </p>
    <p>Put the cleaned haws in a cooking pot and cover with water. Then simmer for an hour. It can help to mash the 
    haws with the back of a spoon as they soften. At this point, the mixture does not smell very nice - but don't worry,
    that's normal.</p>
    <p>After an hour the pulp can be strained. I do this by putting a cheese cloth over a large sieve, sitting on a pan
    and then pour in the mixture. Some liquid runs straight through, but as the flow diminishes, the cheesecloth can be lifted,
    and held suspended by a strong cord. It can be left for an hour or so for the remaining liquid to drip out. Don't squeese the cloth
    or small solids will pass through.</p>
    <p>For each litre of liquid, add 1kg of sugar. Also the juice of 1 lemon.</p>
    <p>From this point, it is regular jam making - boil the liquid until your jam thermometer indicated the right
    temperature has been met, and then pour into sterilized jars. </p>
    <p>
        The resulting jelly is a rich red / orange colour - with a taste that's hard to describe, but which is unmistakable once
        you've tasted it. 
    </p>`,
    
    
    image: 'images/hawthorn-jelly.jpg',
    alt: 'hawthorn jelly',
    width: 800
}
];

let currentRecipeIndex = 0;

const template = Handlebars.compile(
    `
    <div class="content">
                <div class="buttons">
                    {{#if previousRecipe}} <button id="previous">Previous: {{ previousRecipe.title }}</button>{{/if}}
                    {{#unless previousRecipe}} <button disabled>Previous: &mdash;</button>{{/unless}}
                    {{#if nextRecipe}} <button id="next">Next: {{ nextRecipe.title }}</button>{{/if}}
                    {{#unless nextRecipe}} <button disabled>Next: &mdash;</button>{{/unless}}
                </div>
                <h2>{{ recipe.title }}</h2>
                {{{ recipe.text }}}
    </div>
    <img class="main-image" src="{{ recipe.image }}" width="{{ recipe.width}}" alt="{{recipe.alt}}" />
    `
);

loadRecipe = (currentRecipe, previousRecipe, nextRecipe) => {

    const container = document.querySelector(".container");
    container.innerHTML = template({ recipe: currentRecipe, previousRecipe: previousRecipe, nextRecipe: nextRecipe });

    const nextButton = document.querySelector("#next");

    if (nextButton) {
        nextButton.addEventListener("click", () => {

            currentRecipeIndex++;
            currentRecipe = recipes[currentRecipeIndex];
            previousRecipe = recipes[currentRecipeIndex - 1]
            nextRecipe = recipes[currentRecipeIndex + 1]
            loadRecipe(currentRecipe, previousRecipe, nextRecipe);

        });
    }

    const previousButton = document.querySelector("#previous");

    if (previousButton) {
        previousButton.addEventListener("click", () => {

            currentRecipeIndex--;
            currentRecipe = recipes[currentRecipeIndex];
            previousRecipe = recipes[currentRecipeIndex - 1]
            nextRecipe = recipes[currentRecipeIndex + 1]
            loadRecipe(currentRecipe, previousRecipe, nextRecipe);

        });
    }
}

window.addEventListener('load', () => {

    // if the query string contains a recipe, then try to find that one.....
    const result = window.location.href.match(/\?recipe=(.*)/);

    if (result) {

        let recipeName = decodeURI(result[1]);

        // get index of recipe
        currentRecipeIndex = recipes.findIndex(r => r.title === recipeName);

        if (currentRecipeIndex === -1) {
            currentRecipeIndex = 0;
        }
    }


    let currentRecipe = recipes[currentRecipeIndex];
    let previousRecipe = recipes[currentRecipeIndex - 1]
    let nextRecipe = recipes[currentRecipeIndex + 1]

    loadRecipe(currentRecipe, previousRecipe, nextRecipe);

});