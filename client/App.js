import React from 'react';
import {SafeAreaView} from 'react-native';
import routes from './src/navigation/routes.js';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <GestureHandlerRootView style={{flex: 1}}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            {routes.map((route, index) => (
              <Stack.Screen
                key={index}
                name={route.name}
                component={route.component}
                options={{
                  headerShown: route.name==='Home'?false:true,
                }}
              />
            ))}
          </Stack.Navigator>
        </NavigationContainer>
    </GestureHandlerRootView>
  );
  
};
export default App;
