import React, { useState } from "react";
import { userOperation } from "../../Database/db";
import { View , Text, TextInput, TouchableOpacity, Alert , StyleSheet, Button} from "react-native";


const navigateToLogin = () => {
  console.log("Navegando para a tela de login");
};


export default function RegisterScreen({onLogin}) {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleRegister = async () => {
    if (!user|| !password || !confirmPassword) {
      Alert.alert("Preencha todos os campos");
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert("As senhas diferentes");
      return;
    }

    setIsLoading(true);

    try {
      const existingUser = await userOperation.findByUser(user);
      if (existingUser) {
        Alert.alert("Usuário já existe");
        setIsLoading(false);
        return;
      }

     
      await userOperation.register(user, password);

      Alert.alert("Usuário registrado com sucesso",null, [
        { text: "OK", onPress: onLogin },
      ]);

      setIsLoading(false);
    } catch (error) {
      console.error("Error registering user:", error);
      alert("Erro ao registrar usuário");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register Screen</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={user}
        onChangeText={setUser}
        autoCapitalize="none"
        placeholderTextColor="#000"
      />
      
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        autoCapitalize="none"
        placeholderTextColor="#000"
      />
      
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
        autoCapitalize="none"
        placeholderTextColor="#000"
      />
      
      <TouchableOpacity
        style={styles.button}
        onPress={handleRegister}
        disabled={isLoading}
      >
        <Text style={styles.buttonText}>{isLoading ? "Registering..." : "Register"}</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={navigateToLogin} style={{ marginTop: 20 }}>
        <Text  >
          Already have an account? Login
        </Text>
      </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 20,
    marginTop: 100
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1E90FF',
    marginBottom: 20,
  },
  input: {
    width: 250,
    height: 45,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    marginBottom: 15,
    paddingHorizontal: 12,
    textAlign: 'center',
    backgroundColor: '#1E90FF20',
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
    marginTop: 10,
    textDecorationLine: 'underline',
  },
});