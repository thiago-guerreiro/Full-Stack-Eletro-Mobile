import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Text, TouchableOpacity } from 'react-native';
import styles from '../style/MainStyle';

export default function Login({navigation}) {

  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)

  const entrar = () => {
      console.log(email)
      console.log(password)
    navigation.reset({
        index: 0,
        routes: [{name: "Principal"}]
    })
  }

  const cadastrar = () => {
      navigation.navigate("Cadastro")
  }

  return (
    <View style={[styles.container, css.specificContainer]}>
        <Text style={styles.text}>Full Stack Eletro</Text>
        <TextInput style={styles.input}
            placeholder="E-mail"
            onChangeText={value => setEmail(value)}
            keyboardType="email-address"
        />
        <TextInput style={styles.input}
            placeholder="Senha"
            onChangeText={value => setPassword(value)}
            secureTextEntry={true}
        />
        <TouchableOpacity 
            style={styles.btnSubmit} 
            onPress={() => entrar()} >
            <Text style={styles.submitText}>Entrar</Text>
        </TouchableOpacity>
        <TouchableOpacity 
            style={styles.btnRegister}  
            onPress={() => cadastrar()} >
            <Text style={styles.registerText}>Criar uma conta</Text>
        </TouchableOpacity>
    </View>
  );
}

const css = StyleSheet.create({
    specificContainer: {
        backgroundColor: '#b22222',
    }
})