//all required Dependancies
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from './Screens/SplashScreen';
import Login from './Screens/Login';
import Register from './Screens/Register';
import Home from './Screens/Home';
import ForgetScreen from './Screens/ForgetScreen';
import ProductDetails from './Screens/ProductDetails';
import CartScreen from './Screens/CartScreen';
import Category from './Screens/ProductCategory';
import Notification from './components/Notification';
import ProductImage from './data/ProductImage';
import ShowAllProducts from './Screens/ShowAllProducts';

//All Screens Are Handles Here According To there Define Sequence
const Stack = createStackNavigator();
const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ForgetScreen"
          component={ForgetScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CartScreen"
          component={CartScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ProductDetails"
          component={ProductDetails}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Category"
          component={Category}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Notification"
          component={Notification}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ProductImage"
          component={ProductImage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ShowAllProducts"
          component={ShowAllProducts}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
