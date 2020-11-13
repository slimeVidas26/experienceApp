// https://www.youtube.com/watch?v=DTQ7EceGACM&t=279s
import React , {useState , useEffect} from 'react';
import {View , Text , StyleSheet , FlatList ,  ActivityIndicator , TextInput , Button} from 'react-native'


const FetchDataFromApi = ()=>{

    const [data , setData] = useState([])
    const [isLoading , setLoading] = useState(true)
    const [title , setTitle] = useState([])
    const [description , setDescription] = useState([])
    const [inputMovie , setInputMovie] = useState('')
    


    const addMovieHandler = ()=>{
        setData((currentData)=> [{ id : Math.random().toString() , title : inputMovie , releaseYear : 1985},...currentData  ]
        )

    
    }




    const movies = 'https://reactnative.dev/movies.json'

   useEffect( ()=>{
       fetch(movies)
       .then(response =>response.json())
       .then(json =>{
           setData(json.movies)
           setTitle(json.title)
           setDescription(json.description)
        })
       .catch(err =>alert(err)
       .finally(()=>setLoading(false))
       )
   })


    return (
        

        <View style = {styles.container} > 
            {!isLoading ? <ActivityIndicator/> : 

            <View>
              
                <Text style={styles.title}>{title}</Text>
                <TextInput placeholder = 'Add movie'  style = {styles.input}
                onChangeText = {(movie)=>setInputMovie(movie)}/>


               <View style = {styles.actions}>
               <View style = {styles.btn}>
                   <Button title = {'Add'} onPress = {addMovieHandler} />
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
        height: 100,
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
        backgroundColor : '#ffd700'
    },
    actions : {
        flexDirection : 'row',
        alignItems:'center',
        justifyContent : 'space-around'
    },
    btn : {
        width : 100
    },
   
})


export default FetchDataFromApi;