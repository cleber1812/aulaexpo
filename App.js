import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Botao from './botao/index'

export default function App() {
  const [texto, setTexto] = useState('CLIQUE AQUI')
  const [entrada, onChangeText] = useState("Deixe uma mensagem");
  return (
    <View style={styles.container}>  
      <View style={{backgroundColor:'#a10c'}}>
        <Text>Será: {texto}</Text>
      </View>   
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={entrada}
      />
      <Botao label={texto} setLabel={setTexto}></Botao>
      <Text>Até que enfim, funcionou!!! 
        <Text style={{color:'blue', fontSize:20, fontWeight:'bold'}}>Formatação diferente</Text> continuando o texto.
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,    
    backgroundColor: '#199',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },

  // Isso aqui não está sendo usando neste modelo
  outroTexto:{
    color: '#991',
  }
});