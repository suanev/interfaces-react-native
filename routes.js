import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './src/pages/Home';
import Music from './src/pages/Music';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Routes = () => {
    const Tab = createBottomTabNavigator();
  
    const activeColor = '#e91e63';

    return (
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Home"
          tabBarOptions={{
            activeTintColor: activeColor,
          }}
        >
          <Tab.Screen
            name="Home"
            component={Home}
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({ color, size }) => (
                <Icon name="home" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="Music"
            component={Music}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Icon name="play" color={color} size={size} />
              ),
            }}
          />
  
        </Tab.Navigator>
      </NavigationContainer>
    );
  };
  
  export default Routes;