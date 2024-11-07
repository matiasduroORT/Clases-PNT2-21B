import { useColorScheme } from "react-native";
import { Stack } from 'expo-router';
import { ProductProvider } from "../context/ProductContext";
import { AuthProvider } from "../context/AuthContext";

export default function RootLayout() {

    const colorScheme = useColorScheme();

    return (

        <AuthProvider>
            <ProductProvider>
                <Stack>
                    <Stack.Screen name="index" options={{ headerShown: false }} />
                    <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
                    <Stack.Screen name="addproduct" options={{ headerShown: false }} />
                    <Stack.Screen name="product/[id]" options={{ headerTitle: 'Detalle de Producto' }} />
                </Stack>
            </ProductProvider>
        </AuthProvider>
    )
}