import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Text, TouchableOpacity } from 'react-native';
import styles from '../style/MainStyle';

export default function Login({ navigation }) {

    const [nome, setNome] = useState(null)
    const [email, setEmail] = useState(null)
    const [telefone, setTelefone] = useState(null)
    const [password, setPassword] = useState(null)

    const entrar = () => {
        console.log(nome)
        console.log(email)
        console.log(telefone)
        console.log(password)
    }

    const login = () => {
        navigation.navigate("Login")
    }

    return (
        <View style={[styles.container, css.specificContainer]}>
            <Text style={styles.text}>Cadastre-se</Text>
            <TextInput style={styles.input}
                placeholder="Nome"
                onChangeText={value => setNome(value)}
            />
            <TextInput style={styles.input}
                placeholder="E-mail"
                onChangeText={value => setEmail(value)}
                keyboardType="email-address"
            />
            <TextInput style={styles.input}
                placeholder="Telefone"
                onChangeText={value => setTelefone(value)}
                keyboardType="number-pad"
            />
            <TextInput style={styles.input}
                placeholder="Senha"
                onChangeText={value => setPassword(value)}
                secureTextEntry={true}
            />
            <TouchableOpacity
                style={styles.btnSubmit}
                onPress={() => entrar()} >
                <Text style={styles.submitText}>Cadastrar</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.btnRegister}
                onPress={() => login()} >
                <Text style={styles.registerText}>Já tem uma conta? Faça login</Text>
            </TouchableOpacity>
        </View>
    );
}

const css = StyleSheet.create({
    specificContainer: {
        backgroundColor: '#b22222',
    }
})
