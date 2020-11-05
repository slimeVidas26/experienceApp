import React , {useState} from 'react';
import {View , StyleSheet , Modal} from 'react-native'
import { Input , Button} from 'react-native-elements';
import SafeZone from './SafeZone'




const InputForm = (props)=>{

    const [inputText, setInputText] = useState('');

    return(
         <Modal style = {styles.modal} visible = {props.visible} animationType = "slide">
         <View style = {styles.modal}>
       <View style = {styles.form}>
      
      <Input
         placeholder='Enter some text'
         onChangeText = {text=>setInputText(text)}
         value = {inputText}
     />

     <Button
     title= {inputText ? "Add" : "text"}
     disabled={!inputText}
     onPress = {()=>{props.onAddText(inputText) ; setInputText("")}}
    />
    
      </View>
    
     {/* SafeZone */}
      <SafeZone text = {inputText} />
     
      </View>
    
      
         </Modal>   
    )
}


const styles = StyleSheet.create({
    form : {
        
        flexDirection : 'row',
        justifyContent: 'center',
        alignItems: 'stretch',
        width : '65%',
        marginLeft : 16
    
     },
     modal : {
         flex : 1,
         justifyContent: 'center',
         alignItems: 'center',

     }
   
})


export default  InputForm;