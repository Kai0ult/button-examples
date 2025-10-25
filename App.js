import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Alert,
  TouchableHighlight,
  TouchableOpacity,
  TouchableNativeFeedback
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function App() {

  const handlePress = (message) => {
    Alert.alert('Botao pressionado', message);
  };

  const handleLongPress = (message) => {
    Alert.alert('Toque longo', message);
  };

  return (
    <View style={styles.container}>
      <StatusBar style='light' />

      <TouchableHighlight
        style={styles.buttonHighlight}
        underlayColor="#0056b3"
        onPress={() => handlePress('Você pressionou o botao Highlight')}
        onLongPress={() => handleLongPress('Toque longo no botao Highlight')}
      >
        <Text style={styles.text}>TouchableHighlight</Text>
      </TouchableHighlight>

      <TouchableOpacity
        style={styles.buttonOpacity}
        activeOpacity={0.7}
        onPress={() => handlePress('Você pressionou o botao Opacity')}
        onLongPress={() => handleLongPress('Toque longo no botao Opacity')}
      >
        <Text style={styles.text}>TouchableOpacity</Text>
      </TouchableOpacity>

      <View style={styles.wrapperNative}>
        <TouchableNativeFeedback
          background={TouchableNativeFeedback.Ripple('#fff', false)}
          onPress={() => handlePress('Você pressionou o botao NativeFeedback')}
          onLongPress={() => handleLongPress('Toque longo no botao NativeFeedback')}
        >
          <View style={styles.buttonNative}>
            <Text style={styles.text}>TouchableNativeFeedback</Text>
          </View>
        </TouchableNativeFeedback>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
    padding: 20,
  },
  buttonHighlight: {
    backgroundColor: '#007bff',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  buttonOpacity: {
    backgroundColor: '#28a745',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  wrapperNative: {
    borderRadius: 8,
    overflow: 'hidden', 
  },
  buttonNative: {
    backgroundColor: '#ff5722',
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  text: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
