# Messaging Application

## App Title: Messaging Application
### Team Members:
- Member 1: Shashank (sg3832)
- Member 2: Rishab (RP946)

## Introduction
This is a messaging application that allows users to send and receive messages. The app integrates a React Native front-end with a Node.js backend, and uses MongoDB for data storage. This application demonstrates the use of server APIs for data interaction, and optionally integrates a NoSQL database (MongoDB) for storing and retrieving messages.

## Front-end
### Overview
The front-end of this application is built using React Native and includes two main screens: SenderScreen and ReceiverScreen. Users can navigate between these screens using a bottom tab navigator.

### Screens
1. **Sender Screen**: Allows users to input a sender username, recipient username, and a message. Users can then send the message by pressing the "Send" button.


![Alt text](<Screenshot 2024-06-07 at 9.44.12 PM.png>)

2. **Receiver Screen**: Allows users to input a recipient username and retrieve all messages sent to that recipient by pressing the "Retrieve" button. The retrieved messages are displayed in a list.

![Alt text](<Screenshot 2024-06-07 at 9.45.12 PM.png>)

### Navigation
The app uses a bottom tab navigator to switch between the SenderScreen and ReceiverScreen.

[Alt text](<Screenshot 2024-06-07 at 9.45.57 PM.png>)

## Server APIs
### Overview
The backend is built using Node.js and Express. It provides two main APIs for sending and retrieving messages, and optionally includes an API for updating messages. The data is stored in a MongoDB database.

### Endpoints
1. **Send Message**
   - **Endpoint**: `/sendMessage`
   - **Method**: POST
   - **Parameters**:
     - `sender` (string): The username of the sender.
     - `recipient` (string): The username of the recipient.
     - `text` (string): The message text.
   - **Example Request**:
     ```json
     {
       "sender": "user1",
       "recipient": "user2",
       "text": "Hello, user2!"
     }
     ```
   - **Example Response**:
     ```json
     {
       "success": "Message sent",
       "messageId": "60f7c9d9c2c6b58e2f4b4e23"
     }
     ```

2. **Retrieve Messages**
   - **Endpoint**: `/retrieveMessages`
   - **Method**: GET
   - **Parameters**: `recipient` (string)
   - **Example Request**: `GET /retrieveMessages?recipient=user2`
   - **Example Response**:
     ```json
     {
       "messages": [
         {
           "sender": "user1",
           "recipient": "user2",
           "text": "Hello, user2!",
           "timestamp": "2021-07-21T12:34:56.789Z"
         },
         {
           "sender": "user3",
           "recipient": "user2",
           "text": "Hi there!",
           "timestamp": "2021-07-22T09:21:45.123Z"
         }
       ]
     }
     ```


## Database Schema
### Collection: messages
- **sender**: String - The username of the sender
- **recipient**: String - The username of the recipient
- **text**: String - The message text
- **timestamp**: Date - The time the message was sent

## Project Setup
### Prerequisites
- Node.js
- MongoDB