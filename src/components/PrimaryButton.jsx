import { StyleSheet, Text, View, Pressable } from 'react-native';
import React from 'react';

export default function PrimaryButton({ content, whenPressed }) {
  return (
    <View style={styles.addButton}>
      <Pressable onPress={whenPressed}>
        <Text style={{ fontSize: 150, color: 'white' }}>{content}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  addButton: {
    position: 'absolute',
    bottom: -30,
  },
});
