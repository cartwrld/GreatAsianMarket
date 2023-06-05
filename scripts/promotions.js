'use strict';

function Promo(image, title, description, startDate, endDate) {
    this.image = image;
    this.title = title;
    this.description = description;
    this.startDate = startDate;
    this.endDate = endDate;
}
let promoArray = new Array();

let promoCounter = 0;

promoArray.push(new Promo(
    "promotionslides/moguMoguLockBox.png",
    "Mogu Mogu Lock Box Exclusive",
    "<em>An irresistible deal awaits you!</em><br/><br/>Purchase two 6-pack cases of Mogu Mogu drinks and secure a free lock box. Opt for our 1-liter bottles instead? Buy four and the lock box is all yours. <br/><br/>Experience the delightful burst of fruitiness that Mogu Mogu delivers in each drink, now in a variety of flavors like strawberry, mango, grape, and more! <br/><br/>This exclusive offer is available for a limited time, so stock up your pantry with Mogu Mogu and take home a handy lock box for your convenience.",
    "01-Jun",
    "30-Jun"
));

promoArray.push(new Promo(
    "promotionslides/prawn.png",
    "Spot Prawn Special",
    "<em>Dive into the freshness of the sea with our Spot Prawn special!</em><br/><br/>Purchase our select packages and experience the unparalleled taste of these juicy, succulent prawns. Freshly caught and perfectly seasoned, these prawns are the epitome of oceanic delight. <br/><br/>But that's not all! With every package, you get a special spot prawn recipe booklet, filled with innovative and mouth-watering dishes you can whip up in your kitchen. <br/><br/>This special promo is available for a limited time. Visit us today and take home the fresh, delicious goodness of Spot Prawns.",
    "04-Jun",
    "30-Jun"
));

promoArray.push(new Promo(
    "promotionslides/instantNoodles.png",
    "LM Noodles Sale",
    "<em>Don't miss our amazing deal on instant noodles!</em><br/><br/>For a limited time only, you can get 3 packs of instant noodles for just $0.99. <br/><br/>Perfect for a quick meal or a midnight snack, our instant noodles are simple to prepare and delicious to eat. <br/><br/>Take advantage of this offer and stock up on your favorite flavors today.",
    "10-May",
    "10-Jun"
));
function setPromo(i) {
    $("#promo-img").attr("src", promoArray[i].image);
    $("#promo-title").text(promoArray[i].title);
    $("#promo-description").html(promoArray[i].description.split('\n\n').join('<br/><br/>'));
    $("#promo-start").html(""+promoArray[i].startDate);
    $("#promo-end").text(""+promoArray[i].endDate)
}

window.onload = function() {
    setPromo(promoCounter);
    document.getElementById("print").addEventListener("click", function() {
        window.print();
    });

    document.getElementById("next-button").addEventListener("click", function() {
        promoCounter++;
        if (promoCounter >= promoArray.length) {
            promoCounter = 0;
        }
        setPromo(promoCounter);
    });

    document.getElementById("previous-button").addEventListener("click", function() {
        promoCounter--;
        if (promoCounter <= -1) {
            promoCounter = promoArray.length - 1;
        }
        setPromo(promoCounter);
    });
};