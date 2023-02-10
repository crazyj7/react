import React, { Component } from 'react';
import { StyleSheet, Platform, View } from 'react-native';
import { Text } from 'react-native';
import { Button } from 'react-native';
// import Icon from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'

export default function HomeScreen( {navigation} ) {

    return (
      <View style={styles.container}>
      <Text>HomeScreen</Text>
      <Button title="goto details"
          onPress={ () => navigation.navigate('Detail')
          }
          />
      <Icon.Button name="facebook" backgroundColor="#3b5998" 
       title="goto details"
          onPress={ () => navigation.navigate('Detail')
          }
        />
      <Icon name="rocket" size={30} color="#900" />
    </View>    
    );
}

  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
