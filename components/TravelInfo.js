import {
  View,
  StyleSheet,
  Image,
  Button as ButtonNative,
} from "react-native";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/MaterialIcons";
import { Button, TextInput, Text, Avatar } from "react-native-paper";

export default function TravelInfo({ travelInfo }) {
  const {
    dateBefore,
    dateAfter,
    route,
    price,
    description,
    driverImage,
    driverName,
    rating,
    verified = false,
    deliveries,
    vehicleType,
  } = travelInfo;

  return (
    <View style={styles.container}>
      <View style={styles.infoTravel}>
        {dateBefore &&
          dateAfter && (
            <View style={styles.textFlexBetween}>
              <Text>
                <Text style={styles.textTravel}>{dateBefore}</Text> -{" "}
                <Text style={styles.textTravel}>{dateAfter}</Text>
              </Text>
              <Text style={styles.lightgray}>Mínimo</Text>
            </View>
          )}
        <View style={styles.textFlexBetween}>
          <Text style={styles.lightgray}>{route}</Text>
          <Text style={styles.textTravel}>{price}</Text>
        </View>
        {description && (
          <Text
            style={[styles.textTravel, styles.lightgray]}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            {description}
          </Text>
        )}
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
            <Text style={styles.textTravel}>{driverName}</Text> °{" "}
            <Text style={styles.textTravel}>
              {rating} <Icon name="star"></Icon>
            </Text>
          </Text>
          <Text style={styles.lightgray}>
            {verified && <Text style={styles.lightgray}>Verificado ° </Text>}
            <Text style={styles.lightgray}>{deliveries} entregas</Text> °{" "}
            <Text style={styles.lightgray}>{vehicleType}</Text>
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
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "space-between",
  },
  textTravel: {
    fontWeight: '700'
  },
  boxDriver: {
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    paddingVertical: 15,
    gap: 10,
  },
  infoTravel: {
    display: "flex",
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
});
