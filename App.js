import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import deliveryFeed from "./views/deliveryFeed";
import deliveryVehicles from "./views/deliveryVehicles";
import deliverySize from "./views/deliverySize";
import deliveryWeight from "./views/deliveryWeight";
import deliveryPrice from "./views/deliveryPrice";
import deliveryPath from "./views/deliveryPath";
import sendOrTravel from "./views/sendOrTravel";
import CreatedTravel from "./views/CreatedTravel";
import Close from "./components/Close";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen
          name="Feed"
          component={deliveryFeed}
          options={{ headerShown: false, }}
        />
        <Stack.Screen
          name="SendDeliver"
          component={sendOrTravel}
          options={{ title: "muvver" }}
        />
        <Stack.Screen
          name="Transports"
          component={deliveryVehicles}
          options={{
            title: "Ser um Muvver",
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: "black",
              borderBottomWidth: 0,
            },
            headerTintColor: "lightgrey",
            headerLeft: () => <Close goTo="SendDeliver" />,
          }}
        />

        <Stack.Screen
          name="CreatedTravel"
          component={CreatedTravel}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Route"
          component={deliveryPath}
          options={{
            title: "Ser um Muvver",
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: "black",
              borderBottomWidth: 0,
            },
            headerTintColor: "lightgrey",
            headerRight: () => <Close goTo="Feed" />,
          }}
        />

        <Stack.Screen
          name="Volume"
          component={deliverySize}
          options={{
            title: "Ser um Muvver",
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: "black",
              borderBottomWidth: 0,
            },
            headerTintColor: "lightgrey",
            headerRight: () => <Close goTo="SendDeliver" />,
          }}
        />
        <Stack.Screen
          name="Price"
          component={deliveryPrice}
          options={{
            title: "Ser um Muvver",
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: "black",
              borderBottomWidth: 0,
            },
            headerTintColor: "lightgrey",
            headerRight: () => <Close goTo="SendDeliver" />,
          }}
        />
        <Stack.Screen
          name="Weight"
          component={deliveryWeight}
          options={{
            title: "Ser um Muvver",
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: "black",
              borderBottomWidth: 0,
            },
            headerTintColor: "lightgrey",
            headerRight: () => <Close goTo="SendDeliver" />,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


