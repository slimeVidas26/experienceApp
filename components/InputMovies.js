import React , {useState} from 'react';
import {View , Text ,  StyleSheet  , TextInput , Button} from 'react-native'

const InputMovies = (props)=>{

    const [inputMovie , setInputMovie] = useState('')

    const clearInput = ()=>{
        setInputMovie('')
    }

    return (
         <View>
              
         <Text style={styles.title}>{'Movies Adder'}</Text>

<TextInput placeholder = {'Add movie'}  style = {styles.input}
onChangeText = {movie=>setInputMovie(movie)}
value = {inputMovie}/>

<View style = {styles.actions}>
<View style = {styles.btn}>
   <Button disabled = {!inputMovie} title = 'Add' onPress = {props.onAddMovie.bind(this , inputMovie)} />
   </View>

   <View style = {styles.btn}>
   <Button disabled = {!inputMovie} color = 'red' title = {'Cancel'} />
   </View>
   </View>
            
              
          </View>
              
    )
}

const styles = StyleSheet.create({
   
     
     
      title : {
          color : 'black',
          fontSize : 30,
          justifyContent: 'center',
          alignItems: 'center',
          padding  : 20,
          paddingLeft: 80,
          marginBottom: 5,
          textDecorationLine: "underline",
          textDecorationStyle: "solid",
          textDecorationColor: "#000",
          
      },
     
    input : {
        borderWidth : 2,
        width : 350,
        margin: 10,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        fontSize : 20,
        borderRadius: 10,
        
    },
    actions : {
        flexDirection : 'row',
        alignItems:'center',
        justifyContent : 'space-around',
        margin : 20
    },
    btn : {
        width : 100
    },
   
})


export default InputMovies