import React, { Component } from 'react'
import { Text, View, Button, StyleSheet } from 'react-native'
import { createStackNavigator } from 'react-navigation';

class HomeApp extends Component {
    render() {
        return (
            <View style = {styles.container}>
               <Text>This is Home page</Text>
               <Button title = 'Go to Test' onPress = {() => this.props.navigation.navigate('home')}></Button>
            </View>
        )
    }
}

class Test extends Component {
    render() {
        return (
            <View style = {styles.container}>
               <Text>This is Test component</Text>
               <Button title = 'Go to Home' onPress = {() => this.props.navigation.navigate('test')}></Button>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        alignItems : 'center',
        justifyContent : 'center',
        backgroundColor : '#ffeeee'
    }
})


export default createStackNavigator ({
    home : HomeApp,
    test : Test
})