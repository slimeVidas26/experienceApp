import { StatusBar } from 'expo-status-bar';
import React , {useState }from 'react';
import { StyleSheet,
         View ,
         FlatList,
         TextInput} from 'react-native';

import Item from './components/Item'
import InputForm from './components/InputForm'

export default function App() {

   const [data , setData] = useState([])


   const addTextHandler = (itemTitle)=>{
    setData([{id : Math.random().toString(),value : itemTitle}, ...data])
     
   }

   const renderItem = ({item})=>{
     return(
       <Item text = {item.value} />
      
     )
   }

   

  return (
    
  <View style={styles.container}>

    {/* input form */}
    <InputForm  onAddText = {addTextHandler}/>

      {/* <View style = {styles.safeZone}>
        <Text  style = {styles.safeText}> {inputText}</Text>
        </View> */}

  <FlatList 
  keyExtractor = {(item)=>{item.id}}
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
  
//  safeZone : {
//    width : 300,
//    height : 50,
//    backgroundColor : '#ADD8E6',
//    justifyContent : 'center',
//    alignItems : 'center',
   
//  },
//  safeText : {
//    color : 'black',
//    fontSize : 20
//  }
  
});
