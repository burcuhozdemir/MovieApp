import {createStackNavigator} from '@react-navigation/stack';
import {Routes} from './Routes';
import Welcome from '../screens/Welcome/Welcome';
import Login from '../screens/Login/Login';
import Signup from '../screens/Signup/Signup';
import Home from '../screens/Home/Home';
import ResetPassword from '../screens/ResetPassword/ResetPassword';

const Stack = createStackNavigator();

const MainNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName={Routes.Welcome}
      screenOptions={{header: () => null, headerShown: false}}>
      <Stack.Screen name={Routes.Welcome} component={Welcome} />
      <Stack.Screen name={Routes.Login} component={Login} />
      <Stack.Screen name={Routes.ResetPassword} component={ResetPassword} />
      <Stack.Screen name={Routes.Signup} component={Signup} />
      <Stack.Screen name={Routes.Home} component={Home} />
    </Stack.Navigator>
  );
};

export default MainNavigation;
