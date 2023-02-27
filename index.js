const valueBtn = document.getElementById("num")
const convBtn = document.getElementById("btn");
const lengthCalc= document.getElementById("length")
const volumeCalc= document.getElementById("volume")
const massCalc= document.getElementById("mass")
 


convBtn.addEventListener("click", function() {

   let x = valueBtn.value;
lengthCalc.textContent = `${x} meters = ${(x*3.28).toFixed(3)} feet | ${x} feet = ${(x/3.28).toFixed(3)} meters`;
volumeCalc.textContent = `${x} liters = ${(x/3.785).toFixed(3)} gallons | ${x} gallons = ${(x*3.785).toFixed(3)} liters`;
massCalc.textContent = `${x} kilograms = ${(x*2.2046).toFixed(3)} pounds | ${x} pounds = ${(x/2.2046).toFixed(3)} kilograms`;
})