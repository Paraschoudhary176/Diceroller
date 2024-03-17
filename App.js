import {View, Text} from 'react-native';
import React from 'react';
import BgChanger from './src/BgChanger';
import DiceRoller from './src/DiceRoller';
import SpanishNumber from './src/SpanishNumber';

export default function App() {
  return (
    <View style={{flex: 1}}>
      {/* <BgChanger />
       */}
      {/* <DiceRoller /> */}
      <SpanishNumber />
    </View>
  );
}
