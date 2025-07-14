import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import Colors from '../app/Colors'; // adjust the path based on where Colors.js is


type ButtonProps = {
    title : string,
    onPress : ()=> void;
}

export default function PrimaryButton({ title, onPress } : ButtonProps) {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: Colors.primary,
        paddingVertical: 16,
        paddingHorizontal: 20,
        borderRadius: 15,
        alignItems: "center",
        width: '100%'
    },
    text: {
        color: Colors.white,
        fontSize: 18,
        fontWeight: 'bold'
    }
})
