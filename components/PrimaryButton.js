import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import colors from '../constants/colors';

const PrimaryButton = props => {
    return (
        <TouchableOpacity onPress={props.onPress}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>{props.children}</Text>
            </View>            
        </TouchableOpacity>
        
    );
};

const styles = StyleSheet.create({
    button:{
        backgroundColor: colors.primary,
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 25
    },
    buttonText:{
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18
    }
});

export default PrimaryButton;