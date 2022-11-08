import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AppOld from './AppOld.js';
import Song from './song.js';
import Details from './Details.js';

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Landing Page" component={AppOld} options={{headerShown: false}}/>
                <Stack.Screen name = "Details" component = {Details}/>
                <Stack.Screen name = "Song" component = {Song}/>
            </Stack.Navigator>
        </NavigationContainer>
    )

}