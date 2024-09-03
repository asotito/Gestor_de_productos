let Quantity = 0;
const Products = ['Polo', 'Pantalon', 'Camisa', 'Zapatos', 'Corbata', 'Chaqueta', 'Gorra', 'Bufanda', 'Guantes', 'Calcetines'];
const Select = document.getElementById('product-select');
const reload = document.getElementById('reload');
let ProductList = [];
let ProductsByBuyer = [];
let firstSection = document.getElementById('first-section');
let secondSection = document.getElementById('second-section');
let thirdSection = document.getElementById('third-section');
let fourthSection = document.getElementById('fourth-section');
let fifthSection = document.getElementById('fifth-section');
let confirmSection = document.getElementById('confirm-section');
let Direccion = '';

document.getElementById("button-plus").addEventListener("click", function() {
    Quantity++;
    document.getElementById("quantity-display").textContent = Quantity;
    console.log(Quantity);
});

document.getElementById("button-minus").addEventListener("click", function() {
    if (Quantity > 0) {
        Quantity--;
        document.getElementById("quantity-display").textContent = Quantity;
        console.log(Quantity);
    } else if (Quantity <= 0) {
        let alertMessageM = document.getElementById('alert-message-minus');
        alertMessageM.classList.toggle('hidden')
    }
});

let buttonErase = document.getElementById('erase-all');
buttonErase.onclick = () => {
  firstSection.classList.toggle('hidden');
  confirmSection.classList.toggle('hidden');
}

let buttonStart = document.getElementById('start');
buttonStart.addEventListener("click", function(){
    firstSection.classList.toggle('hidden');
    secondSection.classList.toggle('hidden');
});

let buttonAdd = document.getElementById('add')
buttonAdd.onclick = () => {
    for (i = 0; i <= localStorage.length; i++) {
      const key = localStorage.key(i);
      const values = localStorage.getItem(key);
      console.log(i, key, values, Select.value);
      if (Direccion === key) {
        ProductsByBuyer.push( values );
        ProductsByBuyer.push(Quantity + 'x ' + Select.value); 
      }
    }
    let keys = Object.keys(localStorage)
    if(!keys.includes(Direccion)){
      localStorage.setItem(Direccion, Quantity + 'x ' + Select.value);
    }else{
      localStorage.setItem(Direccion, ProductsByBuyer)
    }
            
    window.location.reload();
}

let buttonEraseAll = document.getElementById('erase');
buttonEraseAll.addEventListener("click", function(){
  localStorage.clear();
  firstSection.classList.toggle('hidden');
  confirmSection.classList.toggle('hidden');
  window.reload();
})

let buttonCancel = document.getElementById('cancel');
buttonCancel.addEventListener("click", function(){
  firstSection.classList.toggle('hidden');
  confirmSection.classList.toggle('hidden');
})

let buttonNext = document.getElementById('next');
buttonNext.addEventListener("click", function(){
    Direccion = document.getElementById('direccion').value;
    if (Direccion === ""){
      let alertMessageI = document.getElementById('alert-message-input');
      alertMessageI.classList.toggle('hidden');
    } else {
      secondSection.classList.toggle('hidden');
      thirdSection.classList.toggle('hidden');
    }
});

let buttonSecondNext = document.getElementById('second-next');
buttonSecondNext.addEventListener("click", function(){
    thirdSection.classList.toggle('hidden');
    fourthSection.classList.toggle('hidden');
});

let buttonThirdNext = document.getElementById('third-next');
buttonThirdNext.addEventListener("click", function(){
    fourthSection.classList.toggle('hidden');
    fifthSection.classList.toggle('hidden');
});


Products.forEach(Product => {
    const option = document.createElement("option");
    option.value = Product;
    option.textContent = Product;
    Select.appendChild(option);
})

Select.addEventListener("change", function() {
    console.log(Select.value);
})

for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);
    console.log(`${key}: ${value}`);
    ProductList.push(`${key}: ${value};`);
    document.getElementById("total-routes").textContent = localStorage.length;
    document.getElementById("product-list").innerHTML = ProductList.join('<br>');
}

console.log("Total de rutas:", localStorage.length);