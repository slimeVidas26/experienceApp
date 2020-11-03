import React from 'react';
import {View , Text , StyleSheet} from 'react-native'

const SafeZone = (props)=>{
    return(
     <View style = {styles.safeZone}>
        <Text  style = {styles.safeText}> {props.text}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
      safeZone : {
        width : 300,
        height : 50,
        //backgroundColor : '#ADD8E6',
        justifyContent : 'center',
        alignItems : 'center',
        marginTop: -35
        
      },
      safeText : {
        color : 'black',
        fontSize : 20
      }
})

export default SafeZone