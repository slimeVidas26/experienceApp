// https://www.youtube.com/watch?v=DTQ7EceGACM&t=279s
import React , {useState } from 'react';
import {View , Text ,  StyleSheet , FlatList ,  ActivityIndicator , TextInput , Button, TouchableOpacity} from 'react-native'
import InputMovies from '../components/InputMovies'
import MovieItem from '../components/MovieItem';

const MoviesApi = ()=>{

    const [movies , setMovies] = useState([])
    
    const getRandomArbitrary = (min, max)=> {
        return Math.ceil(Math.random() * (max - min) + min);
      }

      //ADD MOVIENHANDLER
    const addMovieHandler =(movieTitle)=>{
        setMovies((currentMovies)=> 
        [{ id : Math.random().toString() ,
           title : movieTitle ,
            releaseYear : getRandomArbitrary(1900 , 2020).toString()},
            ...currentMovies  ])}
    

    //DELETE MOVIE HANDLER
    const deleteMovieHandler = itemId=>
    setMovies(
      currentMovies=>currentMovies.filter(item=>item.id !== itemId)
    )

    

    return (
        

        <View style = {styles.container} > 
          

           <InputMovies onAddMovie = {addMovieHandler} />
               
            <FlatList data = {movies}
                
                renderItem = {(itemData)=>{
                    return (
                  <MovieItem 
                      id = {itemData.item.id}
                      title = {itemData.item.title} 
                      releaseYear = {itemData.item.releaseYear} 
                      onDeleteMovie = {()=>deleteMovieHandler(itemData.item.id)} /> 
                    
                    )
                }}/>
                          
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ebebeb'
      },
    
    
})


export default MoviesApi;