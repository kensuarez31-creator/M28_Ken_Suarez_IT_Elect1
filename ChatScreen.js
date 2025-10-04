import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  TextInput,
  TouchableOpacity,
  Text,
  Image,
  StyleSheet,
} from 'react-native';
import ChatBubble from './ChatBubble';

const myAvatar = require('./assets/ken.jpg');
const botAvatar = require('./assets/nina.jpeg');

export default function ChatScreen() {
  const [messages, setMessages] = useState([
    { id: '1', text: 'Goodnight', sender: 'bot', avatar: botAvatar },
    { id: '2', text: 'Hi there!', sender: 'me', avatar: myAvatar },
  ]);
  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (input.trim().length === 0) return;
    const newMessage = {
      id: Date.now().toString(),
      text: input,
      sender: 'me',
      avatar: myAvatar,
    };
    setMessages([newMessage, ...messages]);
    setInput('');
  };

  const renderItem = ({ item }) => (
    <View style={[styles.chatBubbleContainer, item.sender === 'me' ? styles.meBubble : styles.botBubble]}>
      <Image source={item.avatar} style={styles.avatar} />
      <ChatBubble text={item.text} isMe={item.sender === 'me'} />
    </View>
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        inverted
        contentContainerStyle={{ padding: 10 }}
      />
      <View
        style={{
          flexDirection: 'row',
          padding: 10,
          borderTopWidth: 1,
          borderColor: '#ddd',
        }}
      >
        <TextInput
          value={input}
          onChangeText={setInput}
          placeholder="Type a message"
          style={{
            flex: 1,
            borderWidth: 1,
            borderColor: '#ccc',
            borderRadius: 20,
            paddingHorizontal: 15,
          }}
        />
        <TouchableOpacity
          onPress={sendMessage}
          style={{
            marginLeft: 10,
            backgroundColor: '#0078fe',
            paddingHorizontal: 20,
            borderRadius: 20,
            justifyContent: 'center',
          }}
        >
          <Text style={{ color: 'white' }}>Send</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  chatBubbleContainer: {
    flexDirection: 'row',
    marginVertical: 5,
    alignItems: 'flex-start',
  },
  meBubble: {
    justifyContent: 'flex-end',
  },
  botBubble: {
    justifyContent: 'flex-start',
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginHorizontal: 8,
  },
});
