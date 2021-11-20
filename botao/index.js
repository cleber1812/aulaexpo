import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

// import { Container } from './styles';

const Botao = ({label, setLabel}) => {
  return (
  <View>
    <TouchableOpacity style={{
      backgroundColor:'blue',
      color: '#f8a',
      height: 50,
      width: 150,
      borderRadius:10,
      display:'flex',
      justifyContent:'center',
      alignItems: 'center',
      marginTop:5,
    }}
    onPress={()=>setLabel('Parabéns')}
    >
      <Text style={{color:'#fff'}}>hum {label}</Text>
    </TouchableOpacity>

  </View>
  );
}

export default Botao;