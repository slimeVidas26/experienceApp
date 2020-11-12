import React from 'react';
import { StyleSheet, Text  , TouchableOpacity} from 'react-native'



const ButtonHome = (props)=>{
    return (
        <TouchableOpacity
        style={styles.buttonContainer}
        onPress={props.onNavigate}>
        <Text style={styles.buttonText}>{props.title}</Text>
      </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
   
    buttonContainer: {
      // backgroundColor: '#222',
      // borderRadius: 5,
      // padding: 10,
      // margin: 5,
       width : 300,
      borderWidth: 1,
      borderRadius: 2,
      borderColor: '#ddd',
      borderBottomWidth: 0,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.8,
      shadowRadius: 2,
      elevation: 4,
      marginLeft: 5,
      marginRight: 5,
      marginTop: 10,
      padding : 10
    },
    buttonText: {
      fontSize: 20,
      color: '#101010'
    }
  })

export default ButtonHome;