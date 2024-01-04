import {createStackNavigator} from '@react-navigation/stack';
import {Routes} from './Routes';
import Welcome from '../screens/Welcome/Welcome';
import Login from '../screens/Login/Login';
import Signup from '../screens/Signup/Signup';
import Home from '../screens/Home/Home';
import Profile from '../screens/Profile/Profile';
import ResetPassword from '../screens/ResetPassword/ResetPassword';
import Search from '../screens/Search/Search';
import Download from '../screens/Download/Download';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, Text, StyleSheet} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faDownload,
  faHomeAlt,
  faSearch,
} from '@fortawesome/free-solid-svg-icons';
import {faUser} from '@fortawesome/free-regular-svg-icons';
import style from './style';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeScreen() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        showLabel: false,
        tabBarStyle: {
          backgroundColor: '#1F1D2B',
          borderBlockColor: 'transparent',
        },
      }}>
      <Tab.Screen
        name={Routes.Home}
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={focused ? style.activeTab : style.inActiveTab}>
              <FontAwesomeIcon
                icon={faHomeAlt}
                color={focused ? '#12CDD9' : '#92929D'}
                size={15}
              />
              {focused && <Text style={style.tabText}>Home</Text>}
            </View>
          ),
        }}
      />
      <Tab.Screen
        name={Routes.Search}
        component={Search}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={focused ? style.activeTab : style.inActiveTab}>
              <FontAwesomeIcon
                icon={faSearch}
                color={focused ? '#12CDD9' : '#92929D'}
                size={15}
              />
              {focused && <Text style={style.tabText}>Search</Text>}
            </View>
          ),
        }}
      />
      <Tab.Screen
        name={Routes.Download}
        component={Download}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={focused ? style.activeTab : style.inActiveTab}>
              <FontAwesomeIcon
                icon={faDownload}
                color={focused ? '#12CDD9' : '#92929D'}
                size={15}
              />
              {focused && <Text style={style.tabText}>Download</Text>}
            </View>
          ),
        }}
      />
      <Tab.Screen
        name={Routes.Profile}
        component={Profile}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={focused ? style.activeTab : style.inActiveTab}>
              <FontAwesomeIcon
                icon={faUser}
                color={focused ? '#12CDD9' : '#92929D'}
                size={15}
              />
              {focused && <Text style={style.tabText}>Profile</Text>}
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const MainNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName={Routes.Welcome}
      screenOptions={{header: () => null, headerShown: false}}>
      <Stack.Screen name={Routes.Welcome} component={Welcome} />
      <Stack.Screen name={Routes.Login} component={Login} />
      <Stack.Screen name={Routes.ResetPassword} component={ResetPassword} />
      <Stack.Screen name={Routes.Signup} component={Signup} />
      <Stack.Screen name={Routes.Home} component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default MainNavigation;
