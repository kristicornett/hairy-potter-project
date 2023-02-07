let key = 1

export const makePottery = (shape, weight, height) => {
    let pottery = {
            shape: shape,
            weight: weight,
            height: height,
            id: key
        }
    key ++   
    return pottery
    }
    


