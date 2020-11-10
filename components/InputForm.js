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
         placeholder={ "Enter some text"}
         onChangeText = {text=>setInputText(text)}
         value = {inputText}
     />


     <View style = {styles.actions}>
         <View style = {{width : 100}}>
         <Button
     title= {inputText ? "Add" : "text"}
     disabled={!inputText}
     onPress = {()=>{props.onAddText(inputText,setInputText("")) }}
    />
         </View>
    
         <View style = {{width : 100}}>
        <Button buttonStyle={{backgroundColor: 'red'}} title = 'Cancel'
        onPress = {()=>{props.onCancel() ;setInputText('') }} />
        </View>
  
     </View>

    
    
      </View>
    
     {/* SafeZone */}
      <SafeZone text = {inputText} />
     
      </View>
    
      
         </Modal>   
    )
}


const styles = StyleSheet.create({
    form : {
        
        flexDirection : 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
        width : '65%',
        marginLeft : 16
    
     },
     modal : {
         flex : 1,
         justifyContent: 'center',
         alignItems: 'center',

     },
     actions : {
         flexDirection : 'row',
         justifyContent : 'space-evenly',
         alignItems : 'center',
         marginBottom : 50

     }
   
})


export default  InputForm;