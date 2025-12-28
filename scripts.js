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
        price : 10,
        mult : 1
    } ,
    "img/duck2.png":{ 
        preview: "img/.duck3.png",
        next: "img/duck3.png",
        price : 100
        ,mult : 2
    },
    "img/duck3.png":{ 
        preview: "img/.duck4.png",
        next: "img/duck4.png",
        price : 500
        ,mult : 5
    },
    "img/duck4.png":{ 
        preview: "img/.duck5.png",
        next: "img/duck5.png",
        price : 1000
        ,mult : 10
    },
    "img/duck5.png":{ 
        preview: "img/.duck6.png",
        next: "img/duck6.png",
        price : 2500
        ,mult : 15
    },
    "img/duck6.png":{ 
        preview: "img/.duck7.png",
        next: "img/duck7.png",
        price : 5000
        ,mult : 30
    },
    "img/duck7.png":{ 
        preview: "img/.duck8.png",
        next: "img/duck8.png",
        price : 7500
        ,mult : 50
    },
    "img/duck8.png":{ 
        preview: "img/.duck9.png",
        next: "img/duck9.png",
        price : 10000
        ,mult : 100
    },
    "img/duck9.png":{ 
        preview: "img/.duck10.png",
        next: "img/duck10.png",
        price : 50000
        ,mult : 150
    },"img/duck310.png":{ 
        preview: "img/the_end.png",
        next: "img/duck4.png",
        price : 100000
        ,mult : 300
    }
    

};

clicks.addEventListener('click', () => {
const currentDuck = clicks.getAttribute("src");
const data = shopMap[currentDuck]

    duckies+=data.mult;
    amount_points.textContent = duckies;

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