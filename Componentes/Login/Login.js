import { TextInput, TouchableOpacity } from "react-native";
import { View, Text, Image, StyleSheet } from "react-native";

export default function Login() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Fly Dream</Text>
      <Image style={styles.profileImage} source={require('../../assets/download.png')} />
      <TextInput 
        style={styles.input} 
        placeholder="Email" 
        placeholderTextColor="#fff" 
        keyboardType="email-address" 
        autoCapitalize="none"
      />
      
      <TextInput 
        style={styles.input} 
        placeholder="Senha" 
        placeholderTextColor="#fff" 
        secureTextEntry={true} // Oculta senha
      />
      
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Get Start</Text>
      </TouchableOpacity>
      
      <Text style={styles.registerText}>Don't have an account? Register</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1E90FF',
    marginBottom: 20,
    textAlign: 'center',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  input: {
    width: '85%',
    height: 45,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    marginBottom: 15,
    paddingHorizontal: 12,
    textAlign: 'center',
    backgroundColor: '#1E90FF20', // Leve transparência para destacar o input
  },
  button: {
    width: '85%',
    height: 50,
    backgroundColor: '#1E90FF',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  registerText: {
    color: '#000',
    fontSize: 14,
    textAlign: 'center',
  },
});
