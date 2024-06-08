import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, FlatList, Text } from 'react-native';

export default function ReceiverScreen() {
    const [recipient, setRecipient] = useState('');
    const [messages, setMessages] = useState([]);

    const retrieveMessages = () => {
        fetch(`http://192.168.1.154:3000/retrieveMessages?recipient=${recipient}`)
            .then(response => response.json())
            .then(data => {
                if (data.messages) {
                    setMessages(data.messages);
                } else {
                    alert('Failed to retrieve messages');
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert('Network request failed');
            });
    };

    return (
        <View style={styles.container}>
            <TextInput
                placeholder="Recipient"
                value={recipient}
                onChangeText={setRecipient}
                style={styles.input}
            />
            <Button title="Retrieve" onPress={retrieveMessages} />
            <FlatList
                data={messages}
                keyExtractor={(item) => item._id}
                renderItem={({ item }) => (
                    <View style={styles.messageContainer}>
                        <Text>{item.sender}: {item.text}</Text>
                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', padding: 20 },
    input: { height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, paddingHorizontal: 10 },
    messageContainer: { padding: 10, borderBottomColor: 'gray', borderBottomWidth: 1 }
});
