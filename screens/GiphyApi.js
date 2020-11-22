import React, { useState , useEffect } from 'react';
import {View , Text , StyleSheet, Button , FlatList ,Image} from 'react-native'
import { TextInput } from 'react-native-gesture-handler';


const Item = ({ item }) => (
      <Text>{item.images.preview.mp4}</Text>
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

    const renderItem = ({ item }) => {
    
        return (
          <Item item={item}
          />
        );
      };


    return (
        <View style = {styles.container}> 
            <Text style = {styles.giphyText}>welcome to Giphy Api</Text>
            <View>
                <TextInput style = {styles.input} placeholder = {'Your Giphy...'} 
                           value = {search}
                           onChangeText = {(search)=>{setSearch(search)}}
                />

                <Button title = 'Search' onPress = {()=>setQuery(search)} />
            </View>

             <View>
             <FlatList
        data={result}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
            
            </View>

            {/* <Text style = {styles.debugText}>{search}</Text>
            <Text style = {styles.debugText}>{query}</Text> */}
        </View>
    )
}


const styles = StyleSheet.create({
    container : {
        flex : 1,
        alignItems : 'center',
        justifyContent : 'center'
    },
    giphyText : {
        fontSize : 24
    },
    input : {
        width : 300,
        fontSize : 24,
        borderColor : 'black',
        borderBottomColor : 'black',
        borderBottomWidth : 1,
        padding : 10,
        margin : 20

    },
    debugText : {
        backgroundColor : 'yellow',
        padding : 10,
        borderRadius : 10,
        fontSize : 20
    }
})

export default GiphyApi;