import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Chats from "./screens/Chats";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import ProfileSettings from "./screens/ProfileSettings";
import Search from "./screens/Search";
import SplashScreen from "./screens/SplashScreen";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen}/>
        <Stack.Screen name="ProfileSettings" component={ProfileSettings} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="Chats" component={Chats} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
