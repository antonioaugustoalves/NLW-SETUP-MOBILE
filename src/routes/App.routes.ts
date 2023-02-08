import { NavigationContainer } from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

import { Home } from "../screens/Home";
import { New } from "../screens/New";
import { Habit } from "../screens/Habit";

export function AppRoutes(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
            
            </Stack.Navigator>
        </NavigationContainer>
    )
}
