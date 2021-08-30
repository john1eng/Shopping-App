import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import DefaultText from "../components/DefaultText";
import HeaderButton from "../components/HeaderButton";


const ShopScreen = (props) => {
  return (
    <View style={styles.content}>
      <Text>Shop Screen</Text>
      {/* <TouchableOpacity
        onPress={props.navigation.navigate({ routeName: "Product" })}
      >
        Detail
      </TouchableOpacity> */}
      <TouchableOpacity
        onPress={() => props.navigation.navigate({ routeName: "Product" })}
      >
        <DefaultText>hello</DefaultText>
      </TouchableOpacity>
    </View>
  );
};

ShopScreen.navigationOptions = (navData) => {
  return {
    headerTitle: 'home',
    headerStyle: {
      backgroundColor: 'yellow'
    },
    headerRight: () =>
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="cart"
          iconName="md-cart-outline"
        />
      </HeaderButtons>
  };
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    alignItems:"center"
  }
});
export default ShopScreen;
