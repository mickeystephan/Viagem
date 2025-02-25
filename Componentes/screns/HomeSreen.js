import React from "react";
import { ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';

export default function HomeScreen({navigation}){
   return(
    <ScrollView>
      <View>
        <Text>Explore your Dream</Text>
     <Ionicons name="cog" size={24} color="black" />
     <TextInput
      placeholder="Search"
      />
      <View>
        <Text>Places</Text>
        <ScrollView>
            <TouchableOpacity>
                <Image source={require('../../assets/varandinha.jpg')}/>
                <Text>Varandinha, Boa Vista</Text>
            </TouchableOpacity>
            <TouchableOpacity>
          <Image source={require('../../assets/tarrafal.jpg')} />
          <Text >Tarrafal, Santiago</Text>
        </TouchableOpacity>
        </ScrollView>
      </View>
      <Text >
        Enjoy the beautiful landscapes that the Cabo Verde islands offer in this vast Atlantic Ocean
      </Text>
      </View>
    </ScrollView>
   
   )
}