import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';

import ListaPetsScreen from './screens/ListaPetsScreen';
import DetalhesPetScreen from './screens/DetalhesPetScreen';
import CadastroScreen from './screens/CadastroScreen';
import SobreScreen from './screens/SobreScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function AdocaoStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ListaPets" component={ListaPetsScreen} options={{ title: 'Pets para Adoção' }} />
      <Stack.Screen name="DetalhesPet" component={DetalhesPetScreen} options={{ title: 'Detalhes do Pet' }} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === 'Adoção') iconName = 'paw';
            else if (route.name === 'Cadastrar') iconName = 'add-circle';
            else if (route.name === 'Sobre') iconName = 'information-circle';
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#ff6600',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Adoção" component={AdocaoStack} />
        <Tab.Screen name="Cadastrar" component={CadastroScreen} />
        <Tab.Screen name="Sobre" component={SobreScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
