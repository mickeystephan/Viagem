import React, { useState, useEffect } from "react";
import {  View,  } from "react-native";
import Login from "./Componentes/Login/Login";
import RegisterScreen from "./Componentes/screns/RegisterScreen";
import HomeScreen from "./Componentes/screns/HomeSreen";

export default function App() {
  const [currentScreen, setCurrentScreen] = useState("login");
  const [isLoading, setIsLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    
    (setupDatabase = async () => {
      try {
        initDatabase();
        setIsLoading(false);
      } catch (error) {
        console.error("Error initializing database:", error);
        setIsLoading(false);
      }
    }),
      setupDatabase();
  }, []);

  handleLogin = (user) => {
    setCurrentScreen("home");
    setCurrentUser(user);
  };

  handleLogout = () => {
    setCurrentScreen("login");
    setCurrentUser(null);
  };

  navigateToRegister = () => {
    setCurrentScreen("register");
  };

  navigateToLogin = () => {
    currentScreen("login");
  };

  return (
    <View>
      {currentScreen === "login" && (
        <Login
          onLogin={handleLogin}
          navigateToRegister={navigateToRegister}
        />
      )}
      {currentScreen === "register" && (
        <RegisterScreen onLogin={navigateToLogin} />
      )}
      {currentScreen === "home" && (
        <HomeScreen user={currentUser} onLogout={handleLogout} />
      )}
    </View>
  );
}
