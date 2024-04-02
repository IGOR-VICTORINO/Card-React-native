import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import estilo from "./style";

function CardCont(props){
   let {imagem,tarefa,desc,porc} = props 
  
  return(
    <View style={estilo.cardTarefa}>
    <Image
      style={estilo.imagemCard}
      source={{
        uri: imagem,
      }}
    />
    <View style={{ marginLeft: 15, width: 400 }}>
      <Text style={estilo.tituloCard}>{tarefa}</Text>
      <Text style={estilo.textoCard}>
        {desc}
      </Text>
    </View>
    <Text style={{ fontSize: 30, color:"white", fontWeight : "600"}}>{porc}</Text>
  </View>
) 
}

export default CardCont;
