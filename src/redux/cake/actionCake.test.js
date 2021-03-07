
const BuyCake = () => {
    return {
        type : "BUY_CAKE" 
    }
}

const StoreCake = () => {
    return {
        type : "STORE_CAKE"
    }
}

test("Test Action Buy Cake " , () => {
    expect(BuyCake().type).toBe("BUY_CAKE")
})

test("Test Action Store Cake " , () => {
    expect(StoreCake().type).toBe("STORE_CAKE")
})
