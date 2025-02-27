import React, { useState } from "react";
import { userOperation } from "../../Database/db";
import { Button, TextInput, View } from "react-native";


export default function RegisterScreen() {
    const [user , setuser] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleRegister = async () => {
    if (!user || !password || !confirmPassword) {
      alert("Preencha todos os campos");
      return;
    }

    if (password !== confirmPassword) {
      alert("As senhas diferentes");
      return;
    }

    setIsLoading(true);

    try {
     
      const existingUser = await userOperation.findByUser(user);
      if (existingUser) {
        alert("Usuário já existe");
        return;
      }

      await userOperation.register(user, password);
      Alert.alert("Usuário registrado com sucesso", [
        { text: "OK", onPress: navigateToLogin },
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
    <View>
        <Text>Register</Text>
        <TextInput
          placeholder="User"
          value={user}
          onChangeText={setuser}
        />
        <TextInput 
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
        />
         <TextInput 
          placeholder="Password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
        <Button title="Register"
         onPress={handleRegister}
         />
        <TouchableOpacity onPress={navigateToLogin}>
           <Text>Already have an account? Login</Text>
        </TouchableOpacity>
    </View>
  )
}

