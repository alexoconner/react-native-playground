
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
            todoInputVal: '',
            todos: [
                'Buy Milk',
                'Shopping'
            ]
        }
    }

    addToDo( todo ) {
        let todoTemp = todo.nativeEvent.text;

        if ( todoTemp.length > 0 ) {
            let todoArray = this.state.todos;
            todoArray.push(todoTemp);

            this.setState({
                todos: todoArray,
                todoInputVal: ''
            });
        }
    }

    removeToDo( todo ) {
        let arrayTemp = this.state.todos;
        let index = arrayTemp.indexOf(todo);

        if ( index > -1 ) {
            arrayTemp.splice( index, 1 );

            this.setState({
                todos: arrayTemp
            });
        }
    }

    render() {
        console.log('render app', this.state.todos);
        let todos = this.state.todos.map( ( item, index ) => {
            return (
                <View key={ index }>
                    <Text style={ styles.todosItem }>• { item }</Text>
                    <Text style={ styles.todosItemDelete } onPress={ () => this.removeToDo( item ) }>X</Text>
                </View>
            )
        });

        return (
            <View style={ styles.container }>
                <Text style={ styles.title }>TO-DO List:</Text>
                <View style={ styles.inputFieldWrapper }>
                    <TextInput
                        style={ styles.inputField }
                        onSubmitEditing={ event => this.addToDo( event ) }
                        value={ this.state.todoInputVal }
                        onChangeText={ text => this.setState({ todoInputVal: text })}
                    />
                </View>
                <View style={ styles.todos }>
                    { todos }
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
    },
    todos: {
        position: 'absolute',
        top: 100,
        left: 0,
        right: 0
    },
    todosItem: {
        fontSize: 26,
        lineHeight: 36
    },
    todosItemDelete: {
        position: 'absolute',
        right: 0,
        top: 0,
        fontSize: 26,
        lineHeight: 36
    }
});

export default App;
