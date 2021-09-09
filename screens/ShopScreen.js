import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  Button,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import DefaultText from "../components/DefaultText";
import HeaderButton from "../components/HeaderButton";
import { Products } from "../data/dummy-data";
import { useSelector } from 'react-redux';

const ShopScreen = (props) => {
  const ProductData = useSelector((state) => state.shopping.products);
  console.log(ProductData)

  const [cart, setCart] = React.useState("");
  const [quantity, setQuantity] = React.useState("1");
  const { navigation } = props;

  // React.useEffect(() => {
  //   navigation.navigate("Product", {
  //     cart
  //   }
  //   );
  // }, [cart]);

  const addCart = (productId, quantity) => {
    console.log("called");
    setCart((prev) => [...prev, { productId: productId, quantity: quantity }]);
    // props.navigation.navigate("Product", {
    //   name: "baby",
    // });
    navigation.navigate({
      routeName: "Product",
    });
  };

  const renderGridItem = (itemData) => {
    return (
      <View style={styles.gridItem}>
        <View style={styles.imgContainer}>
          <Image style={styles.img} source={{ uri: itemData.item.imgUrl }} />
        </View>
        <View style={styles.infoContainer}>
          <TouchableOpacity onPress={() => {}}>
            <DefaultText>Detail</DefaultText>
          </TouchableOpacity>

          <Text>{itemData.item.price}</Text>

          {/* <TextInput
          onChangeText={(quantity) => setQuantity(quantity)}
          value={quantity}
        /> */}

          <TouchableOpacity onPress={() => addCart(itemData.item.id, quantity)}>
            <DefaultText>Add Cart</DefaultText>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.content}>
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={ProductData}
        renderItem={renderGridItem}
        numColumns={1}
      />
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
    headerTitle: "home",
    headerStyle: {
      backgroundColor: "yellow",
    },
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item title="cart" iconName="md-cart-outline" />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  content: {
    padding: 50,
    backgroundColor: "lightblue",
  },
  gridItem: {
    flex: 1,
    alignItems: "center",
    // width: "80%",
    height: 300,
    borderWidth: 1,
    borderColor: "black",
    backgroundColor: "yellow",
    marginBottom: 10,
  },
  title: {
    alignItems: "center",
  },
  img: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  imgContainer: {
    width: "100%",
    height: 250,
    backgroundColor: "pink",
  },
  infoContainer: {
    width: "100%",
    flexDirection: "row",
    padding: 15,
    justifyContent: "space-around",
  },
});
export default ShopScreen;
