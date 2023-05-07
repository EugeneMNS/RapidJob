import {View, Text, SafeAreaView} from "react-native";

import {COLORS, icons, images, SIZES } from '../constants'
import {useRouter} from "expo-router";


const Home = () => {
    const router = useRouter();

    return (
        <SafeAreaView>
            <Text>Home</Text>
        </SafeAreaView>
    )
}

export default Home