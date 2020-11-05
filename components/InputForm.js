import React , {useState} from 'react';
import {View , StyleSheet} from 'react-native'
import { Input , Button } from 'react-native-elements';
import SafeZone from './SafeZone'




const InputForm = (props)=>{

    const [inputText, setInputText] = useState('');

    return(
        <View>

        
       <View style = {styles.form}>
      <Input
         placeholder='Enter some text'
         onChangeText = {text=>setInputText(text)}
         value = {inputText}
     />

     <Button
     title= {inputText ? "Add" : "text"}
     disabled={!inputText}
     onPress = {()=>{props.onAddText(inputText) ; setInputText("") }}
    />
      </View>
     {/* SafeZone */}
      <SafeZone text = {inputText} />
      </View>
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
   
})


export default  InputForm;