import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'


import Home from './screens/Home'
import Friends from './screens/Friends'

const Stack = createStackNavigator()

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        headerMode='none'
        initialRouteName='Home'
      >
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Friends' component={Friends} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routes
