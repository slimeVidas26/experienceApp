import { StatusBar } from 'expo-status-bar';
import React , {useState }from 'react';
import { StyleSheet,
         View ,
         Text,
         FlatList,
         
         } from 'react-native';

import Item from './components/Item'
import InputForm from './components/InputForm'
export default function App() {

   const [data , setData] = useState([])


   const addItemHandler = (itemTitle)=>{
    setData(currentData =>
      [{id : Math.random().toString(),value : itemTitle}, ...currentData])
     
   }


   const removeItemHandler = itemId=>
     setData(
       currentData=>currentData.filter(item=>item.id !== itemId)
     )
   

   const renderItem = ({item})=>{
     return(
       <Item   onDelete = {removeItemHandler.bind(this , item.id)} text = {item.value} /> 
     )

   }

   

  return (
    
  <View style={styles.container}>

    {/* input form */}
    <InputForm  onAddText = {addItemHandler}/>
 

 {data.length ? (<FlatList 
  keyExtractor = {(item)=>{item.id}}
   data = {data}
    renderItem = {renderItem}
  /> )
  : 
  (<Text style = {styles.noItems}>No Items !!</Text>)}
  
 
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
  noItems : {
    fontSize: 30
  }
  

  
});
