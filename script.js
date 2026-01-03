let item =document.getElementById("item");
let price =document.getElementById("price");
let cati =document.getElementById("category");
let h1 =document.getElementById("td1");
let h2 =document.getElementById("td2");
let cat =document.getElementById("td3");

function addme(){
    localStorage.setItem("item",item.value);
    localStorage.setItem("price",price.value);
    localStorage.setItem("category",cati.value);
    abcd();
}
function abcd(){
    h1.innerHTML =localStorage.getItem("item");
    h2.innerHTML =localStorage.getItem("price");
    cat.innerHTML =localStorage.getItem("category");
}

