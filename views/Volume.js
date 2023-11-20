import {
  View,
  StyleSheet,
  ScrollView,
  Button as ButtonNative,
  Image,
  TouchableOpacity
} from "react-native";
import React, { useState } from "react";

import { useNavigation } from "@react-navigation/native";

import { RadioButton, Text, Button } from "react-native-paper";

export default function Volume() {
  const navigation = useNavigation();

  const navigateTo = () => {
    navigation.navigate('Weight');
  };

  const [value, setValue] = React.useState("");

  const items = [
    {
      title: "Envelope",
      desc: '00 x 00 cm',
      value: "1",
      icon: require("../assets/envelope.jpeg"),
    },
    {
      title: "Livro",
      value: "2",
      desc: '00 x 00 cm',
      icon: require("../assets/livro.jpg"),
    },
    {
      title: "Caixa de sapato",
      value: "3",
      desc: '00 x 00 cm',
      icon: require("../assets/sapato.png"),
    },
    {
      title: "Mochila",
      value: "4",
      desc: '00 x 00 cm',
      icon: require("../assets/mochila.png"),
    },
    {
      title: "Mala grande",
      value: "5",
      desc: '00 x 00 cm',
      icon: require("../assets/mala.png"),
    },
    {
      title: "Caixa grande",
      value: "6",
      desc: '00 x 00 cm',
      icon: require("../assets/caixa.png"),
    }
  ];

  const handleItemPress = (value) => {
    setValue(value);
  };

  return (
    <View>
      <View style={styles.titleBox}>
        <Text style={styles.text}>
          O volume que você pode deslocar tem tamanho similar a que?
        </Text>
      </View>
      <ScrollView>
        <Text style={[styles.bold, styles.subtitle]}>Transporte</Text>
        <RadioButton.Group
          onValueChange={(newValue) => setValue(newValue)}
          value={value}
        >
          {items.map((item, index) => (
            <TouchableOpacity
              key={item.value}
              style={styles.selectRadio}
              onPress={() => handleItemPress(item.value)}
            >
              <View style={styles.flex}>
                <Image
                  source={item.icon || require("../assets/favicon.png")}
                  style={styles.image}
                />
                <Text style={styles.bold}>{item.title}</Text>
              </View>
              <RadioButton value={item.value} />
            </TouchableOpacity>
          ))}
        </RadioButton.Group>
        <Button onPress={() => navigateTo()}
        ><Text style={styles.bold}> Pular etapa</Text>
        </Button>
        <Button
          style={styles.buttonBottom}
          mode="contained"
          disabled={!value}
          onPress={() => navigateTo()}
        >
          Avançar
        </Button>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  titleBox: {
    backgroundColor: "black",
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  text: {
    color: "white",
    fontSize: 20,
  },
  subtitle: {
    padding: 22
  },
  bold: {
    fontWeight: "700",
    color: 'black'
  },
  image: {
    width: 30,
    height: 30,
    resizeMode: "contain",
  },
  flex: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  selectRadio: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 5,
    paddingBottom: 20,
    borderBottomWidth: 2,
    borderBottomColor: "lightgrey",
  },
  buttonBottom: {
    borderRadius: 4,
    marginHorizontal: 20,
    marginBottom: 10,
    backgroundColor: "green",
    position: 'relative',
    height: 50,
    justifyContent: 'center'
  }
});
