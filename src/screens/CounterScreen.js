import React, { useReducer } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const reducer = (state, action) => {
  switch (action.type) {
    case "counter_increase":
      return { ...state, counter: state.counter + action.payload };

    case "counter_decrease":
      return state.counter - action.payload < 0
        ? state
        : { ...state, counter: state.counter - action.payload };

    default:
      return state;
  }
};

const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, { counter: 0 });
  const { counter } = state;
  return (
    <View>
      <Button
        title="Increase"
        onPress={() => dispatch({ type: "counter_increase", payload: 1 })}
      />
      <Button
        title="Decrease"
        onPress={() => dispatch({ type: "counter_decrease", payload: 1 })}
      />
      <Text>Current Count: {counter}</Text>
    </View>
  );
};

export default CounterScreen;

const styles = StyleSheet.create({});
