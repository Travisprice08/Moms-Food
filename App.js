import React from 'react';
import { StartScreen, MainScreen, RecipeScreen } from './components';

import Tabs from './navigation/tabs';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
        initialRouteName='Start'
      >
        <Stack.Screen
          name="Start"
          component={StartScreen}
        />
        <Stack.Screen
          name="Main"
          component={MainScreen}
        />
        <Stack.Screen
          name="Recipe"
          component={RecipeScreen}
        />

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;