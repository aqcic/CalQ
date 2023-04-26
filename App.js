import React, { useState } from 'react';
import { View, Text, StyleSheet, Clipboard, TouchableOpacity } from 'react-native';

function CalQ() {
  const [result, setResult] = useState('');

  const handleButtonPress = (value) => {
    setResult(result + value);
  };

  const handleClearPress = () => {
    setResult('');
  };

  const handleEqualsPress = () => {
    try {
      const evaluated = eval(result);
      setResult(evaluated.toString());
    } catch (error) {
      setResult('Error');
    }
  };

  const handleCopyPress = () => {
    Clipboard.setString(result);
    alert('Result copied to clipboard!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.resultText}>{result}</Text>
      <View style={styles.row}>
        <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('1')}>
          <Text style={styles.buttonText}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('2')}>
          <Text style={styles.buttonText}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('3')}>
          <Text style={styles.buttonText}>3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('/')}>
          <Text style={styles.buttonText}>÷</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('4')}>
          <Text style={styles.buttonText}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('5')}>
          <Text style={styles.buttonText}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('6')}>
          <Text style={styles.buttonText}>6</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('*')}>
          <Text style={styles.buttonText}>x</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('7')}>
          <Text style={styles.buttonText}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('8')}>
          <Text style={styles.buttonText}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('9')}>
          <Text style={styles.buttonText}>9</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('-')}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('.')}>
          <Text style={styles.buttonText}>.</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('0')}>
          <Text style={styles.buttonText}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('+')}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.buttonEquals]}
          onPress={handleEqualsPress}>
          <Text style={[styles.buttonText, styles.buttonEqualsText]}>=</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={[styles.button, styles.buttonClear]} onPress={handleClearPress}>
          <Text style={[styles.buttonText, styles.buttonClearText]}>C</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.buttonCopy]} onPress={handleCopyPress}>
          <Text style={[styles.buttonText, styles.buttonCopyText]}>Copy</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'whitesmoke',
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e17055',
    borderRadius: '25%',
    borderWidth: 1,
    borderColor: 'black',
    height: 80,
    margin: 5,
  },
  buttonText: {
    fontSize: 24,
    color: 'white',
  },
  buttonEquals: {
    flex: 2,
    backgroundColor: '#e17055',
  },
  buttonEqualsText: {
    fontSize: 36,
    color: 'white',
  },
  buttonClear: {
    flex: 1,
    backgroundColor: '#e17055',
    height: 60,
    marginTop: 10,
  },
  buttonClearText: {
    fontSize: 24,
    color: 'white',
  },
  buttonCopy: {
    flex: 1,
    backgroundColor: '#e17055',
    height: 60,
    marginTop: 10,
  },
  buttonCopyText: {
    fontSize: 24,
    color: 'white',
  },
  resultText: {
    fontSize: 36,
    color: 'black',
    marginBottom: 20,
  },
});

export default CalQ;
