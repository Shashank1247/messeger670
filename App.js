import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SenderScreen from './screens/SenderScreen';
import ReceiverScreen from './screens/ReceiverScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ color, size }) => {
                        let iconName;
                        if (route.name === 'Sender') {
                            iconName = 'send-outline';
                        } else if (route.name === 'Receiver') {
                            iconName = 'file-tray-full-outline'; // Updated to a valid Ionicon
                        }
                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                })}
                tabBarOptions={{
                    activeTintColor: 'tomato',
                    inactiveTintColor: 'gray',
                }}
            >
                <Tab.Screen name="Sender" component={SenderScreen} />
                <Tab.Screen name="Receiver" component={ReceiverScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
