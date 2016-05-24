
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
            todos: []
        }
    }

    addToDo( todo ) {
        let todoTemp = todo.nativeEvent.text;

        if (todoTemp.length > 0) {
            let todoArray = this.state.todos;
            todoArray.push(todoTemp);

            this.setState({
                todos: todoArray,
                todoInputVal: ''
            });
        }
    }

    render() {
        console.log('render app', this.state.todos);
        let todos = this.state.todos.map( ( item, index ) => {
            console.log(item, index);
            return (
                <Text style={ styles.todosItem } key={ index }>• { item }</Text>
            )
        });

        return (
            <View style={ styles.container }>
                <Text style={ styles.title }>TO-DO List:</Text>
                <View style={ styles.inputFieldWrapper }>
                    <TextInput
                        style={ styles.inputField }
                        onSubmitEditing={ event => this.addToDo(event) }
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
        fontSize: 18
    }
});

export default App;
