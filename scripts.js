let duckies = 0;
const amount_points = document.getElementById("duckies");
const clicks = document.getElementById("click");
const shop = document.getElementById("shop")
const price = document.getElementById("shop_price")
const shopDuck = document.getElementById("shop_duck");

const shopMap = {
    "img/duck1.png":{
        preview :"img/.duck2.png",
        next: "img/duck2.png",
        price : 10
    } ,
    "img/duck2.png":{ 
        preview: "img/.duck3.png",
        next: "img/duck3.png",
        price : 100
    }
};

clicks.addEventListener('click', () => {
    duckies++;
    amount_points.textContent = duckies;

const currentDuck = clicks.getAttribute("src");
const data = shopMap[currentDuck]

if (!data)return;

shopDuck.src = data.preview
price.textContent = data.price
});
shop.addEventListener('click', () => {

    const currentDuck = clicks.getAttribute("src");
    const data = shopMap[currentDuck]

    if (!data) {
        console.log("all ducks used")
        return
    }

    if(duckies >= data.price){
        duckies -= data.price;
        amount_points.textContent = duckies;

        clicks.src = data.next;
        console.log("bought")
    }else{
        console.log("not enought duckies")
    }
});