import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Produtos from './Produtos';
import Categorias from './Categorias';

const Tab = createBottomTabNavigator();

export default function Principal() {
    return (
        <Tab.Navigator
            initialRouteName="Produtos"
            tabBarOptions={{
                activeTintColor: '#dc143c',
            }}
        >
            <Tab.Screen
                name="Produtos"
                component={Produtos}
                options={{
                    tabBarLabel: 'Produtos',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Categorias"
                component={Categorias}
                options={{
                    tabBarLabel: 'Categorias',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="chevron-up-box" color={color} size={size} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}
