import React from 'react'
import { View, Text , StyleSheet ,TouchableOpacity , Image} from 'react-native'
import { useDispatch , useSelector } from 'react-redux'
import { BuyCake , StoreCake } from '../../redux/cake/actionCake'

const cakeContainer = () => {
    const Data = useSelector( state => state.numOfCake )
    const dispacth = useDispatch()

    return (
        <View>
             <Image source={require('../../assets/img/cake.jpg')} style={{width : 200 , height : 200}}/> 
            <View style={Styles.container}>
               
                <TouchableOpacity style={Styles.button} onPress={ () => dispacth(BuyCake())}>
                    <Text style={Styles.text2}>BUY CAKE</Text>
                </TouchableOpacity>

                <TouchableOpacity style={Styles.button2 } onPress={() => dispacth(StoreCake())}>
                    <Text style={Styles.text2}>STORE CAKE</Text>
                </TouchableOpacity>

            </View>
            <Text style={Styles.text}>Jumlah Cake Tersedia {Data}</Text>
        </View>
    )
}
const Styles = StyleSheet.create({
    container : {
        display : 'flex' ,
        flexDirection : 'row' ,
        width : 400
    } ,

    button : { 
        padding : 10 ,
        backgroundColor : '#f1f3f6' ,
        flex : 1 ,
        marginRight :5 ,
        width : 200

    } ,

    button2 : { 
        padding : 10 ,
        backgroundColor : '#f1f396' ,
        flex : 1 ,
        width : 200 

    } ,

    text : {
        fontSize : 21 ,
        letterSpacing : 2 ,

    } ,

    text2 : {
        textAlign : 'center'
    }


})
export default cakeContainer
