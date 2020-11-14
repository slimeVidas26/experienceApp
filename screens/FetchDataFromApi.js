// https://www.youtube.com/watch?v=DTQ7EceGACM&t=279s
import React , {useState } from 'react';
import {View , Text , StyleSheet , FlatList ,  ActivityIndicator , TextInput , Button} from 'react-native'


const FetchDataFromApi = ()=>{

    const [data , setData] = useState([])
    const [isLoading , setLoading] = useState(true)
    const [title , setTitle] = useState([])
    const [description , setDescription] = useState([])
    const [inputMovie , setInputMovie] = useState('')
    
    const getRandomArbitrary = (min, max)=> {
        return Math.ceil(Math.random() * (max - min) + min);
      }

    const addMovieHandler = ()=>{
        setData((currentData)=> [{ id : Math.random().toString() , title : inputMovie , releaseYear : getRandomArbitrary(1900 , 2020).toString()},...currentData  ]
        )
    }

    return (
        

        <View style = {styles.container} > 
            {!isLoading ? <ActivityIndicator/> : 

            <View>
              
                <Text style={styles.title}>{'Movies Adder'}</Text>
                <TextInput placeholder = {'Add movie'}  style = {styles.input}
                onChangeText = {movie=>setInputMovie(movie)}
                value = {inputMovie}/>

              


               <View style = {styles.actions}>
               <View style = {styles.btn}>
                   <Button title = 'Add' onPress = {addMovieHandler} />
                   </View>
              
                   <View style = {styles.btn}>
                   <Button color = 'red' title = {'Cancel'} />
                   </View>
                   </View>
               

               
            <FlatList data = {data}
                
                renderItem = {(itemData)=>{
                    return (
                     <View style={styles.card}>
                         <Text style={styles.cardText}>{`${itemData.item.title}  , ${itemData.item.releaseYear}`}</Text>
                     </View>
                    )
                }}/>
              
                <Text style={styles.description}>{description}</Text>
                
            </View>
                
                
            }
            
            
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
      description : {
        color : 'red',
        fontSize : 15,
        justifyContent: 'center',
        alignItems: 'center',
        padding  : 20,
        marginBottom: 5    
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


export default FetchDataFromApi;