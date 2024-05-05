// 5. Write a JavaScript program to calculate the days left before 14 August.
 
var aug_14 = new Date("14 August, 2024")
let now = new Date()
let calc = Math.floor((aug_14 - now)/(1000*3600*24))
console.log(calc)
