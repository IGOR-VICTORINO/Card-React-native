import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import estilo from "./style";

function Header(props) {
    let {titulo, subtitulo} = props
    return(
    <View style={{width:'50%', flexDirection: 'row', marginTop: 20, alignItems:'center', justifyContent:'space-between' }}>
    <Text style={estilo.titulo}>{titulo}</Text>
    <Text style={estilo.subtitulo}>{subtitulo}</Text>
    </View>
    )
}

export default Header;
 
