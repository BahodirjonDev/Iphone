let card = document.querySelector('.card')
let green = {
    name: "iphone 13 pro max",
    rom: "1000 gb",
    ram: "16 gb",
    cpu: "Apple M1",
    color: "Green",
    price: "1,299"
}
let graphite = {
    name: "iphone 13 pro max",
    rom: "256 gb",
    ram: "6 gb",
    cpu: "Apple A14",
    color: "Graphite",
    price: "999"
}
let gold = {
    name: "iphone 13 pro max",
    rom: "1000 gb",
    ram: "12 gb",
    cpu: "Apple A15",
    color: "Gold",
    price: "1,199"
}
let blue = {
    name: "iphone 13 pro max",
    rom: "512 gb",
    ram: "8 gb",
    cpu: "Apple A14",
    color: "Blue",
    price: "1,100"
}
let silver = {
    name: "iphone 13 pro max",
    rom: "256 gb",
    ram: "8 gb",
    cpu: "Apple A15",
    color: "Silver",
    price: "1,099"
}
function Green() {
    card.innerHTML = `
        <img src="./images/alpine_green-removebg-preview.png" width="150px" alt="iphone green">
            <div class="text"><hr color="black">
                <h2 class="name"><i class="fa-brands fa-apple"></i>Iphone 13 pro max</h2><hr color="black">
                <h2 class="rom"><i class="bi bi-sd-card"></i>${green.rom}</h2><hr color="black">
                <h2 class="ram"><i class="bi bi-memory"></i>${green.ram}</h2><hr color="black">
                <h2 class="cpu"><i class="bi bi-cpu"></i>${green.cpu}</h2><hr color="black">
                <h2 class="color"><i class="bi bi-palette"></i>${green.color}</h2><hr color="black">
                <h2 class="price"><i class="bi bi-currency-dollar"></i>${green.price}</h2><hr color="black">
            </div> `
}
function Graphite() {
    card.innerHTML = `
        <img src="./images/garphite-removebg-preview.png" width="150px" alt="iphone graphite">
            <div class="text"><hr color="black">
                <h2 class="name"><i class="fa-brands fa-apple"></i>Iphone 13 pro max</h2><hr color="black">
                <h2 class="rom"><i class="bi bi-sd-card"></i>${graphite.rom}</h2><hr color="black">
                <h2 class="ram"><i class="bi bi-memory"></i>${graphite.ram}</h2><hr color="black">
                <h2 class="cpu"><i class="bi bi-cpu"></i>${graphite.cpu} </h2><hr color="black">
                <h2 class="color"><i class="bi bi-palette"></i>${graphite.color}</h2><hr color="black">
                <h2 class="price"><i class="bi bi-currency-dollar"></i>${graphite.price}</h2><hr color="black">
            </div> `
}
function Gold() {
    card.innerHTML = `
        <img src="./images/gold-removebg-preview.png" width="150px" alt="iphone gold">
            <div class="text"><hr color="black">
                <h2 class="name"><i class="fa-brands fa-apple"></i>Iphone 13 pro max</h2><hr color="black">
                <h2 class="rom"><i class="bi bi-sd-card"></i>${gold.rom}</h2><hr color="black">
                <h2 class="ram"><i class="bi bi-memory"></i>${gold.ram}</h2><hr color="black">
                <h2 class="cpu"><i class="bi bi-cpu"></i>${gold.cpu} </h2><hr color="black">
                <h2 class="color"><i class="bi bi-palette"></i>${gold.color}</h2><hr color="black">
                <h2 class="price"><i class="bi bi-currency-dollar"></i>${gold.price}</h2><hr color="black">
            </div> `
}
function Blue() {
    card.innerHTML = `
        <img src="./images/sierra_blue-removebg-preview.png" width="150px" alt="iphone gold">
            <div class="text"><hr color="black">
                <h2 class="name"><i class="fa-brands fa-apple"></i>Iphone 13 pro max</h2><hr color="black">
                <h2 class="rom"><i class="bi bi-sd-card"></i>${blue.rom}</h2><hr color="black">
                <h2 class="ram"><i class="bi bi-memory"></i>${blue.ram}</h2><hr color="black">
                <h2 class="cpu"><i class="bi bi-cpu"></i>${blue.cpu} </h2><hr color="black">
                <h2 class="color"><i class="bi bi-palette"></i>${blue.color}</h2><hr color="black">
                <h2 class="price"><i class="bi bi-currency-dollar"></i>${blue.price}</h2><hr color="black">
            </div> `
}
function Silver() {
    card.innerHTML = `
        <img src="./images/silver-removebg-preview.png" width="150px" alt="iphone gold">
            <div class="text"><hr color="black">
                <h2 class="name"><i class="fa-brands fa-apple"></i>Iphone 13 pro max</h2><hr color="black">
                <h2 class="rom"><i class="bi bi-sd-card"></i>${silver.rom}</h2><hr color="black">
                <h2 class="ram"><i class="bi bi-memory"></i>${silver.ram}</h2><hr color="black">
                <h2 class="cpu"><i class="bi bi-cpu"></i>${silver.cpu} </h2><hr color="black">
                <h2 class="color"><i class="bi bi-palette"></i>${silver.color}</h2><hr color="black">
                <h2 class="price"><i class="bi bi-currency-dollar"></i>${silver.price}</h2><hr color="black">
            </div> `
}