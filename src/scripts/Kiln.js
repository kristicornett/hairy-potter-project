import { makePottery } from "./PotteryWheel.js"

let pottery = makePottery()

export const firePottery = (potteryObject, temperature) => {
   
    
    if (temperature >= 2200){
        potteryObject.cracked = true
    } else {
        potteryObject.cracked = false
    }
    potteryObject.fired = true
    return potteryObject
  
}