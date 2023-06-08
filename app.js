import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Button from "./components/Button";
import Output from "./components/TextOutput";
import Switchh from "./components/Switch";

export default App = () => {
    let [backColor, setBackColor] = useState('#FFC8BE')
    let [result, setResult] = useState("0")
    let [expression, setExpression] = useState("")
    let [operatorActive, setOperatorActive] = useState(false)
    let [hasFirstOperand, setHasFirstOperand] = useState(false)
    const getDarkModeValue = (data) => {
        darkMode = data;
        setBackColor(darkMode ? '#FFC8BE' : '#111111')
    }
    const numberButtonPressValue = (data) => {
        if (operatorActive) {
            result = "0"
            setOperatorActive(false)
            setHasFirstOperand(false)
        }
        switch (data) {
            case ".":
                if (!(result.includes("."))) {
                    setResult(result + data)
                }
                break;
            default:
                if (result == "0") {
                    setResult(data)
                }
                else {
                    setResult(result + data)
                }
        }
    }
    const operatorButtonPressValue = (data) => {
        switch (data) {
            case "+":
                if (expression.charAt(expression.length - 1) === "+" || expression.charAt(expression.length - 1) === "-"
                    || expression.charAt(expression.length - 1) === "*" || expression.charAt(expression.length - 1) === "/") {
                    if (hasFirstOperand) {
                        setExpression(expression.slice(0, -1) + "+")
                    }
                    else {
                        setExpression(expression + result + "+")
                        setHasFirstOperand(true)
                    }
                }
                else {
                    setExpression(expression + result + "+")
                    setHasFirstOperand(true)
                }
                setOperatorActive(true)
                break;
            case "-":
                if (expression.charAt(expression.length - 1) === "+" || expression.charAt(expression.length - 1) === "-"
                    || expression.charAt(expression.length - 1) === "*" || expression.charAt(expression.length - 1) === "/") {
                    if (hasFirstOperand) {
                        setExpression(expression.slice(0, -1) + "-")
                    }
                    else {
                        setExpression(expression + result + "-")
                        setHasFirstOperand(true)
                    }
                }
                else {
                    setExpression(expression + result + "-")
                    setHasFirstOperand(true)
                }
                setOperatorActive(true)
                break;
            case "x":
                if (expression.charAt(expression.length - 1) === "+" || expression.charAt(expression.length - 1) === "-"
                    || expression.charAt(expression.length - 1) === "*" || expression.charAt(expression.length - 1) === "/") {
                    if (hasFirstOperand) {
                        setExpression(expression.slice(0, -1) + "*")
                    }
                    else {
                        setExpression(expression + result + "*")
                        setHasFirstOperand(true)
                    }
                }
                else {
                    setExpression(expression + result + "*")
                    setHasFirstOperand(true)
                }
                setOperatorActive(true)
                break;
            case "÷":
                if (expression.charAt(expression.length - 1) === "+" || expression.charAt(expression.length - 1) === "-"
                    || expression.charAt(expression.length - 1) === "*" || expression.charAt(expression.length - 1) === "/") {
                    if (hasFirstOperand) {
                        setExpression(expression.slice(0, -1) + "/")
                    }
                    else {
                        setExpression(expression + result + "/")
                        setHasFirstOperand(true)
                    }
                }
                else {
                    setExpression(expression + result + "/")
                    setHasFirstOperand(true)
                }
                setOperatorActive(true)
                break;
            case "%":
                setResult((result * 0.01) + "")
                break;
            case "+/-":
                if (result.includes("-")) {
                    setResult(result.substring(1))
                }
                else {
                    setResult("-" + result)
                }
                break;
            case "=":
                setOperatorActive(false)
                setHasFirstOperand(false)
                setResult(eval(expression + result).toFixed(2) + "")
                setExpression("")
                console.log(expression)
                break;

            default:
                console.log()

        }

    }
    const extraButtonPressValue = (data) => {
        switch (data) {
            case "AC":
                setResult("0")
                setOperatorActive(false)
                setHasFirstOperand(false)
                setExpression("")
                break;

            default:
                if (result.length == 1) {
                    setResult("0")
                    setOperatorActive(false)
                    setHasFirstOperand(false)
                    setExpression("")
                }
                else {
                    setResult(result.slice(0, -1))
                }
        }
    }
    return (
        <SafeAreaView backgroundColor={backColor} flex={1} >
            <View style={{ flexDirection: 'row', justifyContent: 'flex-end', padding: 15 }}>
                <Switchh onChange={getDarkModeValue}></Switchh>
            </View>

            <View style={{ justifyContent: 'flex-end', flex: 1 }}>
                <View style={style.view2} >
                    <Output value={result}></Output>
                </View>
                <View style={style.view1} >
                    <Button tag={"<-"} onExtraButtonPress={extraButtonPressValue} color='#FF99C0' ></Button>
                    <Button tag={"AC"} onExtraButtonPress={extraButtonPressValue} color='#FF99C0' ></Button>
                    <Button tag={"+/-"} onOperatorButtonPress={operatorButtonPressValue} color='#FF99C0' ></Button>
                    <Button tag={"÷"} onOperatorButtonPress={operatorButtonPressValue} color='#FF99C0' ></Button>
                </View>
                <View style={style.view1} >
                    <Button tag={"7"} onNumberButtonPress={numberButtonPressValue} color='#FFA0A0' ></Button>
                    <Button tag={"8"} onNumberButtonPress={numberButtonPressValue} color='#9765FF' ></Button>
                    <Button tag={"9"} onNumberButtonPress={numberButtonPressValue} color='#9765FF' ></Button>
                    <Button tag={"x"} onOperatorButtonPress={operatorButtonPressValue} color='#FF99C0' ></Button>
                </View>
                <View style={style.view1} >
                    <Button tag={"4"} onNumberButtonPress={numberButtonPressValue} color='#FFA0A0' ></Button>
                    <Button tag={"5"} onNumberButtonPress={numberButtonPressValue} color='#9765FF' ></Button>
                    <Button tag={"6"} onNumberButtonPress={numberButtonPressValue} color='#9765FF' ></Button>
                    <Button tag={"-"} onOperatorButtonPress={operatorButtonPressValue} color='#FF99C0' ></Button>
                </View>
                <View style={style.view1} >
                    <Button tag={"1"} onNumberButtonPress={numberButtonPressValue} color='#FFA0A0' ></Button>
                    <Button tag={"2"} onNumberButtonPress={numberButtonPressValue} color='#9765FF' ></Button>
                    <Button tag={"3"} onNumberButtonPress={numberButtonPressValue} color='#9765FF' ></Button>
                    <Button tag={"+"} onOperatorButtonPress={operatorButtonPressValue} color='#FF99C0' ></Button>
                </View>
                <View style={style.view1} >
                    <Button tag={"0"} onNumberButtonPress={numberButtonPressValue} color='#FFA0A0' ></Button>
                    <Button tag={"."} onNumberButtonPress={numberButtonPressValue} color='#FFA0A0' ></Button>
                    <Button tag={"%"} onOperatorButtonPress={operatorButtonPressValue} color='#FFA0A0' ></Button>
                    <Button tag={"="} onOperatorButtonPress={operatorButtonPressValue} color='#FFFFFF' ></Button>
                </View>
            </View>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    view1: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        padding: 5,
        // margin: 10,
    },
    view2: {
        height: 80,
        padding: 15,
        margin: 10,
        backgroundColor: '#FFFFFF',
        alignItems: 'flex-end',
        borderRadius: 35

    }

})

