import { makePottery } from "./PotteryWheel.js"
import { firePottery } from "./Kiln.js"
import { toSellOrNotToSell, usePottery } from "./PotteryCatalog.js"
import { PotteryList } from "./PotteryList.js"

// Imports go first
const mainContainer = document.querySelector(".PotteryList")






// Make 5 pieces of pottery at the wheel
let mug = makePottery("Mug", 3, "24 inches")
//console.log(mug)
let plate = makePottery("Plate", 8, "30cm")
//console.log(plate)
let bowl = makePottery("Bowl", 5, "36cm")
//console.log(bowl)
let cup = makePottery("Cup", 2, "36 inches")
//console.log(cup)
let container = makePottery("Container", 4, "55cm")
//console.log(container)
// Fire each piece of pottery in the kiln
mug = firePottery(mug, 2300)
//console.log(mug)
plate = firePottery(plate, 1200)
//console.log(plate)
bowl = firePottery(bowl, 2700)
//console.log(bowl)
cup = firePottery(cup, 2000)
//console.log(cup)
container = firePottery(container, 3500)
//console.log(container)
mug = toSellOrNotToSell(mug)
plate = toSellOrNotToSell(plate)
bowl = toSellOrNotToSell(bowl)
cup = toSellOrNotToSell(cup)
container = toSellOrNotToSell(container)
console.log(mug)
console.log(plate)
console.log(bowl)
console.log(cup)
console.log(container)

// Determine which ones should be sold, and their price

usePottery()
console.log(usePottery())

// Invoke the component function that renders the HTML list

mainContainer.innerHTML = PotteryList()

