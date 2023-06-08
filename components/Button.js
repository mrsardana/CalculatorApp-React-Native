import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const Button = (props) => {
    const buttonPress = () => {
        if (props.tag == "0" || props.tag == "1" || props.tag == "2" || props.tag == "3" || props.tag == "4" || props.tag == "5" ||
            props.tag == "6" || props.tag == "7" || props.tag == "8" || props.tag == "9" || props.tag == ".") {
            props.onNumberButtonPress(props.tag)
        }
        else if (props.tag == "=" || props.tag == "÷" || props.tag == "+" || props.tag == "-" || props.tag == "%" || props.tag == "x" || props.tag == "+/-") {
            props.onOperatorButtonPress(props.tag)
        }
        else {
            props.onExtraButtonPress(props.tag)
        }
    }
    return (
        <TouchableOpacity style={{
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 100,
            backgroundColor: props.color,
            width: 75,
            height: 75,
        }} onPress={buttonPress}>
            <Text style={styles.buttonText}>{props.tag}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create(
    {
        button: {
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 100,
            // backgroundColor: '#FF99C0',
            width: 75,
            height: 75,
        },

        buttonText: {
            fontWeight: 'bold',
            fontSize: 22,


        }
    }
)
export default Button;