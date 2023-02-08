import { usePottery } from "./PotteryCatalog.js"


export const PotteryList = () => {
let pottery = usePottery()
 let html = ''
 
    for (let pot of pottery)
   html += `<section class="pottery" id="pottery--${pot.id}">
  <h2 class="pottery__shape">${pot.shape}</h2>
  <div class="pottery__properties">
    ${pot.shape} weighs ${pot.weight} grams and is ${pot.height} in height
  </div>
  <div class="pottery__price">Price is $${pot.price}</div>
</section>`

return html
}