import { StatusBar } from 'expo-status-bar';
import React , {useState }from 'react';
import { StyleSheet,
         Text,
         View ,
         FlatList} from 'react-native';

import { Input , Button } from 'react-native-elements';

export default function App() {

   const [inputText, setInputText] = useState('');
   const [data , setData] = useState([])

   const addText = ()=>{
    setData([{id : Math.random().toString(),value : inputText}, ...data])
    setInputText('')
   }

   const renderItem = ({item})=>{
     return(
        <View style = {styles.item}>
         <Text style = {styles.text}>{item.value}</Text>
       </View>
      
     )
   }

   

  return (
    
  <View style={styles.container}>

      <View style = {styles.form}>
      <Input
         placeholder='Enter some text'
         onChangeText = {text=>setInputText(text)}
         value = {inputText}
     />

     <Button
     title="Add"
     disabled={!inputText}
     onPress = {addText}
    />
      
      </View>

      <View style = {styles.safeZone}>
        <Text  style = {styles.safeText}> {inputText}</Text>
        </View>

  <FlatList 
  keyExtractor = {(item , index)=>{item.id}}
   data = {data}
    renderItem = {renderItem}
  />
     </View>
    
  
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop : 70,
    flex: 1,
    flexDirection : 'column',
    backgroundColor: '#fff',
     alignItems: 'center',
    // justifyContent: 'space-around',
    //flexWrap : 'wrap'
  },
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
 
 
  form : {
    
    flexDirection : 'row',
    justifyContent: 'center',
    alignItems: 'stretch',
    width : '65%'

 },
 
 safeZone : {
   width : 300,
   height : 50,
   backgroundColor : '#ADD8E6',
   justifyContent : 'center',
   alignItems : 'center',
   
 },
 safeText : {
   color : 'black',
   fontSize : 20
 }
  
});
