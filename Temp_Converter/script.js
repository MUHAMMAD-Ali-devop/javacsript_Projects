//                         //  FUNCTIONALITY
//            // CELSIUS TO FAHRENHITE
// function C_TO_F(C) {
//   console.log((C * 9 / 5) + 32 + " [°F]");
// };
//            // FAHRENHITE TO CELSIUS
// function F_TO_C(F) {
//   console.log(5 / 9 * (F - 32) + " [°C]");
// };
//            // CELSIUS TO KELVIN
// function C_TO_K(C) {
//   console.log(C + 273.15 +" [°K]");
// };
//            // KELVIN TO CELSIUS
// function K_TO_C(K) {
//   console.log(K - 273.15 + " [°C]");
// };
//            // FAHRENHITE TO KELVIN
// function F_TO_K(F) {
//   console.log((F - 32) * 5 / 9 + 273.15 + " [°K]");
// };
//            // KELVIN TO FAHRENHITE
// function K_TO_F(K) {
//   console.log((K - 273.15) * 9/5 + 32 + " [°F]");
// };
// let a = 10;
            // DOM
let opt1 = document.getElementById("opt1");
// let opt2 = document.getElementById("opt2");
// let opt3 = document.getElementById("opt3");
let opt4 = document.getElementById("opt4");
// let opt5 = document.getElementById("opt5");
// let opt6 = document.getElementById("btn6");
let input = document.getElementById("input");
let output = document.getElementById("output");
input.addEventListener('input',function() {
  let c = this.value;
  let f = (c * 9/5) + 32;
  if(!Number.isInteger(f)){
    f = f.toFixed(4);
  };
  output.value = f;
});
output.addEventListener('input',function() {
 let f = this.value;
 let c = 5 / 9 * (f - 32);
 if(!Number.isInteger(c)){
  c = c.toFixed(4);
};
 input.value = c;
});



