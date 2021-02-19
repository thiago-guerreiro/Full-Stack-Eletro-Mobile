import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { MaterialCommunityIcons } from '@expo/vector-icons'

export default function Feed() {

    return (
        <View style={css.container}>
            <SearchBar
                placeholder="Pesquisar categoria..."
                containerStyle={{ backgroundColor: '#b22222' }}
                inputContainerStyle={{ backgroundColor: '#b22222' }}
                searchIcon={{ color: '#fff' }}
                inputStyle={{ backgroundColor: 'white', height: 5, borderRadius: 5 }}
                marginTop={10}
            />
            <View style={css.box}>
                <MaterialCommunityIcons
                    name='cellphone-text'
                    size={30}
                    color='#000'
                    padding={20}
                />
                <Text style={css.text}>Celuar</Text>
            </View>
            <View style={css.box}>
                <MaterialCommunityIcons
                    name='television'
                    size={30}
                    color='#000'
                    padding={20}
                />
                <Text style={css.text}>Smart TV</Text>
            </View>
            <View style={css.box}>
                <MaterialCommunityIcons
                    name='google-controller'
                    size={30}
                    color='#000'
                    padding={20}
                />
                <Text style={css.text}>Vídeo Game</Text>
            </View>
            <View style={css.box}>
                <MaterialCommunityIcons
                    name='desktop-classic'
                    size={30}
                    color='#000'
                    padding={20}
                />
                <Text style={css.text}>Computador</Text>
            </View>
            <View style={css.box}>
                <MaterialCommunityIcons
                    name='laptop'
                    size={30}
                    color='#000'
                    padding={20}
                />
                <Text style={css.text}>Notebook</Text>
            </View>
        </View>
    );
}

const css = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#b22222',
        paddingTop: 50,
    },
    box: {
        flexDirection: 'row',
        margin: 6,
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 5,
    },
    text: {
        fontSize: 13,
        fontWeight: 'bold',
        paddingHorizontal: 20,
    },
})