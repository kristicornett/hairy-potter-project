let soldPottery = []
let doNotSellPottery =[]

export const toSellOrNotToSell = (potteryObject) => {
    if (potteryObject.cracked === true){
        doNotSellPottery.push(potteryObject)
    }
    if (potteryObject.cracked === false){
        if(potteryObject.weight >= 6){
            potteryObject.price = 40
        }
        if (potteryObject.weight < 6){
            potteryObject.price = 20
        }
        soldPottery.push(potteryObject)
    }
   
   return potteryObject
   
}

export const usePottery = () => {
    soldPottery.map(pottery => ({...pottery}))
    
    return soldPottery
}