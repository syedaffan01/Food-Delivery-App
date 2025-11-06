import React from 'react';
import {Redirect, Slot} from "expo-router"
import { View, Text } from 'react-native';

export default function _Layout() {
    const isAuthenticated = false;

    if(!isAuthenticated) return <Redirect href="/sign-in" />

    return <Slot />
}



