import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
export default function App() {
  const [count, setCount] = useState(0);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello world!!! We are YA-NT2</Text>
      <Text style={styles.count}>{count}</Text>
      <Button title="Click me" onPress={() => setCount(count + 1)} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CCC',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  count: {
    fontSize: 50,
    fontWeight: 'bold',
  },
});
