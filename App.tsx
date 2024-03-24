import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import IntroScreen from './src/IntroScreen';
import DetailScreen from './src/DetailScreen';
import AutomaticBuilder from './src/AutomaticBuilder';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator> 
        <Stack.Screen
          name="PC Architect"
          component={IntroScreen}
          options={{
            headerStyle: {
              backgroundColor: 'black',
            },
            headerTitleStyle: {
              color: 'white',
            },
          }}
        />
        <Stack.Screen name="Configure" component={DetailScreen} />
        <Stack.Screen name="Go back" component={AutomaticBuilder} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
