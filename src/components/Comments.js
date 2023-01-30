//All Required Dependancies

import {  Center, Text } from "native-base";
import { StyleSheet } from "react-native";

//function To Show Comments from Users in Product Details
const Comments=(props)=>{
   return(
    <Center style={Styles.container}>
        <Text style={Styles.txt}>
            {props.Text}
        </Text>
    </Center>
   )
};
export default Comments;
//StyleSheet Properties
const Styles=StyleSheet.create({
    container:{
        backgroundColor: "white",
        padding:4,
        rounded:5,
    },
    txt:{
        color:"black",
         size:13
    }
})