import React from 'react';
import {TouchableOpacity ,StyleSheet ,  View , Text} from 'react-native'

const MovieItem = (props)=>{
    return(
         <TouchableOpacity 
                    //onPress = {props.onDeleteMovie} //1
                    //onPress = {props.onDeleteMovie} //2
                    onPress = {props.onDeleteMovie.bind(this , props.id)} //3

                    >
                    
                    <View  style={styles.card}>
                         <Text style={styles.cardText}>{`${props.title}  , ${props.releaseYear}`}</Text>
                     </View>
                    </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
   
      card: {
        width: 350,
        height: 50,
        borderRadius: 10,
        backgroundColor: '#101010',
        margin: 10,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
      },
      cardText: {
        fontSize: 20,
        color: '#ffd700',
        marginBottom: 5
      },
    
     
   
   
})

export default MovieItem