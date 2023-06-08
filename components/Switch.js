import React, { useState } from "react";
import { Switch } from "react-native";

const Switchh = (props) => {
    const [isEnabled, setIsEnabled] = useState(false);

    return (
        <Switch value={isEnabled} onValueChange={() => {
            setIsEnabled(!isEnabled)
            props.onChange(isEnabled)
        }}
            trackColor={{ false: '#FFC8BE', true: '#000000' }}
            thumbColor={isEnabled ? '#FFC8BE' : '#000000'}
        ></Switch>
    )
}

export default Switchh;