let Quantity = 0;
let Name = '';
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

document.getElementById("button-plus").addEventListener("click", function() {
    addQuantity();
});

document.getElementById("button-minus").addEventListener("click", function() {
    subtractQuantity();
});

function addQuantity() {
    Quantity++;
    document.getElementById("quantity-display").textContent = Quantity;
    console.log(Quantity);
}
function nameF() {
    Name = prompt("Introduzca su nombre:", '');
    if (Name != ''){
        document.getElementById("name").textContent = Name;
        console.log(Name);
        secondSection.classList.toggle('hidden');
        thirdSection.classList.toggle('hidden');
    }
}

function subtractQuantity() {
    if (Quantity > 0) {
        Quantity--;
        document.getElementById("quantity-display").textContent = Quantity;
        console.log(Quantity);
    } else if (Quantity <= 0) {
        alert("Cantidad no puede ser menor a 0");
    }
}

function cleanWindow(){
    if (confirm("Esta accion eliminara todas sus rutas, seguro que desea continuar?")) {
        localStorage.clear();
        window.location.reload();
    }
}

let buttonAdd = document.getElementById('add')
buttonAdd.onclick = () => {
    if (Quantity > 0 && Name != '' && Select.value != '') {
        if (confirm("Seguro que quiere continuar?")) {
            for (i = 0; i <= localStorage.length; i++) {
                const key = localStorage.key(i);
                const values = localStorage.getItem(key);
                console.log(i, key, values, Select.value);
                if (Name === key) {
                    ProductsByBuyer.push( values );
                    ProductsByBuyer.push(Quantity + 'x ' + Select.value); 
                }
            }
            let keys = Object.keys(localStorage)
            if(!keys.includes(Name)){
                localStorage.setItem(Name, Quantity + 'x ' + Select.value);
            }else{
                localStorage.setItem(Name, ProductsByBuyer)
            }
            
            window.location.reload();
        }
    }  else {
        alert("Por favor, complete todos los campos");
    }
}

let buttonStart = document.getElementById('start');


buttonStart.addEventListener("click", function(){
    firstSection.classList.toggle('hidden');
    secondSection.classList.toggle('hidden');
});

let buttonNext = document.getElementById('next');

buttonNext.addEventListener("click", function(){
    thirdSection.classList.toggle('hidden');
    fourthSection.classList.toggle('hidden');
});

let buttonSecondNext = document.getElementById('second-next');

buttonSecondNext.addEventListener("click", function(){
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