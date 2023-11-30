import {
  View,
  StyleSheet,
  ScrollView,
  Button as ButtonNative,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { } from "react";

import { useNavigation } from "@react-navigation/native";

import { RadioButton, Text, Button } from "react-native-paper";

export default function Transports() {
  const navigation = useNavigation();

  const navigateTo = () => {
    navigation.navigate("Route");
  };

  const [value, setValue] = React.useState();

  const items = [
    {
      title: "Carro",
      value: "1",
      icon: require("../assets/car.png"),
    },
    {
      title: "Avião",
      value: "2",
      icon: require("../assets/planebeter.png"),
    },
    {
      title: "Caminhão",
      value: "3",
      icon: require("../assets/caminhao.jpeg"),
    },
    {
      title: "Van",
      value: "4",
      icon: require("../assets/van.png"),
    },
    {
      title: "Moto",
      value: "5",
      icon: require("../assets/moto.png"),
    },
    {
      title: "Bicicleta",
      value: "6",
      icon: require("../assets/bicicl.png"),
    },
    {
      title: "Trem",
      value: "7",
      icon: require("../assets/trem.png"),
    },
    {
      title: "Onibus",
      value: "8",
      icon: require("../assets/bus.png"),
    },
    {
      title: "Embarcação",
      value: "9",
      icon: require("../assets/barco.png"),
    }
  ];

  const handleItemPress = (value) => {
    setValue(value);
  };

  return (
    <View style={styles.main}>
      <View style={styles.titleHeader}>
        <Text style={styles.text}>
          Qual será o meio de transporte da sua viagem?
        </Text>
      </View>
      <ScrollView>
        <Text style={[styles.bold, styles.subtitle]}>Transporte</Text>
        <RadioButton.Group
          style={styles.RadioButton}
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
              <RadioButton style={styles.radioButton} value={item.value} />
            </TouchableOpacity>
          ))}
        </RadioButton.Group>
        <Button
          style={[styles.buttonBottom, value ? styles.buttonBottomGreen : '']}
          mode="contained"
          disabled={!value}
          onPress={() => navigateTo()}
        >
          Avançar
        </Button>
      </ScrollView>
    </View >
  );
}

const styles = StyleSheet.create({
  titleHeader: {
    backgroundColor: "black",
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  main: {
    height: '100%'
  },
  RadioButton: {
    height: '100%'
  },
  text: {
    color: "white",
    fontSize: 20,
  },
  subtitle: {
    padding: 22,
  },
  bold: {
    fontWeight: "700",
    color: 'black'
  },
  image: {
    width: 90,
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
    paddingBottom: 20,
    paddingTop: 5,
    borderBottomWidth: 2,
    borderBottomColor: "lightgrey",
  },
  buttonBottom: {
    position: "absolute",
    width: '90%',
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    top: 650,
    marginHorizontal: 20,
    fontWeight: "bold",
  },
  buttonBottomGreen: {
    backgroundColor: 'green'
  }
});
