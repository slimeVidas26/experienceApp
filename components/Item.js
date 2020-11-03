import React from 'react';
import {View , Text , StyleSheet} from 'react-native'

const Item = (props)=>{
    return (
      <View style = {styles.item}>
         <Text style = {styles.text}>{props.text}</Text>
    </View>
    )
}


const styles = StyleSheet.create({
    item : {
        backgroundColor : 'tomato',
        //padding : 20,
        width : 300,
        height : 50,
       
        alignItems: 'center',
        justifyContent: 'center',
        marginTop : 10,
        
        
      },
     text : {
       fontSize : 25,
       color : 'white',
       
       
     },
})


export default Item;