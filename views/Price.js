import React, { useState } from "react";
import { View, StyleSheet, ScrollView, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native-paper";
import Slider from "@react-native-community/slider";

export default function Price() {
  const navigation = useNavigation();
  const navigateTo = () => {
    navigation.navigate("CreatedTravel");
  };

  const [value, setValue] = useState(100);
  const handleValue = (text) => {
    const cleanedText = text.replace(/[^0-9]/g, "");
    setValue(cleanedText);
  };

  const [sliderValue, setSliderValue] = useState(0);
  const onValueChange = (value) => {
    setSliderValue(value);
  };

  return (
    <View style={styles.main}>
      <View style={styles.titleBox}>
        <Text style={styles.text}>
          Definir um preço mínimo do deslocamento?
        </Text>
      </View>
      <ScrollView>
        <Text style={[styles.bold, styles.subtitle]}>Preço de entrega</Text>
        <Text style={[styles.textCenter, styles.lightGrey]}>Valor sugerido</Text>
        <View style={styles.inputText}>

          <Slider
            style={styles.slider}
            minimumValue={0}
            maximumValue={250}
            minimumTrackTintColor="#000000"
            maximumTrackTintColor="#ffffff"
            thumbTintColor="#000000"
            value={sliderValue}
            onValueChange={onValueChange}
          />
        </View>
        <Text style={[styles.textCenter]}>R$ {parseInt(sliderValue) || 0}</Text>
        <View>
          <Text style={[styles.paddingText, styles.textCenter, styles.lightGrey]}>
            Troque o valor acima, para um preço mais específico
          </Text>
        </View>
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
  main: {
    width: "100%",
    height: '100%'
  },
  slider: {
    color: 'black'
  },
  titleBox: {
    backgroundColor: "black",
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  text: {
    color: "white",
    fontSize: 19,
    width: "100%",
    textAlign: "center",
  },
  subtitle: {
    padding: 22,
    fontSize: 20
  },
  bold: {
    fontWeight: "700",
    color: "black",
  },
  lightGrey: {
    color: "lightgrey",
  },
  paddingText: {
    padding: 20,
  },
  textCenter: {
    textAlign: "center",
  },
  inputText: {
    marginHorizontal: 20,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  buttonBottom: {
    borderRadius: 4,
    marginHorizontal: 20,
    marginBottom: 10,
    backgroundColor: "green",
    position: 'relative',
    top: 420,
    height: 50,
    justifyContent: 'center'
  },
});
