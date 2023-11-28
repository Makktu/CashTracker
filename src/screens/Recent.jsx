import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import PrimaryButton from '../components/PrimaryButton';

import React from 'react';

export default function Recent() {
  return (
    <View style={styles.container}>
      <StatusBar style='light' />
      <Text>Recent</Text>
      <PrimaryButton
        content='+'
        whenPressed={() => console.log('pressed here too')}
      />
    </View>
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
