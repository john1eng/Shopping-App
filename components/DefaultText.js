import React from 'react';
import { Text, StyleSheet } from 'react-native';

const DefaultText = props => {
    return <Text style={style.text}>{props.children}</Text>;
};

const style = StyleSheet.create({
    text: {
        fontFamily: 'noto-sans',
        color: 'blue'
    }
})

export default DefaultText;