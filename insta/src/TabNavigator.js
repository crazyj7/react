
import React, { Component } from 'react';
import { StyleSheet, Platform, View } from 'react-native';
import { Text } from 'react-native';
import { Button } from 'react-native';
// import Icon from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StackNavigator from './StackNavigator';
import HomeScreen from './HomeScreen';
import DetailScreen from './DetailScreen';
import MoreDetailScreen from './MoreDetailScreen';
import Icon from "react-native-vector-icons/FontAwesome";
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator()

/* 아이콘 찾는데가 어딘지 몰라 한 참을 헤메다..
https://oblador.github.io/react-native-vector-icons/
여기서 폰트별 이미지들을 찾을 수 있다... 
*/

export function TabNavigator() {
  return (
        <Tab.Navigator
            screenOptions={ ({route}) => ({
                tabBarIcon: ({focused, color, size}) => {
                    let iconName='information-circle'
                    if ( route.name==='Home') {
                        iconName = focused ? 'home' : 'home-outline';
                    } else if ( route.name == 'Detail') {
                        iconName = focused ? 'information-circle' : 'information-circle-outline';
                    } else if ( route.name == 'MoreDetail') {
                        iconName = focused ? 'add-circle' : 'add-circle-outline'
                    }
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveBackgroundColor: 'gray',
            }) }
         >
         <Tab.Screen name='Home' component={HomeScreen}
          />
         <Tab.Screen name='Detail' component={DetailScreen} />
         <Tab.Screen name="MoreDetail" component={MoreDetailScreen} />
        </Tab.Navigator>
   )

}




