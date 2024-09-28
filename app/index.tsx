import { Link } from "expo-router";
import { Button, SafeAreaView, StyleSheet, Text, useColorScheme, View,  TouchableOpacity} from "react-native";
import TextoDiferente from "../components/TextoDiferente"
import { useContext } from "react";

export default function Index() {

  return (
    <View style={styles.conteiner}>
      <View style={styles.box1}>
        <Text>Qualquer coisa.</Text>
        <Link href={"/settings"} >Settings (Pode tocar aqui)</Link>
        <Link href={"/cliente/4"}>Pagina de cliente (Pode tocar aqui)</Link>
        <TextoDiferente />
        <TouchableOpacity style={styles.btn} >
      <Text style={styles.btnText}>Vamos lá</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  conteiner:{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor:"#6151c3"
  },
  box1:{
    backgroundColor:"#FFFFFF",
    height:200,
    width:300,
    borderRadius:30,
    paddingLeft:20
  },
  btnText:{
    color:"#FFFFFF",
    alignItems:"center",
    justifyContent:"center",
    paddingLeft:14,
    margin:8

  },
  btn:{
    backgroundColor:"#6151c3",
    width:100,
    height:30,
    borderRadius:20,
    alignContent:"center",
    left:70,
    marginTop:80

  }
})