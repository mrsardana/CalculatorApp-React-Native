import React from "react";
import { Text, StyleSheet } from "react-native";

const Output = (props) => {
    return (
        <Text style={styles.input} >{props.value}</Text>
    )

}
const styles = StyleSheet.create({
    input: {
        fontWeight: 'normal',
        fontSize: 36,
    },
});
export default Output;