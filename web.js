console.log('Welcome to our mart');
let product = document.getElementById("product");
let xhr = new XMLHttpRequest;
xhr.open('get', 'https://fakestoreapi.com/products', true)

xhr.onload = function () {
    if (this.status === 200)
        json = JSON.parse(this.responseText)
    console.log(json);
    let dynPro = '';
    json.forEach((element, index) => {

        let dPro = `<div class="colu">
        <div class="card" style="width: 18rem;">
            <img src="${element['image']}" class="card-img-top " alt="...">
            <div class="card-body">
                <h5 class="card-title">${element['title']}</h5>
                <p class="card-text">price : ${element['price']}</p>
                <p class="card-text">Rating :  ${element.rating['rate']}</p>
                <div id='cardtxt' class="d-grid gap-2 col-6 mx-auto">
                 <button  id="${index}"onclick="addToCart(this.id)"class="btn btn-primary btn btn-primari" type='button'>Add To Cart</button>
                </div>
            </div>
        </div>
    </div>
    `

        dynPro += dPro
    });
    product.innerHTML = dynPro;
}
xhr.send();

let list = localStorage.getItem('list')
let myObj;
if (list == null) {
    myObj = [];
}
else {
    myObj = JSON.parse(list)
}
shownnotes(myObj)


function addToCart(index) {
    console.log('adding to cart', json[index])
    let list = localStorage.getItem('list')
    let myObj;
    if (list == null) {
        myObj = [];
    }
    else {
        myObj = JSON.parse(list)
    }
    console.log(myObj)
    myObj.push(json[index])
    localStorage.setItem('list', JSON.stringify(myObj))
    shownnotes(myObj)
}

function shownnotes(myObj,data) {
    console.log(data)
    myObj.forEach((element) => console.log(element['image']))
    localStorage.getItem('list')
    let listObj = " ";
    myObj.forEach(function (element, index) {
        listObj += `<div class="card cardr " style="width: 18rem;">
            <img src="${element['image']}" class="card-img-top d-inline " alt="...">
            <div class="card-body">
                <h5 class="card-title">${element['title']} </h5>
                <p class="card-text">price : ${element['price']}  
                <a href="#" id=${index} class="btn btn-primary button" onclick = 'deleteBtn(this.id)'>-</a></p>
                
            </div>
            </div>`
    })

    let cartDiv = document.getElementById('cartDiv')
    cartDiv.innerHTML = listObj

}

function deleteBtn(index) {

    
    // myObj.splice(index)
    // localStorage.setItem('list', JSON.stringify(myObj))
    // shownnotes(myObj)

}





