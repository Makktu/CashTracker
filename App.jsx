import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Tab.Navigator>
      <View style={styles.container}>
        <Text style={{ color: 'white', fontSize: 20, padding: 20 }}>
          Open up App.js to start working on your app!
        </Text>
        <StatusBar style='light' />
      </View>
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2521FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
