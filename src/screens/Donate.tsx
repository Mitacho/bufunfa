import React from "react";

import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  TouchableOpacity,
} from "react-native";

import Clipboard from "expo-clipboard";

let feedbackTimeout: NodeJS.Timeout;

export default function DonateScreen(): JSX.Element {
  const [ copied, setCopied ] = React.useState<boolean>(false);

  function copiedFeedback(): void {
    setCopied(true);

    feedbackTimeout = setTimeout(() => {
      setCopied(false);
    }, 3000);
  }

  function copyToClipboard(): void {
    Clipboard.setString("445e5708-c93c-4caa-9041-6a991aa918c8");

    copiedFeedback();
  }

  React.useEffect(() => {
    return () => clearTimeout(feedbackTimeout);
  }, []);

  return(
    <ScrollView style={styles.container}>
      <View style={styles.paddingView} />
      <Text style={styles.titleText}>Suporte o projeto</Text>
      <Text style={[ styles.text, { marginTop: 30 } ]}>
        Fazendo uma doação você me incentiva a melhorar este app cada vez mais! Doe através da chave Pix abaixo e, caso você queira, deixe na descrição da sua doação uma sujestão concisa sobre algum recurso que você acha que seria interessante se tivesse no app.
      </Text>
      <Text style={[ styles.text, { marginTop: 30 } ]}>
        Desde já lhe agradeço por isso!
      </Text>
      <Text style={[ styles.text, { marginTop: 30 } ]}>
        Chave Pix aleatória:
      </Text>
      <Text style={[ styles.text, { marginTop: 30, fontFamily: "Poppins-Medium" } ]}>
        445e5708-c93c-4caa-9041-6a991aa918c8
      </Text>
      <TouchableOpacity
        style={{ marginTop: 60 }}
        onPress={() => {
          copied
          ? {}
          : copyToClipboard()
        }}
      >
        <View style={[ styles.button, copied ? { backgroundColor: "#CFF4CF" } : { backgroundColor: "#E2D5FE" } ]}>
          <Text style={[ styles.text, { color: "#171717"} ]}>{copied ? "Chave Pix copiada !" : "Copiar chave Pix" }</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.paddingView} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,

    backgroundColor: "#ffffff",
  },

  titleText: {
    fontFamily: "Poppins-Medium",
    fontSize: 24,

    textAlignVertical: "center",

    color: "#050505"
  },

  text: {
    fontFamily: "Poppins-Regular",
    fontSize: 16,

    textAlignVertical: "center",

    color: "#050505"
  },
  
  button: {
    width: "100%",

    height: 60,

    borderRadius: 4,

    justifyContent: "center",
    alignItems: "center",
  },

  paddingView: {
    height: 45
  }
});