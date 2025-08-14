import React from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';

import ChatScreen from './ChatScreen';
import Comment from './Comment';
import CounterApp from './CounterApp';
import ColorChangerApp from './ColorChangerApp';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1, padding: 16 }}>
        
        <View style={{ marginBottom: 20 }}>
          <Comment />
        </View>

        <View style={{ marginBottom: 20 }}>
          <ChatScreen />
        </View>

        <View style={{ marginBottom: 20 }}>
          <CounterApp />
        </View>

        <View style={{ marginBottom: 20 }}>
          <ColorChangerApp />
        </View>
import React from "react";
import { SafeAreaView, ScrollView, View, StyleSheet } from "react-native";
import ChatScreen from "./ChatScreen";
import Comment from "./Comment";
import ColorChangerApp from "./ColorChangerApp";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Chat + Comments */}
        <Comment />
        <ChatScreen />

        {/* Color Changer */}
        <ColorChangerApp />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 10,
  },
});
<<<<<<< HEAD
import React from "react";
import ChatScreen from "./ChatScreen";
import Comment from "./Comment";
import { SafeAreaView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Comment />
      <ChatScreen />
    </SafeAreaView>
    );
}
=======
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
>>>>>>> 08071db (ColorChangerApp)
