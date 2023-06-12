var i = 0;
var itemsList = [];
var filteredList = [];
var priceList = [];
var feedbackList = [];
var salesList = [];
function init() {

    fetch("https://fakestoreapi.com/products/")
        .then(data => data.json())
        //.then(x => console.log(x))
        .then(adat => {
            adat.forEach(element => {
                itemsList.push(element);
            });
        })
        //.then(() => console.log(itemsList))
        .then(() => chooseCategory());
}
/*itemsList.forEach(element => {
        console.log(element.rating.rate, element.rating.count);
    }); */
function kiir() {
    document.getElementById("items").innerHTML = "<h2 style='color: blue;'>Number of items : " + itemsList.length;

    if (salesList.length == 0) {
        document.getElementById("items").innerHTML += "<h2 style='color: blue;'>Number of search results : " + salesList.length;
    }
    else if (salesList.length != 0) {
        document.getElementById("items").innerHTML += "<h2 style='color: blue;'>Number of search results : " + salesList.length;

        document.getElementById("items").innerHTML += "<div class='card' style='width: 25rem;'><img src='" + salesList[i].image + "' class='card-img-top' alt='...' style='height:300px;'><div class='card-body'><h5 class='card-title'>" + salesList[i].title + "</h5><h4 class='card-text'>" + salesList[i].price + "€</h4><p class='card-text'><b>Category: </b>" + salesList[i].category + "</p><p class='card-text'><b>Customer's feedback: </b>" + salesList[i].rating.rate + "</p><b>Number of sales: </b>" + salesList[i].rating.count + "</p><a href='#'' class='btn btn-primary'>Add to cart</a></div></div>";

    }
}
function Elore() {
    //document.getElementById("items").innerHTML = "";
    if (i >= salesList.length - 1) i = 0;
    else if (i < salesList.length) i++;
    kiir();
}

function Hatra() {
    if (i > 0) i--;
    else i = salesList.length - 1;
    console.log(i);
    kiir();
}
function chooseCategory() {
    i = 0;
    filteredList = [];
    if (document.getElementById("men-clothing").checked == false &&
        document.getElementById("jewelery").checked == false &&
        document.getElementById("electronics").checked == false &&
        document.getElementById("women-clothing").checked == false) {
        salesList = [];
        kiir();
    }
    else 
    {
        itemsList.forEach(item => {
            if (document.getElementById("men-clothing").checked && item.category == "men's clothing") {
                filteredList.push(item);
            }
            if (document.getElementById("jewelery").checked && item.category == "jewelery") {
                filteredList.push(item);
            }
            if (document.getElementById("electronics").checked && item.category == "electronics") {
                filteredList.push(item);
            }
            if (document.getElementById("women-clothing").checked && item.category == "women's clothing") {
                filteredList.push(item);
            }
            //console.log(filteredList.length, itemsList.length);
            filterByPrice();
        })

    }
}

function mindenKategoria() {
    document.getElementById("men-clothing").checked = true;
    document.getElementById("jewelery").checked = true;
    document.getElementById("electronics").checked = true;
    document.getElementById("women-clothing").checked = true;
    //i=0;
    //filteredList = itemsList;
    chooseCategory();
}
function egyikKategoriaSem() {
    document.getElementById("men-clothing").checked = false;
    document.getElementById("jewelery").checked = false;
    document.getElementById("electronics").checked = false;
    document.getElementById("women-clothing").checked = false;
    salesList = [];
    kiir();
}
function mindenAr() {
    document.getElementById("price-10").checked = true;
    document.getElementById("price-100").checked = true;
    document.getElementById("price-50").checked = true;
    document.getElementById("price-from-100").checked = true;
    //filteredList = itemsList;
    chooseCategory();
}
function egyikArSem() {
    document.getElementById("price-10").checked = false;
    document.getElementById("price-100").checked = false;
    document.getElementById("price-50").checked = false;
    document.getElementById("price-from-100").checked = false;
    salesList = [];
    kiir();
}
function allFeedback() {
    document.getElementById("feedback1").checked = true;
    document.getElementById("feedback2").checked = true;
    document.getElementById("feedback3").checked = true;
    document.getElementById("feedback4").checked = true;
    //filteredList = itemsList;
    chooseCategory();
}
function noneFeedback() {
    document.getElementById("feedback1").checked = false;
    document.getElementById("feedback2").checked = false;
    document.getElementById("feedback3").checked = false;
    document.getElementById("feedback4").checked = false;
    //filteredList = [];
    salesList = [];
    kiir();
}

function allSales() {
    document.getElementById("sales1").checked = true;
    document.getElementById("sales2").checked = true;
    document.getElementById("sales3").checked = true;
    document.getElementById("sales4").checked = true;
    //filteredList = itemsList;
    chooseCategory();
}
function noneSales() {
    document.getElementById("sales1").checked = false;
    document.getElementById("sales2").checked = false;
    document.getElementById("sales3").checked = false;
    document.getElementById("sales4").checked = false;
    //filteredList = [];
    salesList = [];
    kiir();
}

function filterByPrice() {
    priceList = [];
    filteredList.forEach(element => {
        if (document.getElementById("price-10").checked && element.price < 10) {
            priceList.push(element);
        }
        if (document.getElementById("price-100").checked && element.price >= 10 && element.price < 50) {
            priceList.push(element);
        }
        if (document.getElementById("price-50").checked && element.price >= 50 && element.price < 100) {
            priceList.push(element);
        }
        if (document.getElementById("price-from-100").checked && element.price >= 100) {
            priceList.push(element);
        }
        filterByFeedback();
    });
    //console.log(priceList.length);



    //kiir();
}

function filterByFeedback() {
    feedbackList = [];
    priceList.forEach(element => {
        if (document.getElementById("feedback1").checked && element.rating.rate < 2) {
            feedbackList.push(element);
        }
        if (document.getElementById("feedback2").checked && element.rating.rate >= 2 && element.rating.rate < 3) {
            feedbackList.push(element);
        }
        if (document.getElementById("feedback3").checked && element.rating.rate >= 3 && element.rating.rate < 4) {
            feedbackList.push(element);
        }
        if (document.getElementById("feedback4").checked && element.rating.rate >= 4) {
            feedbackList.push(element);
        }

    });
    //console.log(feedbackList.length);
    filterBySales();
}

function filterBySales() {
    salesList = [];
    feedbackList.forEach(element => {
        if (document.getElementById("sales1").checked && element.rating.count < 100) {
            salesList.push(element);
        }
        if (document.getElementById("sales2").checked && element.rating.count >= 100 && element.rating.count < 250) {
            salesList.push(element);
        }
        if (document.getElementById("sales3").checked && element.rating.count >= 250 && element.rating.count < 400) {
            salesList.push(element);
        }
        if (document.getElementById("sales4").checked && element.rating.count >= 400) {
            salesList.push(element);
        }

    });
    //console.log(salesList.length);

    kiir();
}