import React, { useContext, useMemo } from "react";
import { SafeAreaView, ScrollView, View } from "react-native";

import { InputField } from "@components/molecules";
import { ThemeContext } from "@styles/theme/context";
import themeConstants from "@styles/theme/constants";

import type { ScreenProps } from "@types";

export default function NewTransactionScreen({}: ScreenProps<"NewTransaction">): JSX.Element {
  const { theme } = useContext(ThemeContext);

  const INPUT_FIELD_STYLE = useMemo(
    () => ({
      marginTop: themeConstants.spacing.m,
    }),
    [],
  );

  return (
    <SafeAreaView
      style={[{ height: "100%", backgroundColor: theme.colors.background }]}>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        {/* TODO: convert to organism */}
        <View
          style={[
            {
              padding: themeConstants.spacing.m,
              justifyContent: "space-evenly",
            },
          ]}>
          <InputField label="Título" />
          <InputField
            {...INPUT_FIELD_STYLE}
            label="Descrição"
            multiline
            numberOfLines={4}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
