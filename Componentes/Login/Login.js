import { TextInput, TouchableOpacity } from "react-native";
import { View, Text, Image, StyleSheet } from "react-native";

export default function Login() {
  return (
    <View style={styles.container}>
      <Text style={styles.tittle}>Fly Dream</Text>
      <Image source={{ uri: 'https://placehold.co/100x100' }} style={styles.profileImage} />
      <TextInput style={styles.input} placeholder="Email" placeholderTextColor="#fff" />
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        placeholderTextColor="#fff"
        keyboardType="email-address"
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Get Start</Text>
      </TouchableOpacity>
      <Text style={styles.registerText}>Não tenho conta registrada</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tittle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1E90FF',
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  button: {
    width: 150,
    height: 50,
    backgroundColor: '#1E90FF',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  registerText: {
    color: '#000',
    fontSize: 14,
  },
});
