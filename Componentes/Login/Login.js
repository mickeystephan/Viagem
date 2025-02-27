import React ,{ useState } from "react";
import { Alert, TextInput, TouchableOpacity } from "react-native";
import { View, Text, Image, StyleSheet } from "react-native";
import { userOperation } from "../../Database/db";


export default function Login({onLoginSuccess, navigateToRegister}) {
  const [user , setuser] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () =>{
    if (!user || !password){
      Alert.alert("Error", "Please fill in all fields");
      return
    }
    setIsLoading(true);

    try {
      const user = await userOperation.login(user, password);

      if (user) {
        Alert.alert("Login successfully");
        onLoginSuccess(user);
      } else {
        Alert.alert("Error");
      }
    } catch (error) {
      console.error("Login error:", error);
      Alert.alert("Error", "An error occurred during login");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    
    <View style={styles.container}>
      <Text style={styles.title}>Fly Dream</Text>
      <Image style={styles.profileImage} source={require('../../assets/download.png')} />
      <TextInput 
        style={styles.input} 
        placeholder="User" 
        value={user}
        onChangeText={setuser}
        placeholderTextColor="#000" 
        autoCapitalize="none"
      />
      
      <TextInput 
        style={styles.input} 
        placeholder="Senha" 
        value={password}
        onChangeText={setPassword}
        placeholderTextColor="#000" 
        secureTextEntry={true} 
      />
       <TouchableOpacity
        style={styles.button}
        onPress={handleLogin}
        disabled={isLoading}
      >
        <Text style={styles.buttonText}>
          {isLoading ? "Loading..." : "Login"}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Get Start</Text>
      </TouchableOpacity>
      
      <TouchableOpacity onPress={navigateToRegister}>
        <Text style={styles.registerText}>Don't have an account? Register</Text>
      </TouchableOpacity>
    </View>
  );
}

export const styles = StyleSheet.create({
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
    width: 200,
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
