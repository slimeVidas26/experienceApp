import React, { useState , useEffect } from 'react';
import {View ,TextInput ,  Text , StyleSheet, Button , FlatList ,Image} from 'react-native'


const Item = ({ item }) => (
    <>
      <Text>{item.images.preview.mp4}</Text>
        
       
        <Image
            resizeMode='contain'
            source={{uri: item.images.preview.mp4}}
          />
    </>
  );


const GiphyApi = (props)=>{



    const [search , setSearch] = useState('')
    const [query , setQuery] = useState('')
    const [result , setResult] = useState([])

    
    useEffect(()=>{
    
        fetch(`https://api.giphy.com/v1/gifs/search?api_key=d0n3Jlpaywdre87JsXWzCDLw1C3lu88Z&q=${query}&limit=25&offset=0&rating=g&lang=en`)
        .then(response=>response.json())
        .then(json=>setResult(json.data))
        //.then(json=>console.log(json.data[0].images.preview.mp4))    
    } , [query])

    // const renderItem = ({ item }) => {
    
    //     return (
    //       <Item item={item}
          
    //       />
    //     );
    //   };


    return (
        <View style = {styles.container}> 
            <Text style = {styles.giphyText}>welcome to Giphy Api</Text>
            <View style = {styles.form}>
                <TextInput style = {styles.inputField}  placeholder = {'Your Giphy...'} 
                           value = {search}
                           onChangeText = {(search)=>{setSearch(search)}}
                />

                <Button  title = 'Search' onPress = {()=>setQuery(search)} />
            </View>

             <View>
        <FlatList
        data={result}
        renderItem={({item}) => (
          <Text
           
          > {item.title}</Text>
         
        )}
      />
            
            </View>
<View>
<Text style = {styles.debugText}>{search}</Text>
<Text style = {styles.debugText}>{query}</Text> 
</View>
             
        </View>
    )
}


const styles = StyleSheet.create({
   
 
})

export default GiphyApi;