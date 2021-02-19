import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#b22222',
        paddingTop: 50,
    },
    card: {
        backgroundColor: '#fff',
        padding: 15,
        paddingTop: 20,
        marginTop: 10,
        marginBottom: 15,
    },
    title: {
        fontSize: 15,
        textAlign: 'center',
        fontWeight: 'bold',
        padding: 5,
    },
    data: {
        fontSize: 9,
        color: '#747476',
    },
    image: {
        height: 250,
    },
    descricao: {
        fontSize: 12,
        color: '#222121',
        padding: 5,
    },
    preco: {
        fontSize: 12,
        color: '#000',
        padding: 5,
    },
    oferta: {
        fontSize: 12,
        color: '#dc143c',
        fontWeight: 'bold',
        padding: 5,
    },
    icon: {
        flexDirection: 'row',
        margin: 6,

    },
    textIcon: {
        fontSize: 12,
        color: '#000',
        paddingHorizontal: 6,
    },
    scrollView: {
        backgroundColor: 'pink',
        marginHorizontal: 20,
    },
});

export default styles