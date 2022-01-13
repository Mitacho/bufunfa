import React, { memo, useRef, useState, useCallback, useContext } from "react";
import { StyleSheet, TextInput } from "react-native";

import { ThemeContext } from "@styles/theme/context";

type Props = {};

function Input(props: Props): JSX.Element {
  const { theme } = useContext(ThemeContext);
  const [text, setText] = useState("");

  const renders = useRef<number>(0);

  console.log(renders.current++);

  const handleChangeText = useCallback(text => setText(text), []);

  return (
    <TextInput
      style={[
        styles.text,
        styles.input,
        {
          backgroundColor: theme.colors.input,
          color: theme.colors.textInput,
          fontSize: theme.fontSize.m,
        },
      ]}
      value={text}
      onChangeText={handleChangeText}
    />
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: "Poppins",
    textAlignVertical: "center",
  },
  input: {
    width: "100%",
    height: 60,
    borderRadius: 4,
  },
});

export default memo(Input);
