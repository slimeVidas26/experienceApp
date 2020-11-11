// https://www.youtube.com/watch?v=DTQ7EceGACM&t=279s
import React , {useState , useEffect} from 'react';
import {View , Text , StyleSheet , FlatList ,  ActivityIndicator} from 'react-native'


const FetchDataFromApi = ()=>{

    const [data , setData] = useState([])
    const [isLoading , setLoading] = useState(true)
    const [title , setTitle] = useState([])
    const [description , setDescription] = useState([])




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
        marginBottom: 5,
       
        
    }
})


export default FetchDataFromApi;