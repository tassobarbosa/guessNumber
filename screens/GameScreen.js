import React, {useState, useRef, useEffect} from 'react';
import {View, Text, StyleSheet, Button, Alert, ScrollView} from 'react-native';

import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';
import TitleText from '../components/TitleText';
import Icon from 'react-native-ionicons'
import PrimaryButton from '../components/PrimaryButton';

const generateRandomBetween = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
    if(rndNum === exclude){
        return generateRandomBetween(min, max, exclude);
    }else{
        return rndNum;
    }
}

const GameScreen = props => {
    const initialGuess = generateRandomBetween(1, 100, props.userChoice);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);
    const [pastGuesses, setPastGuesses] = useState([initialGuess]);
    const currentLow = useRef(1);
    const currentHigh = useRef(100);

    const { userChoice, onGameOver } = props;

    useEffect(()=>{
        if(currentGuess === userChoice){
            onGameOver(pastGuesses.length);
        }
    },[currentGuess, userChoice, onGameOver])

    const nextGuessHandler = direction => {
        if(
            (direction === 'lower' && currentGuess < props.userChoice) ||
            (direction === 'greater' && currentGuess > props.userChoice)
        ){
            Alert.alert('Não trapaceie!', 'Isso é muito errado...',[
                {text: 'Foi mal!', style:'cancel'}
            ]);
            return;
        }

        if(direction === 'lower'){
            currentHigh.current = currentGuess;
        }else{
            currentLow.current = currentGuess+1;
        }
        const nextNumber = generateRandomBetween(currentLow.current, currentHigh.current, currentGuess);
        setCurrentGuess(nextNumber);
        //setRounds(curRounds => curRounds + 1);
        setPastGuesses(curPastGuesses => [nextNumber, ...curPastGuesses])

    };

    return(
        <View style={styles.screen}>
            <TitleText>Oppenent's guess</TitleText>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card style={styles.buttonContainer}>
                <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
                <Icon name='remove'/>
                </PrimaryButton>
                <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>
                    <Icon name='add'/>
                </PrimaryButton>
            </Card>
            <ScrollView>
                {pastGuesses.map(guess => 
                    <View key={guess}>
                        <Text>{guess}</Text>
                    </View>)}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        width: 400,
        maxWidth: '90%'
    }

});

export default GameScreen;