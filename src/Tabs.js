//all required Dependancies
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './Screens/Home';
import {StyleSheet, Image} from 'react-native';
import {Center} from 'native-base';
import CartScreen from './Screens/CartScreen';
import ProductCategory from './Screens/ProductCategory';
const Tab = createBottomTabNavigator();

//Function For Bottom TabBar With Its Screens
function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      backBehavior="Home"
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          ...styles.tab,
        },
        tabBarHideOnKeyboard: true,
      }}>
      <Tab.Screen
        name="CartScreen"
        component={CartScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Center>
              {focused ? (
                <Image
                  source={require('../src/image/cart3.png')}
                  style={styles.img}
                />
              ) : (
                <Image
                  source={require('../src/image/cart3.png')}
                  style={styles.img}
                />
              )}
            </Center>
          ),
        }}
      />

      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Center>
              {focused ? (
                <Image
                  source={require('../src/image/homes.png')}
                  style={styles.img}
                />
              ) : (
                <Image
                  source={require('../src/image/homes.png')}
                  style={styles.img}
                />
              )}
            </Center>
          ),
        }}
      />

      <Tab.Screen
        name="ProductCategory"
        component={ProductCategory}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Center>
              {focused ? (
                <Image
                  source={require('../src/image/category.png')}
                  style={styles.img}
                />
              ) : (
                <Image
                  source={require('../src/image/category.png')}
                  style={styles.img}
                />
              )}
            </Center>
          ),
        }}
      />
    </Tab.Navigator>
  );
}
export default MyTabs;
//StyleSheet Properties For TabBar Menus
const styles = StyleSheet.create({
  tab: {
    elevation: 0,
    backgroundColor: 'white',
    height: 60,
  },
  shadow: {
    shadowColor: '#7f5Df0',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  img: {
    width: 35,
    height: 35,
    borderRadius: 7,
    resizeMode: 'contain',
  },
});
