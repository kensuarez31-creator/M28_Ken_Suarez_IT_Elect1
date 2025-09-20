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

conststyles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 10,
  },
});

