// This sets the value of Kelvin to 293
const Kelvin = 0

// this caclulates the value of kelvin by subtracting 273 from it
const celsius = Kelvin - 273

// this assigns celcius to farenheit
let farenheit = celsius * (9/5) + 32

// this roudns the farenheit to a whole number
farenheit = Math.floor(farenheit)

console.log(`The temperature is ${farenheit} degrees Fahrenheit.`)

const Newton = Math.floor(celsius * (33/100))
console.log(Newton)
