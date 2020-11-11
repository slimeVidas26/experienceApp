import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Home from '../screens/Home'
import Detail from '../screens/Detail'
import Settings from '../screens/Settings'
import Todos from '../screens/Todos'
import FetchDataFromApi from '../screens/FetchDataFromApi'



const Stack = createStackNavigator()

function MainStackNavigator() {
  return (
    <NavigationContainer>
    <Stack.Navigator
  initialRouteName='Home'
  screenOptions={{
    gestureEnabled: true,
    headerStyle: {
      backgroundColor: '#101010'
    },
    headerTitleStyle: {
      fontWeight: 'bold'
    },
    headerTintColor: '#ffd700',
    headerBackTitleVisible: false
  }}
  headerMode='float'>
        <Stack.Screen name='Home'
                      component={Home}
                      options = {{title : 'Home screen'}} />
        <Stack.Screen
                      name='Detail'
                      component={Detail}
                      options={({ route }) => ({
                      title: route.params.item.name
  })}
/>
        <Stack.Screen name='Todos'
                      component={Todos}
                      options = {{title : 'Todos screen'}} />
        <Stack.Screen
                      name='Settings'
                      component={Settings}
                      options={{ title: 'Settings' }}
        />

        <Stack.Screen
                      name='FetchDataFromApi'
                      component={FetchDataFromApi}
                      options={{ title: 'Fetch Data From Api' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainStackNavigator