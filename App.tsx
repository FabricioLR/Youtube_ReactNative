import { NavigationContainer } from "@react-navigation/native"
import { Provider } from "react-redux";
import store from "./src/storage";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Profile from "./src/pages/profile/Profile";
import Register from "./src/pages/register/Register";
import Authenticate from "./src/pages/authenticate/Authenticate";
import Watch from "./src/pages/watch/Watch";
import HomeRoutes from "./src/components/homeRoutes/HomeRoutes";

const Stack = createNativeStackNavigator()

export default function App() {
	return (
		<Provider store={store}>
			<NavigationContainer>
				<Stack.Navigator>
					<Stack.Screen name="Home" component={HomeRoutes} options={{ headerShown: false }}/>
					<Stack.Screen name="Profile" component={Profile} options={{ headerShown: true, headerStyle: { backgroundColor: "#272727"}, title: "", headerTintColor: "white", headerShadowVisible: false }}/>
					<Stack.Screen name="Register" component={Register} options={{ headerShown: true, headerStyle: { backgroundColor: "#272727"}, title: "", headerTintColor: "white", headerShadowVisible: false }}/>
					<Stack.Screen name="Authenticate" component={Authenticate} options={{ headerShown: true, headerStyle: { backgroundColor: "#272727"}, title: "", headerTintColor: "white", headerShadowVisible: false }}/>
					<Stack.Screen name="Watch" component={Watch} options={{ headerShown: false, statusBarHidden: true }} />
				</Stack.Navigator>
			</NavigationContainer>
		</Provider>
	);
}
