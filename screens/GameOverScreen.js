import React from 'react';
import {View, Text, StyleSheet, Button, Image} from 'react-native';
import PrimaryButton from '../components/PrimaryButton';

import TitleText from '../components/TitleText';

const GameOverScreen = props => {
    return (
        <View style={styles.screen}>  
            <TitleText>Fim de Jogo!</TitleText>
            <View style={styles.imageContainer} >
                <Image source={require('../images/success.png')} style={styles.image} />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.textMessage}>Seu telefone precisou de <Text style={styles.textHighlight} >{props.roundsNumber}</Text> rodadas para descobrir <Text style={styles.textHighlight}>{props.userNumber}</Text></Text>            
            </View>            
            <PrimaryButton onPress={props.onRestart}>NOVO JOGO</PrimaryButton>
        </View>
    );
};

const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image:{
        height: '100%',
        width: '100%',
    },
    imageContainer:{
        width: 250,
        height: 250,
        overflow: 'hidden',
        shadowColor: 'black',
        shadowOffset: {width:0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.26,
        elevation: 8,
        backgroundColor: 'white',
        borderRadius: 10,
        marginVertical: 10
    },
    textContainer:{
        width: '80%',
        justifyContent: 'center',
        marginVertical: 10,
        
    },
    textMessage:{
        textAlign: 'center',
        fontSize: 16
    },
    textHighlight:{
        color: 'red',
        fontWeight: 'bold'
    }
});

export default GameOverScreen;