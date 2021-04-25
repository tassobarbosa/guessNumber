import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const TitleText = props => {
    return (
        <Text style={styles.titleText}>{props.children}</Text>
    );
};

const styles = StyleSheet.create({
    titleText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 10        
    }
});

export default TitleText;