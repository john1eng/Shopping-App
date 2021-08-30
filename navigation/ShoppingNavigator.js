import React from "react";
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import ShopScreen from "../screens/ShopScreen";
import EditProductScreen from "../screens/EditProductScreen";
import CartScreen from "../screens/CartScreen";
import OrderScreen from "../screens/OrderScreen";
import ProductScreen from "../screens/ProductScreen";
import YourProductScreen from "../screens/YourProductScreen";

const defaultsStackNavOptions = {
  
}

const ShoppingNavigator = createStackNavigator(
  {
  Shop: {
    screen: ShopScreen,
  },
  Cart: {
    screen: CartScreen,
  },
  EditProduct: {
    screen: EditProductScreen,
  },
  Order: {
    screen: OrderScreen,
  },
  Product: {
    screen: ProductScreen,
  },
  YourProduct: {
    screen: YourProductScreen,
  }
  },
  {
    defaultNavigationOptions: defaultsStackNavOptions
  }
);

export default createAppContainer(ShoppingNavigator);
