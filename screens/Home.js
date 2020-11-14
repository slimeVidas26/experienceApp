// src/screens/Home.js

import React from 'react'
import { StyleSheet, View, Text  , TouchableOpacity} from 'react-native'
import ButtonHome from '../components/ButtonHome'
function Home(props) {
  const character = {
    name: 'Luke Skywalker',
    home: 'Tatooine',
    species: 'human'
  }

  const {navigation} = props

  
  
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Screen</Text>

      

      <ButtonHome title = {`who is  ${character.name} ? `}
                  onNavigate = {() => navigation.navigate('Detail', { item: character })}/>

     
      <ButtonHome title = 'Movies Api'
                  onNavigate = {() => navigation.navigate('MoviesApi')}/>

      <ButtonHome title = 'Todo List'
                  onNavigate = {() => navigation.navigate('Todos')}/>
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
  text: {
    color: '#101010',
    fontSize: 24,
    fontWeight: 'bold'
  },
  
})

export default Home