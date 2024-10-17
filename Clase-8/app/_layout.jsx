import { useColorScheme } from "react-native";
import { Stack } from 'expo-router';
import { ProductProvider } from "../context/ProductContext";

export default function RootLayout(){

    const colorScheme = useColorScheme();

    return (
        <ProductProvider>
        <Stack>
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="addproduct" options={{ headerShown: false }} />
        </Stack>
        </ProductProvider>
    )
}