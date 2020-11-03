import React , {useState} from 'react';
import {View , StyleSheet} from 'react-native'
import { Input , Button } from 'react-native-elements';



const InputForm = (props)=>{

    const [inputText, setInputText] = useState('');

    return(
       <View style = {styles.form}>
      <Input
         placeholder='Enter some text'
         onChangeText = {text=>setInputText(text)}
         value = {inputText}
     />

     <Button
     title="Add"
     disabled={!inputText}
     onPress = {()=>props.onAddText(inputText)}
    />
      
      </View>
    )
}


const styles = StyleSheet.create({
    form : {
    
        flexDirection : 'row',
        justifyContent: 'center',
        alignItems: 'stretch',
        width : '65%'
    
     },
})


export default  InputForm;