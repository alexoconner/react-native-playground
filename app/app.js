
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

class App extends Component {
    constructor( props ) {
        super( props );
    }

    render() {
        return (
            <View style={ styles.container }>
                <Text>Hello World!</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF'
    }
});

export default App;
