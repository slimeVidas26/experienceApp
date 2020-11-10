import { StatusBar } from 'expo-status-bar';
import React , {useState }from 'react';
import { StyleSheet,
         View ,
         Text,
         FlatList,
         } from 'react-native';

import Item from '../components/Item'
import InputForm from '../components/InputForm'
import { Button} from 'react-native-elements';

export default function Todos() {


   const [data , setData] = useState([])
   const [isModal , setModal] = useState(false)



   const addItemHandler = (itemTitle)=>{
    
      setData(currentData =>
        [{id : Math.random().toString(),value : itemTitle}, ...currentData]),
        hideModalHandler()
    
    
     
   }


   const removeItemHandler = itemId=>
     setData(
       currentData=>currentData.filter(item=>item.id !== itemId)
     )
   

   const renderItem = ({item})=>{
     return(
       <Item id = {item.id}   onDelete = {removeItemHandler} text = {item.value} /> 
     )
   }

   const displayModalHandler = ()=>{
     setModal(true)
   }

   const hideModalHandler = ()=>{
    setModal(false)
  }

   

  return (
    
  <View style={styles.container}>

    <Button onPress = {displayModalHandler}  title = "Add new item"/>

    {/* input form */}
    <InputForm visible = {isModal} onAddText = {addItemHandler}
     onCancel = {hideModalHandler}/>
 

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
      marginTop : 20,
    fontSize: 30,
    color : 'tomato'
  }
  

  
});
