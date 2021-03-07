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

export default reducerCake
