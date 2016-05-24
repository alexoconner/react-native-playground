
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput
} from 'react-native';

class App extends Component {
    constructor( props ) {
        super( props );

        console.log('app component');

        this.state = {
            todos: {}
        }
    }

    addToDo( todo ) {
        console.log('new to do: ', todo.nativeEvent.text, todo.nativeEvent.text.length);
    }

    render() {
        return (
            <View style={ styles.container }>
                <Text style={ styles.title }>TO-DO List:</Text>
                <View style={ styles.inputFieldWrapper }>
                    <TextInput
                        style={ styles.inputField }
                        onSubmitEditing={ event => this.addToDo(event) }
                    />
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        top: 40,
        left: 20,
        right: 20
    },
    title: {
        fontSize: 24
    },
    inputFieldWrapper: {
        position: 'absolute',
        left: 0,
        right: 0,
        borderBottomWidth: 1,
        borderBottomColor: '#999999',
        height: 40
    },
    inputField: {
        height: 40
    }
});

export default App;
