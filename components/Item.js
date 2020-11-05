import React from 'react';
import {View , Text , StyleSheet , TouchableOpacity} from 'react-native'


//ITEM COMPONENT
const Item = (props)=>{
    return (
      <TouchableOpacity  onPress = {props.onDelete.bind(this , props.id)}>
      <View style = {styles.item}>
         <Text style = {styles.text}>{props.text}</Text>
    </View>
      </TouchableOpacity>
     
      
      
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