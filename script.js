let item = document.getElementById("item");
let price = document.getElementById("price");
let cati = document.getElementById("category");
let tbody = document.getElementById("tbody");


function addme() {
    localStorage.setItem("item", item.value);
    localStorage.setItem("price", price.value);
    localStorage.setItem("category", cati.value);
    abcd();
    document.getElementById("item").value = "";
    document.getElementById("price").value = "";
}
function abcd() {
    let item1 = localStorage.getItem("item");
    let price1 = localStorage.getItem("price");
    let category1 = localStorage.getItem("category");
    tbody.innerHTML += ` <tr>
                <td>${item1}</td>
                <td>${price1}</td>
                <td>${category1}</td>
            </tr>`
}

