import { observer } from "mobx-react";
import { Badge, VStack } from "native-base";
import React from "react";
import { Text, View } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import cartStore from "../../stores/cartStore";

const Cart = ({ navigation }) => {
  return (
    <View>
      <VStack>
        <Badge // bg="red.400"
          colorScheme="danger"
          rounded="999px"
          mb={-7}
          zIndex={1}
          variant="solid"
          alignSelf="flex-end"
          _text={{
            fontSize: 12,
          }}
        >
          {cartStore.totalQuantity}
        </Badge>
        <Icon
          style={{ color: "white", margin: 15 }}
          size={30}
          name="shopping-cart"
          onPress={() => navigation.navigate("CartList")}
        />
      </VStack>
    </View>
  );
};

export default observer(Cart);
