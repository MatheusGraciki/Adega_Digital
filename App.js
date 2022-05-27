import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TelaCatalogo from './components/TelaCatalogo/index';
import TelaContato from './components/TelaContato/index';
import TelaInicial from './components/TelaInicial/index';

// Importando os Icones
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';





const Tabs= createBottomTabNavigator()
export default function App() {
  return (
    <NavigationContainer>
      <Tabs.Navigator
        screenOptions={{
          headerStyle:{
            backgroundColor: '#400303'
          },
          headerTitleStyle:{
            color:'#fff',
            fontWeight: 'bold'
          },
          headerTitleAlign:'center',

          tabBarStyle:{
            backgroundColor:"#fff"
          },
          tabBarLabelStyle:{
            fontSize:14,
            fontWeight:'bold'
          },
          tabBarActiveTintColor: '#fff',
          tabBarInactiveTintColor: '#ab887c',
          tabBarActiveBackgroundColor: '#400303'
          
        }}
      >
        <Tabs.Screen 
          name='Inicio' 
          component={TelaInicial}
          options={{
            tabBarIcon: ({color}) => (
              <Entypo name="home" size={24} color={color} />
            ),
          
          }}
        />
        <Tabs.Screen 
          name='Catálogo' 
          component={TelaCatalogo}
          options={{
            tabBarIcon: ({color}) => (
              <FontAwesome5 name="wine-bottle" size={24} color={color} />
            ),
          
          }}
        />
        <Tabs.Screen 
          name='Contato' 
          component={TelaContato}
          options={{
            tabBarIcon: ({color}) => (
              <AntDesign name="contacts" size={24} color={color} />
            ),
          
          }}
        />
      </Tabs.Navigator>
    </NavigationContainer>
    
    
  );
}


