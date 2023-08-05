import React from 'react';
import { View, StyleSheet } from 'react-native';
import CovidUpdate from './Component/CovidUpdate';


const App = () => {
  return (
    <View style={styles.container}>
      <CovidUpdate/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;

