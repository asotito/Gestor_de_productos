let Quantity = 0;
let Name = '';
const Products = ['Polo', 'Pantalon', 'Camisa', 'Zapatos', 'Corbata', 'Chaqueta', 'Gorra', 'Bufanda', 'Guantes', 'Calcetines'];
const Select = document.getElementById('product-select');
const reload = document.getElementById('reload');
let totalItems = 0;

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
    Name = prompt("Introduzca su nombre:", "Andres Soto");
    document.getElementById("name").textContent = Name;
    console.log(Name);
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
    if (confirm("Seguro que quiere continuar?")) {
        localStorage.clear();
        window.location.reload();
    }
}

function addNewProduct() {
    if (Quantity > 0 && Name != '' && Select.value != '') {
        if (confirm("Seguro que quiere continuar?")) {
            localStorage.setItem(Select.value, Quantity)
            window.location.reload();
        }
    }  else {
        alert("Por favor, complete todos los campos");
    }
}

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
    for (let j  = 0; j < value; j++) {
        totalItems++;
    }
    document.getElementById("total-quantity").textContent = totalItems;
}

console.log("Total de productos:", totalItems);