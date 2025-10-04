import React, { useState } from "react";
import { View, Text, FlatList, TextInput, TouchableOpacity, Image, StyleSheet } from "react-native";

const myAvatar = require('./assets/ken.jpg');

export default function CommentSection() {
  const [comments, setComments] = useState([
    { id: "1", text: "Maayong gabie", avatar: myAvatar, timestamp: new Date(), },
    { id: "2", text: "Kung ako nalang diay?", avatar: myAvatar, timestamp: new Date(), },
  ]);
  const [newComment, setNewComment] = useState("");

  const addComment = () => {
    if (newComment.trim().length === 0) return;
    setComments([
      ...comments,
      { id: Date.now().toString(), text: newComment, avatar: myAvatar, timestamp: new Date(), },
    ]);
    setNewComment("");
  };

  const renderItem = ({ item }) => (
    <View style={styles.commentBox}>
      <Image source={item.avatar} style={styles.avatar} />
      <View>
        <Text style={styles.commentText}>{item.text}</Text>
        <Text style={styles.timestamp}>{formatTime(item.timestamp)}</Text>
      </View>
      <TouchableOpacity style={styles.replyBtn}>
        <Text style={styles.replyText}>Reply</Text>
      </TouchableOpacity>
    </View>
  );

  const formatTime = (timestamp) => {
    const date = new Date(timestamp);
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={comments}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />

      <View style={styles.inputRow}>
        <TextInput
          style={styles.input}
          placeholder="Write a comment..."
          value={newComment}
          onChangeText={setNewComment}
        />
        <TouchableOpacity style={styles.sendBtn} onPress={addComment}>
          <Text style={styles.sendText}>Comment</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10, backgroundColor: "#fff" },
  commentBox: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    backgroundColor: "#f2f2f2",
    padding: 10,
    borderRadius: 10,
    marginBottom: 8,
  },
  commentText: { fontSize: 16, color: "#333", marginHorizontal: 8, },
  replyBtn: { paddingLeft: 10 },
  replyText: { color: "#007bff", fontWeight: "500" },
  inputRow: {
    flexDirection: "row",
    marginTop: 10,
    borderTopWidth: 1,
    borderTopColor: "#ddd",
    paddingTop: 10,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 20,
    paddingHorizontal: 15,
  },
  sendBtn: {
    marginLeft: 10,
    backgroundColor: "#007bff",
    paddingHorizontal: 15,
    justifyContent: "center",
    borderRadius: 20,
  },
  sendText: { color: "#fff", fontWeight: "600" },
   avatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  timestamp: {
    fontSize: 12,
    color: '#888',
    marginLeft: 8,
  }

});
