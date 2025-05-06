const inputEl = document.getElementById("input-el")
const convertBtn = document.getElementById("convert-btn")
const length = document.getElementById("length")
const volume = document.getElementById("volume")
const mass = document.getElementById("mass")

/*pre-provided values*/
const meter_to_feet = 3.281 
const liter_to_gallon = 0.264
const kilo_to_pound = 2.204

convertBtn.addEventListener("click",function() {
    const input = Number(inputEl.value);
    if (input <= 0 || input > 100) {
        alert("Please enter a number greater than 0 and up to 100.");
        inputEl.value = "" //clear input insert
        return;
    }
    convertLength(input)
    convertVolume(input)
    convertMass(input)
    inputEl.value = "";
})

function convertLength(value) {
    let feet = (value * meter_to_feet).toFixed(3)
    let meters = (value / meter_to_feet).toFixed(3)

    length.innerHTML = `<p> ${value} meters = ${feet} feet | ${value} feet =  ${meters} meters </p>`
}

function convertVolume(value) {
    let gallons = (value * liter_to_gallon).toFixed(3)
    let liters = (value / liter_to_gallon).toFixed(3)

    volume.innerHTML = `<p> ${value} liters = ${gallons} gallons | ${value} gallons =  ${liters} liters </p>`
}

function convertMass(value) {
    let pounds = (value * kilo_to_pound).toFixed(3)
    let kilos = (value / kilo_to_pound).toFixed(3)

    mass.innerHTML = `<p> ${value} kilos = ${pounds} pounds | ${value} pounds =  ${kilos} kilos </p>`
}