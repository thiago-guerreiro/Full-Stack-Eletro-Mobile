import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    padding: 50,
    fontWeight: 'bold'
  },
  input: {
    width: '70%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  btnSubmit: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    height: 45,
    width: '50%',
    borderRadius: 7,
    marginTop: 10,
  },
  submitText: {
    color: '#b22222',
    fontSize: 18,
  },
  btnRegister: {
    marginTop: 10,
  },
  registerText: {
    color: '#fff',
  },
});

export default styles

