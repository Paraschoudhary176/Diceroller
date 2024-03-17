import React from 'react';
import {
  Text,
  View,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Sound from 'react-native-sound';

const soundList = [
  require('../../DiceRoller/assets/one.wav'),
  require('../../DiceRoller/assets/two.wav'),
  require('../../DiceRoller/assets/three.wav'),
  require('../../DiceRoller/assets/four.wav'),
//   '../../DiceRoller/assets/five.wav',
//   '../../DiceRoller/assets/six.wav',
//   '../../DiceRoller/assets/seven.wav',
//   '../../DiceRoller/assets/eight.wav',
//   '../../DiceRoller/assets/nine.wav',
//   '../../DiceRoller/assets/ten.wav',
];

const SpanishNumber = () => {
  const playSound = sound => {
    const soundVar = new Sound(sound, Sound.MAIN_BUNDLE, err => {
      if (err) {
        console.log('NOT ABLE TO PLAY SOUND');
      }
    });

    setTimeout(() => {
      soundVar.play();
    }, 1000);

    soundVar.release();
  };

  return (
    <ScrollView style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../../DiceRoller/assets/logo.png')}
      />
      <View style={styles.gridContainer}>
        {soundList.map(sound => (
          <TouchableOpacity
            key={sound}
            style={styles.box}
            onPress={() => {
              playSound(sound);
            }}>
            <Text style={styles.text}>{sound}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

export default SpanishNumber;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1b262c',
  },
  logo: {
    alignSelf: 'center',
    marginTop: 15,
  },
  gridContainer: {
    flex: 1,
    margin: 5,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
  },
  box: {
    height: 110,
    alignItems: 'center',
    justifyContent: 'center',
    width: '46%',
    marginVertical: 6,
    backgroundColor: '#0f4c75',
    borderRadius: 5,

    shadowColor: '#393e46',
    elevation: 5,
  },
  text: {
    fontSize: 50,
    color: '#ff4301',
  },
});
