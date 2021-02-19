import React from 'react';
import { ScrollView, View, Image, Text } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import styles from '../style/ProductStyle';

export default function Feed() {

    return (
        <ScrollView >
            <View style={styles.container}>
                <SearchBar
                    placeholder="Pesquisar produto..."
                    containerStyle={{backgroundColor: '#b22222'}}
                    inputContainerStyle={{backgroundColor: '#b22222'}}
                    searchIcon={{color: '#fff'}}
                    inputStyle={{backgroundColor: 'white', height: 5, borderRadius: 5}}
                    marginTop={10}
                />
                <View style={styles.card}>
                    <Image style={styles.image} source={require('../images/tv1.jpg')} />
                    <Text style={styles.title}>Smart TV LED 32 HD LG 32, HDR Bluetooth, HDMI e USB, WebOS 4.5</Text>
                    <Text style={styles.preco}>De: R$ 1574.90</Text>
                    <Text style={styles.oferta}>Por: R$ 1349.00</Text>
                    <View style={styles.icon}>
                        <MaterialCommunityIcons
                            name='cart'
                            size={22}
                            color='#000'
                            padding={5}
                        />
                    </View>
                </View>
                <View style={styles.card}>
                    <Image style={styles.image} source={require('../images/computador1.jpg')} />
                    <Text style={styles.title}>Computador Gamer Intel Core i3 8GB HD 500GB Nvidia Geforce GT</Text>
                    <Text style={styles.preco}>De: R$ 2899.00</Text>
                    <Text style={styles.oferta}>Por: R$ 2649.00</Text>
                    <View style={styles.icon}>
                        <MaterialCommunityIcons
                            name='cart'
                            size={22}
                            color='#000'
                            padding={5}
                        />
                    </View>
                </View>
                <View style={styles.card}>
                    <Image style={styles.image} source={require('../images/videogame1.jpg')} />
                    <Text style={styles.title}>Console PS4 - Modelo Slim 1TB + Jogo Days Gone - Preto</Text>
                    <Text style={styles.preco}>De: R$ 2579.00</Text>
                    <Text style={styles.oferta}>Por: R$ 2399.00</Text>
                    <View style={styles.icon}>
                        <MaterialCommunityIcons
                            name='cart'
                            size={22}
                            color='#000'
                            padding={5}
                        />
                    </View>
                </View>
                <View style={styles.card}>
                    <Image style={styles.image} source={require('../images/notebook1.jpg')} />
                    <Text style={styles.title}>Notebook Dell Core i3 4GB 1TB Tela 15.6 Linux Inspiron HD 500GB</Text>
                    <Text style={styles.preco}>De: R$ 3099.00</Text>
                    <Text style={styles.oferta}>Por: R$ 2899.10</Text>
                    <View style={styles.icon}>
                        <MaterialCommunityIcons
                            name='cart'
                            size={22}
                            color='#000'
                            padding={5}
                        />
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}
