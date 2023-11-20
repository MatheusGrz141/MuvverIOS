import {
  View,
  StyleSheet,
} from "react-native";
import React from "react";
import {  Text } from "react-native-paper";

import Card from "../components/Card";
// import { useNavigation } from "@react-navigation/native";

export default function Feed({ onPressAdd }) {


  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <Text style={styles.title}>
          Facilitando seus <Text style={styles.bold}>Envios</Text>
        </Text>
        <Text style={[styles.title, styles.lightgray]}>Entregue ou envie</Text>
      </View>
      <View style={styles.actions}>
        <Card
          infos={{
            title: "Remetente",
            desc: "Pra onde quer enviar seu objeto?",
            image: require("../assets/Box.png"),
          }}
        />
         <Card
          infos={{
            title: "Viajante",
            desc: "Vai viajar pra onde?",
            image: require("../assets/entergwe.png"),
          }}
          goTo={"Transports"}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  actions: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 20,
    textAlign: "center",
  },
  bold: {
    fontWeight: "700",
    color:'black'
  },
  lightgray: {
    color: "lightgray",
    marginTop: 10
  },
  info: {
    marginBottom: 20,
  },
});
