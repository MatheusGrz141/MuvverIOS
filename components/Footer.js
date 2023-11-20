import { Image, Text, StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import { View } from "react-native-web";

const valuButtons = [
  {
    id: 1,
    backImg: require('../assets/inicio.png'),
    selected: true,
    text: 'Inicio'
  },
  {
    id: 2,
    backImg: require('../assets/notificacao.png'),
    selected: false,
    text: 'Notificações'
  },
  {
    id: 3,
    backImg: require('../assets/chat.png'),
    selected: false,
    text: 'Chat'
  },
  {
    id: 4,
    backImg: require('../assets/pedido.png'),
    selected: false,
    text: 'Pedidos'
  },
  {
    id: 5,
    backImg: require('../assets/entrega.png'),
    selected: false,
    text: 'Entregas'
  }
];

export default function Footer() {
  return (
    <View style={styles.container} >

      {valuButtons.map((button) => (
        <Button style={styles.button} key={button.id}>
          <Image style={styles.images} source={button.backImg} />
          <Text style={styles.textTravel}>{button.text}</Text>
        </Button>
      ))}

    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    bottom: '0',
    position: 'absolute',
    display: "flex",
    flexDirection: 'row',
    backgroundColor: '#e3e3e3',
    width: '100%',
    height: '70px'

  },
  button: {
    display: 'flex',
    flexDirection: 'colllun',
    justifyContent: "center",
    alignContent: "center",
  },
  images: {
    display: 'flex',
    width: '30px',
    height: '30px',
    alignItems: 'center',
    margin: 'auto'
  },
  textTravel: {
    fontWeight: '700',
    color: 'black'
  },


})