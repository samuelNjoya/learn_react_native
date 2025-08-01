import { Link, Redirect } from "expo-router";

const { View, Text } = require("react-native")


const Page = () => {
    return <Redirect href={"/Home/Page"}/>
};

export default Page;