import React from 'react';
import {View, Text, StyleSheet, Image } from 'react-native';


const footer = props => {
    return (
        <View style = {styles.footage}>
            <Text style = {styles.headerTitle}>{props.title}</Text>
        </View>
    );


};

const styles = StyleSheet.create({
    footage: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: "row"
    },
    tinylogo: {
        justifyContent: 'flex-end',
        width: 90,
        height: 90
    }

});

export default footer;