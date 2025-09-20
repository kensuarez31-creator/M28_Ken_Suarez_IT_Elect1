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