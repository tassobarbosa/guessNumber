import React, {useState} from 'react';
import {View, Text,  StyleSheet, Button, TouchableWithoutFeedback, Keyboard, Alert} from 'react-native';

import Card from '../components/Card';
import Colors from '../constants/colors';
import NumberContainer from '../components/NumberContainer';
import Input from '../components/Input';
import TitleText from '../components/TitleText';
import PrimaryButton from '../components/PrimaryButton';

const StartGameScreen = props => {
    const [enteredValue, setEnteredValue] = useState('');
    const [confirmed, setConfirmed] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState();

    const numberInputHandler = inputText => {
        setEnteredValue(inputText.replace(/[^0-9]/g,''));
    };

    const resetInputHandler = () => {
        setEnteredValue('');
        setConfirmed(false);
    }

    const confirmInputHandler = () => {
        const chosenNumber = parseInt(enteredValue);
        if(isNaN(chosenNumber) || chosenNumber < 0 || chosenNumber > 99){
            Alert.alert(
                'Número invalido!',
                'Número deve ser entre 1 e 99.',
                [{text: 'Okay', style: 'destructive', onPress: resetInputHandler}]
            )
            return;
        }

        setConfirmed(true);
        setSelectedNumber(chosenNumber);
        setEnteredValue('');
        Keyboard.dismiss();
    }

    let confirmedOutput;
    if(confirmed){
        confirmedOutput = (
            <Card style={styles.summaryContainer}>
                <Text>Você escolheu</Text> 
                <NumberContainer>{selectedNumber}</NumberContainer>
                <PrimaryButton onPress={()=>props.onStartGame(selectedNumber)}>Começar</PrimaryButton>
            </Card>            
        ) 
    }

    return (
        <TouchableWithoutFeedback onPress={()=>{Keyboard.dismiss();}}>
        <View style={styles.screen}>
            <TitleText>Comece um Novo Jogo!</TitleText>
            <Card style={styles.inputContainer}>
                <Text>Digite um número</Text>
                <Input 
                    style={styles.input}
                    blurOnSubmit 
                    autoCaptalize='none' 
                    autoCorrect={false} 
                    keyboardType="number-pad" 
                    maxLength={2}                     
                    onChangeText={numberInputHandler}
                    value={enteredValue}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}><Button title='resetar' color={Colors.primary} onPress = {resetInputHandler} /></View>
                    <View style={styles.button}><Button title='confirmar' color={Colors.secondary} onPress = {confirmInputHandler}/></View>        
                </View>
            </Card>
            {confirmedOutput}
        </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    screen:{
        flex:1,
        padding: 10,
        alignItems: 'center'
    },
    inputContainer:{
        width: 300,
        maxWidth : '80%',
        alignItems: 'center',    
    },
    buttonContainer:{
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    },
    button:{
        width: 100,
    },
    input:{
        width: 50,
        textAlign: 'center',
    },
    summaryContainer:{
        margin: 20,
        alignItems: 'center'
    }

})

export default StartGameScreen;