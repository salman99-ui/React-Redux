const initialState = {
    numOfCake : 10
}

const reducerCake = (state = initialState , action ) => {
    switch(action.type){
        case "BUY_CAKE" :
            return {
                ...state ,
                numOfCake : state.numOfCake - 1 
            }
        case "STORE_CAKE" : 
        return {
            ...state ,
            numOfCake : state.numOfCake + 1 
        } 

        default :
        return state 
        
    }
}

describe("Test Reducer" , () => {
    it("BUY CAKE " , () => {
        expect(reducerCake(initialState , {type : "BUY_CAKE"}).numOfCake).toBe(9)
    })

    it("STORE CAKE " , () => {
        expect(reducerCake(initialState , {type : "STORE_CAKE"}).numOfCake).toBe(11)
    })
})
