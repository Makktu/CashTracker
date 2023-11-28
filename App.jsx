import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Recent from './src/screens/Recent';
import AllCash from './src/screens/AllCash';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={styles.universalScreenStyle}>
        <Tab.Screen name='Recent' component={Recent} />
        <Tab.Screen name='All Cash' component={AllCash} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  universalScreenStyle: {
    sceneContainerStyle: {
      backgroundColor: '#1c2697',
    },
    contentStyle: {
      backgroundColor: '#342d29',
    },

    headerStyle: {
      backgroundColor: '#1c2697',
      shadowColor: 'transparent', // iOS
      elevation: 0, // Android
      height: 90,
    },
    headerTitleStyle: {
      fontWeight: 'bold',
      color: 'white',
      fontSize: 22,
    },
    tabBarStyle: {
      backgroundColor: '#1c2697',
      fontSize: 30,
      borderTopWidth: 0,
      paddingTop: 10,
      height: 90,
    },
    tabBarActiveTintColor: '#0af531',
    tabBarInactiveTintColor: '#555555',
    tabBarLabelStyle: {
      fontSize: 20,
    },
    borderTopWidth: 0,
    drawerInactiveTintColor: 'orangered',
    drawerActiveTintColor: 'lightgreen',
    drawerActiveBackgroundColor: '#22223d',
  },
});
