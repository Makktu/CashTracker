import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import PrimaryButton from '../components/PrimaryButton';

export default function AllCash() {
  const addNewExpenseHandler = () => {
    console.log('pressed');
  };

  return (
    <View style={styles.container}>
      <PrimaryButton content='+' whenPressed={addNewExpenseHandler} />
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
