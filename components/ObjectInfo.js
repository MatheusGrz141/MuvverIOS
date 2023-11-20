import {
  View,
  StyleSheet,
  Image,
} from "react-native";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/MaterialIcons";
import { Text } from "react-native-paper";

export default function TravelInfo({ travelInfo }) {
  const {
    dateBefore,
    cityStart,
    cityEnd,
    description,
    driverImage,
    driverName,
    profuctImage,
    rating,

  } = travelInfo;

  return (
    <View style={styles.container}>
      <View style={styles.infoObject}>
        <View style={styles.infoObject}>
          <View>
            <Image
              source={profuctImage || require("../assets/icon.png")}
              style={styles.imageLarge}
            />
          </View>


          <View style={styles.textFlexBetween}>
            {description && (
              <Text style={[styles.textTravel, styles.bold]}>{description} </Text>
            )}

            <Text style={styles.lightgray}>De :{cityStart}</Text>
            <Text style={styles.lightgray}>Para: {cityEnd}</Text>

          </View>

        </View>
        <View>
          <Text style={styles.lightgray}>Entrega para</Text>
          <Text style={styles.textTravel}>{dateBefore}</Text>
        </View>

      </View>
      <View style={styles.boxDriver}>
        <View>
          <Image
            source={driverImage || require("../assets/icon.png")}
            style={styles.image}
          />
        </View>
        <View>
          <Text>
            <Text style= { styles.textTravel}>{driverName}</Text> *{" "}
            <Text style={styles.textTravel}>
              {rating} <Icon name="star"></Icon>
            </Text>
          </Text>

        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    paddingVertical: 10,
    borderBottomWidth: 3,
    borderBottomColor: "lightgray",
  },
  scrollable: {
    backgroundColor: "white",
    paddingHorizontal: 20,
    marginTop: 10,
  },
  lightgray: {
    color: "lightgray",
  },
  textFlexBetween: {
    display: "flex",
    flexDirection: "collum",
    alignContent: "center",
    justifyContent: "space-between",
  },
  textTravel: {
    fontWeight:'700'
  },
  boxDriver: {
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    paddingVertical: 15,
    gap: 10,
  },
  infoObject: {
    display: "flex",
    flexDirection: 'row',
    justifyContent: "space-between",
    gap: 10,
  },
  menu: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    backgroundColor: "black",
    gap: 0,
  },
  image: {
    width: 30,
    height: 30,
  },
  imageLarge: {
    width: 90,
    height: 90,
  },
});
