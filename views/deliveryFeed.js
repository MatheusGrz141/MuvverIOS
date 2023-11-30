import {
  View,
  StyleSheet,
  ScrollView,
  Image,
  Button as ButtonNative,
} from "react-native";
import { Button, Text } from "react-native-paper";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialIcons";
import InfoTravel from "../components/InfoTravel";
import ObjectInfo from "../components/infoObject";
import Footer from "../components/Footer"

export default function Feed() {
  const navigation = useNavigation();
  const [isTravel, setIsTravel] = useState(true);
  const changeTo = (option) => {
    if (option != "objects") {
      setIsTravel(false);
      return;
    }
    setIsTravel(true);
  };
  const navigateTo = () => {
    navigation.navigate('SendDeliver');
  };
  const travels = [
    {
      id: 1,
      dateBefore: "Hoje (12/01)",
      dateAfter: "Amanha(13/01)",
      route: "Rio Brilhante para Dourados - MS",
      price: "R$ 150,00",
      description: "Passará por Nova Alvorada, Rio Brilhante e Parana",
      driverImage: require("../assets/profile (1).jpg"),
      driverName: "Amanda Lima",
      verified: true,
      rating: "4,97",
      deliveries: "575",
      vehicleType: "Carro",
    },
    {
      id: 2,
      dateBefore: "Hoje (12/01)",
      dateAfter: "Amanha(13/01)",
      route: "Rio Brilhante para Dourados - MS",
      price: "R$ 80,00",
      driverImage: require("../assets/profile (2).jpg"),
      driverName: "Pedro Arruda",
      verified: false,
      rating: "4,0",
      deliveries: "70",
      vehicleType: "Carro",
    },
    {
      id: 3,
      dateBefore: "Hoje (12/01)",
      dateAfter: "Amanha(13/01)",
      route: "Rio Brilhante para Dourados - MS",
      price: "R$ 100,00",
      driverImage: require("../assets/profile (3).jpg"),
      driverName: "Bruna silva",
      verified: false,
      rating: "4,99",
      deliveries: "349",
      vehicleType: "Avião",
    },
    {
      id: 4,
      dateBefore: "Hoje (12/01)",
      dateAfter: "Amanha(13/01)",
      route: "Rio Brilhante para Dourados - MS",
      price: "R$ 100,00",
      driverImage: require("../assets/profile (4).jpg"),
      driverName: "Carlos Moura",
      verified: true,
      rating: "5,0",
      deliveries: "1030",
      vehicleType: "Carro",
    }
  ];

  const objects = [
    {
      id: 1,
      dateBefore: '12-01-2019',
      cityStart: "Rio Brilhante- MS",
      cityEnd: "Dourados - MS",
      description: 'livro',
      driverImage: require("../assets/profile (1).jpg"),
      profuctImage: require("../assets/livro.png"),
      driverName: "Amanda Lima",
      rating: "4,97",
    },
    {
      id: 2,
      dateBefore: '12-01-2019',
      cityStart: "Rio Brilhante- MS",
      cityEnd: "Dourados - MS",
      description: 'livro',
      driverImage: require("../assets/profile (2).jpg"),
      profuctImage: require("../assets/livro.png"),
      driverName: "Pedro Arruda",
      rating: "5,00",
    },
  ];

  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <View style={styles.boxflex}>
          <Button
            icon={({ }) => (
              <Image
                source={require("../assets/profile (1).jpg")}
                style={styles.image}
              />
            )}
          ></Button>
          <Text style={styles.title}>Feed</Text>
        </View>
        <View style={styles.boxflex}>
          <Button
            icon={({ }) => (
              <Icon name="info-outline" size={30} color={"#ffffffff"} />
            )}
          ></Button>
          <Button
            icon={({ }) => (
              <Icon name="sort" size={30} color={"#ffffffff"} />
            )}
          ></Button>
        </View>
      </View>
      <View style={styles.menu}>
        <View style={[styles.action, isTravel ? styles.active : ""]}>
          <ButtonNative
            title="Viagens"
            color={"black"}
            accessibilityLabel="Botao Viagens"
            onPress={() => changeTo("objects")}
          />
        </View>
        <View style={[styles.action, !isTravel ? styles.active : ""]}>
          <ButtonNative
            title="Objetos"
            color={"black"}
            accessibilityLabel="Botao Objetos"
            onPress={() => changeTo("travels")}
          />
        </View>
      </View>
      <ScrollView style={styles.scrollable}>
        {isTravel &&
          travels.map((travel, index) => (
            <InfoTravel key={travel.id} infoTravel={travel} />
          ))}
        {!isTravel &&
          objects.map((object, index) => (
            <ObjectInfo key={object.id} objectInfo={object} />
          ))}
      </ScrollView>
      {isTravel && (
        <Button
          style={styles.buttonBottom}
          mode="contained"
          onPress={() => navigateTo()}
        >
          Vai viajar ou quer enviar?
        </Button>
      )}
      <View>
        <Footer></Footer>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    minHeight: '100%'
  },
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: "40",
    backgroundColor: "black",

    paddingTop: 20
  },
  action: {
    flex: 1,
    padding: 0,
    paddingBottom: 5
  },
  image: {
    width: 30,
    height: 30,
  },
  active: {
    borderBottomWidth: 3,
    borderBottomColor: "white",
  },
  title: {
    color: "white",
    padding: 5,
    fontSize: 22
  },
  scrollable: {
    backgroundColor: "white",
    paddingHorizontal: 20,
    position: "relative",
    marginBottom: 150,

  },
  fontBold: {
    fontWeight: "700",
    color: 'black'
  },
  boxflex: {
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
  },
  buttonBottom: {
    position: "absolute",
    justifyContent: 'center',
    alignItems: 'center',
    left: 0,
    right: 0,
    height: 50,
    bottom: 10,
    marginHorizontal: 20,
    fontWeight: 'bold',
    backgroundColor: "green",
    borderRadius: '50px',
    marginBottom: "70px"

  },
  textBetween: {
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "space-between",
  },
  driver: {
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
  footer: {
    backgroundColor: "black",
    position: "absolute",
    bottom: 0,
    width: '100%'

  }
});
