import React from "react";
import { ScrollView, Text, TextInput, TouchableOpacity, View , Image, StyleSheet} from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';

export default function HomeScreen({user, onLogout}){
 
   return(
    <ScrollView >
      <View style={styles.container}>
        <View style={styles.header}>
        <Text style={styles.title}>Explore your Dream</Text>
        <Ionicons name="cog" size={28} color="black" />
      </View>

      <TextInput style={styles.searchBox} placeholder="Search" />

      <View style={styles.placesContainer}>
        <Text style={styles.placesTitle}>Places</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollContainer}>
          <TouchableOpacity style={styles.placeCard}>
            <Image source={require('../../assets/varandinha.jpg')} style={styles.placeImage} />
            <Text style={styles.placeText}>Varandinha, Boa Vista</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.placeCard}>
            <Image source={require('../../assets/tarrafal.jpg')} style={styles.placeImage} />
            <Text style={styles.placeText}>Tarrafal, Santiago</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
      <Text style={styles.description}>
        Enjoy the beautiful landscapes that the Cabo Verde islands offer in this vast Atlantic Ocean.
      </Text>
      </View>
      
    </ScrollView>
   )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 20,
    marginTop: 100,
    width: '100%',
    height: '100%',
  },
 header: {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: 20,
  gap: 100,
  
 },
 title: {
  fontFamily: 25,
 }

})
