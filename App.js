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
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

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
        activeOpacity={0.7}
        onPress={() => handlePress('Você pressionou o botao estilizado')}
        onLongPress={() => handleLongPress('Toque longo no botao estilizado')}
        style={styles.shadowContainer}
      >
        <LinearGradient
          colors={['#4facfe', '#00f2fe']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.buttonOpacity}
        >
          <View style={styles.iconTextContainer}>
            <Ionicons name="flash-outline" size={22} color="#fff" style={styles.icon} />
            <Text style={styles.text}>TouchableOpacity</Text>
          </View>
        </LinearGradient>
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
    backgroundColor: '#ffffffff',
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

  shadowContainer: {
    borderRadius: 12,
    elevation: 8,
    shadowColor: '#00aaff',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 6,
  },
  buttonOpacity: {
    borderRadius: 12,
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  iconTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    marginRight: 8,
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
