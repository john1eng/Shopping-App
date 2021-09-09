import React from "react";
import { View, Text } from "react-native";
import { Products } from "../data/dummy-data";
import { Ionicons } from '@expo/vector-icons'; 

const ProductScreen = (props) => {
  const cartP = props.navigation.getParam("cart");
  console.log(cartP)
  // const [cart, setCart] = React.useState(cartP);

  let displayItems;

  const findProductName = (productId) =>
    Products.find((item) => item.id == productId);

  // const deleteProductFromCart = (productId) => {
  //   const updatedCart = cart.filter(item => item.productId != productId)
  //   setCart(updatedCart);
  // }

  if (cartP) {
    displayItems = cartP.map((item) => {
      const product = findProductName(item.productId);
      return (
        <>
          <Text>Qty</Text>
          <Text>{item.quantity}</Text>
          <Text>Product Name</Text>
          <Text>{product.title}</Text>
          <Text>Price</Text>
          <Text>{product.price * item.quantity}</Text>
          <Ionicons name="trash-outline" size={24} color="black" />
        </>
      );
    });
  }

  return (
    <View>
      <Text>ProductScreen</Text>
      <Text>Total Sum: </Text>
      {displayItems}
    </View>
  );
};

// ProductScreen.navigationOptions = navData => {
//   return {
//     headerTitle: 'Shopppp',
//     headerLeft: 'haha'
//   }
// };

export default ProductScreen;
