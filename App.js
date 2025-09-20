import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';

import ColorChangerApp from './ColorChangerApp';

const App = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ColorChangerApp />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingVertical: 20,
  },
});

export default App;
