import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function App() {
  return (
    <View style={styles.app}>
      <Text>Hello World</Text>
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  app: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
