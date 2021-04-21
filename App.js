import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';

import Header from './components/Header';
import GameScreen from './screens/GameScreen';
import StartGameScreen from './screens/StartGameScreen';

export default function App(){
  const [userNumber, setUserNumber] = useState();

  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
  };

  let content = <StartGameScreen onStartGame={startGameHandler}/>;

  if (userNumber){
    content = <GameScreen />;
  }

  return(
    <View style={styles.screen}>
      <Header title='Chute o Número'/>
      {content}      
    </View>
  );
}

const styles = StyleSheet.create({
  screen:{
    flex: 1
  }
})