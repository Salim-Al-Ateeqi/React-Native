import {
  Button,
  Center,
  extendTheme,
  Heading,
  HStack,
  Switch,
  Text,
  useColorMode,
  VStack,
} from "native-base";
import React from "react";
import { StyleSheet, View } from "react-native";
import NativeBaseIcon from "../../components/NativeBaseIcon";

// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

// extend the theme
export const theme = extendTheme({ config });

const Home = ({ navigation }) => {
  return (
    <View>
      <Center
        _dark={{ bg: "blueGray.900" }}
        _light={{ bg: "blueGray.50" }}
        px={4}
        flex={1}
      >
        <VStack space={5} alignItems="center">
          <NativeBaseIcon />
          <Heading size="lg">Welcome to the Store</Heading>
          <HStack space={2} alignItems="center">
            <ToggleDarkMode />
          </HStack>
          <Button onPress={() => navigation.navigate("ShopList")}>
            Browse Shop List
          </Button>
        </VStack>
      </Center>
    </View>
  );
};

// Color Switch Component
function ToggleDarkMode() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack space={2} alignItems="center">
      <Text>Dark</Text>
      <Switch
        isChecked={colorMode === "light" ? true : false}
        onToggle={toggleColorMode}
        aria-label={
          colorMode === "light" ? "switch to dark mode" : "switch to light mode"
        }
      />
      <Text>Light</Text>
    </HStack>
  );
}

export default Home;
