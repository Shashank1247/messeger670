const url = 'mongodb+srv://shashankg1219:YvQYnfXCYHd5luej@cluster0.wkgauw2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'; // Replace with your MongoDB URI
const express = require('express');
const bodyParser = require('body-parser');
const { MongoClient } = require('mongodb');
const cors = require('cors');
const app = express();

app.use(cors()); // Enable CORS for all routes
app.use(bodyParser.json());


const dbName = 'messageApp';
let db;

MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(client => {
        db = client.db(dbName);
        console.log(`Connected to database: ${dbName}`);
    })
    .catch(err => {
        console.error('Failed to connect to the database:', err);
        process.exit(1); // Exit the application if the database connection fails
    });

// Send Message API
app.post('/sendMessage', (req, res) => {
    const message = {
        sender: req.body.sender,
        recipient: req.body.recipient,
        text: req.body.message,
        timestamp: new Date()
    };
    db.collection('messages').insertOne(message)
        .then(result => {
            res.status(200).send({ success: 'Message sent', messageId: result.insertedId });
        })
        .catch(err => {
            console.error('Failed to send message:', err);
            res.status(500).send({ error: 'Failed to send message' });
        });
});

// Retrieve Messages API
app.get('/retrieveMessages', (req, res) => {
    const recipient = req.query.recipient;
    db.collection('messages').find({ recipient }).toArray()
        .then(messages => {
            res.status(200).send({ messages });
        })
        .catch(err => {
            console.error('Failed to retrieve messages:', err);
            res.status(500).send({ error: 'Failed to retrieve messages' });
        });
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
