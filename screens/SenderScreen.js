import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';

export default function SenderScreen() {
    const [sender, setSender] = useState('');
    const [recipient, setRecipient] = useState('');
    const [message, setMessage] = useState('');

    const sendMessage = () => {
        fetch('http://192.168.1.154:3000/sendMessage', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ sender, recipient, message })
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                Alert.alert('Success', 'Message sent successfully');
            } else {
                alert('Failed to send message');
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
                placeholder="Sender"
                value={sender}
                onChangeText={setSender}
                style={styles.input}
            />
            <TextInput
                placeholder="Recipient"
                value={recipient}
                onChangeText={setRecipient}
                style={styles.input}
            />
            <TextInput
                placeholder="Message"
                value={message}
                onChangeText={setMessage}
                style={styles.input}
            />
            <Button title="Send" onPress={sendMessage} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', padding: 20 },
    input: { height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, paddingHorizontal: 10 }
});
